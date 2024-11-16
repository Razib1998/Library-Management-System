import { Request, Response } from "express";
import { BookServices } from "./book.service";
import sendResponse from "../../Shared/sendResponse";
import { json } from "stream/consumers";

const createBook = async (req: Request, res: Response) => {
  try {
    const result = await BookServices.createBook(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Book created Successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const findAllBooks = async (req: Request, res: Response) => {
  try {
    const result = await BookServices.findAllBooks();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Books are retrieved Successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const findSingleBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await BookServices.findSingleBook(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Book is retrieved Successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await BookServices.updateBook(id, updatedData);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Book updated Successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await BookServices.deleteBook(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Book is deleted Successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const BookControllers = {
  createBook,
  findAllBooks,
  findSingleBook,
  updateBook,
  deleteBook,
};
