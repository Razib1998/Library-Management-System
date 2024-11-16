import prisma from "../../Shared/prisma";

const borrowBook = async (payload: any) => {
  // check if the book is available
  const isBookAvailable = await prisma.book.findUniqueOrThrow({
    where: {
      bookId: payload?.bookId,
    },
  });

  const result = await prisma.$transaction(async (transactionClient) => {
    // borrow the book
    const borrowBook = await transactionClient.borrowRecord.create({
      data: payload,
      select: {
        borrowId: true,
        borrowDate: true,
        bookId: true,
        memberId: true,
        returnDate: false,
      },
    });

    // update the available quantity in Book model

    const updatedData = await transactionClient.book.update({
      where: {
        bookId: isBookAvailable?.bookId,
      },
      data: {
        availableCopies: isBookAvailable?.availableCopies - 1,
      },
    });
    console.log("Transaction details:", { borrowBook, updatedData });
    return borrowBook;
  });
  console.log("Borrow operation succeeded:", result);

  return result;
};

export const BorrowedServices = {
  borrowBook,
};
