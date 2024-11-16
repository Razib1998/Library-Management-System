import { RequestHandler } from "express";
import catchAsync from "../../Shared/catchAsync";
import sendResponse from "../../Shared/sendResponse";
import { HttpStatus } from "http-status-ts";
import { ReturnServices } from "./return.service";

const returnBook: RequestHandler = catchAsync(async (req, res) => {
  const result = await ReturnServices.returnBook(req.body);
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: "Book returned  Successfully!",
    data: result,
  });
});

export const ReturnControllers = {
  returnBook,
};
