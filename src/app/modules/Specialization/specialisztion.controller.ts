import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync";
import { SpecializationService } from "./specialization.service";
import sendResponse from "../../../utils/sendResStatus";
import httpStatus from "http-status";

const createSpecialization = catchAsync(async (req: Request, res: Response) => {
  const info = req.body;
  const specialization = await SpecializationService.storeSpecializationIntoDB(
    info
  );
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    data: specialization,
    message: "Specialization created successfully",
  });
});

const getSpecialization = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const specialization = await SpecializationService.getSpecializationFromDB(
    id
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: specialization,
    message: "Specialization fetched successfully",
  });
});

const updateSpecialization = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const info = req.body;
  const specialization = await SpecializationService.updateSpecializationIntoDB(
    id,
    info
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: specialization,
    message: "Specialization updated successfully",
  });
});

const deleteSpecialization = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const specialization = await SpecializationService.deleteSpecializationFromDB(
    id
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: specialization,
    message: "Specialization deleted successfully",
  });
});



export const SpecializationController = {
    createSpecialization,
    getSpecialization,
    updateSpecialization,
    deleteSpecialization,
    };