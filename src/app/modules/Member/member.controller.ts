import { NextFunction, Request, RequestHandler, Response } from "express";
import sendResponse from "../../Shared/sendResponse";
import { MemberServices } from "./member.service";
import catchAsync from "../../Shared/catchAsync";
import { HttpStatus } from "http-status-ts";

const createMember: RequestHandler = catchAsync(async (req, res) => {
  const result = await MemberServices.createMember(req.body);
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: "Member created Successfully!",
    data: result,
  });
});

const getAllMembers = async (req: Request, res: Response) => {
  try {
    const result = await MemberServices.getAllMembers();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Members are retrieved Successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleMember = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await MemberServices.getSingleMember(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Member is retrieved Successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const updateMember = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await MemberServices.updateMember(id, updatedData);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Member is updated Successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const deleteMember = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await MemberServices.deleteMember(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Member is deleted Successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const MemberControllers = {
  createMember,
  getAllMembers,
  getSingleMember,
  updateMember,
  deleteMember,
};
