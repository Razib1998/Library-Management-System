import { RequestHandler } from "express";
import catchAsync from "../../Shared/catchAsync";
import sendResponse from "../../Shared/sendResponse";
import { HttpStatus } from "http-status-ts";
import { BorrowedServices } from "./borrow.service";

const borrowedBook: RequestHandler = catchAsync(async (req, res) => {
  const result = await BorrowedServices.borrowBook(req.body);
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: "Book borrowed  Successfully!",
    data: result,
  });
});

export const BorrowedControllers = {
  borrowedBook,
};
