import prisma from "../../Shared/prisma";

const returnBook = async (payload: any) => {
  const borrowRecord = await prisma.borrowRecord.findUnique({
    where: {
      borrowId: payload.borrowId,
    },
  });
  if (!borrowRecord) {
    throw new Error("Borrow data not found");
  }
  const { bookId } = borrowRecord;

  const isBookAvailable = await prisma.book.findUnique({
    where: {
      bookId: bookId,
    },
  });

  const result = await prisma.$transaction(async (transactionClient) => {
    // return  the book
    const returnBook = await transactionClient.borrowRecord.update({
      where: {
        borrowId: payload?.borrowId,
      },
      data: {
        returnDate: new Date(),
      },
    });

    //  increase the available quantity in Book model

    await transactionClient.book.update({
      where: {
        bookId: isBookAvailable?.bookId,
      },
      data: {
        availableCopies: isBookAvailable?.availableCopies! + 1,
      },
    });
    return returnBook;
  });

  return result;
};

export const ReturnServices = {
  returnBook,
};
