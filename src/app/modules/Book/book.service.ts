import { Book } from "@prisma/client";
import prisma from "../../Shared/prisma";

const createBook = async (payload: any) => {
  const isExistsBook = await prisma.book.findFirstOrThrow({
    where: {
      title: payload?.title,
    },
  });

  const result = await prisma.book.create({
    data: payload,
  });
  return result;
};

const findAllBooks = async () => {
  const result = await prisma.book.findMany();
  return result;
};
const findSingleBook = async (id: string) => {
  const result = await prisma.book.findUnique({
    where: {
      bookId: id,
    },
  });
  return result;
};
const updateBook = async (id: string, payload: Partial<Book>) => {
  // check if the book is available in database

  await prisma.book.findFirstOrThrow({
    where: {
      bookId: id,
    },
  });
  const result = await prisma.book.update({
    where: {
      bookId: id,
    },
    data: payload,
  });
  return result;
};

const deleteBook = async (id: string) => {
  const result = await prisma.book.delete({
    where: {
      bookId: id,
    },
  });
  return result;
};

export const BookServices = {
  createBook,
  findAllBooks,
  findSingleBook,
  updateBook,
  deleteBook,
};
