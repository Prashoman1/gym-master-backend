import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync";
import { GroupService } from "./group.service";
import sendResponse from "../../../utils/sendResStatus";
import httpStatus from "http-status";

const createGroup = catchAsync(async (req: Request, res: Response) => {
  const groupInfo = req.body;
  const group = await GroupService.createGroupIntDB(groupInfo);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    data: group,
    message: "Group created successfully",
  });
});

const getGroup = catchAsync(async (req: Request, res: Response) => {
    const groupId = req.params.id;
  const group = await GroupService.getGroupIntoDB(groupId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: group,
    message: "Group fetched successfully",
  });
});

const updateGroup = catchAsync(async (req: Request, res: Response) => {
    const groupId = req.params.id;
    const groupInfo = req.body;
    const group = await GroupService.updateGroupIntoDB(groupInfo,groupId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: group,
      message: "Group updated successfully",
    });
})

const deleteGroup = catchAsync(async (req: Request, res: Response) => {
    const groupId = req.params.id;
    const group = await GroupService.groupDeleteFromDB(groupId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: group,
      message: "Group deleted successfully",
    });
});

export const GroupController = {
  createGroup,
  getGroup,
  updateGroup,
  deleteGroup
};
