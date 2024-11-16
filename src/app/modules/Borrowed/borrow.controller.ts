import { RequestHandler } from "express";
import catchAsync from "../../Shared/catchAsync";
import sendResponse from "../../Shared/sendResponse";
import { HttpStatus } from "http-status-ts";

const borrowedBook: RequestHandler = catchAsync(async (req, res) => {
  const result = await MemberServices.createMember(req.body);
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
