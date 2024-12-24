import { TGroup } from "./group.interface";
import { Group } from "./group.model";

const createGroupIntDB = async (payload: TGroup) => {
  const result = await Group.create(payload);
  return result;
};

const getGroupIntoDB = async (payload: string) => {
  if (payload) {
    const result = await Group.findById(payload);
    return result;
  }
  const result = await Group.find();
  return result;
};

const updateGroupIntoDB = async (payload:TGroup,groupId:string)=>{
    const result = await Group.findByIdAndUpdate(groupId,payload,{new:true});
    return result;
}

const groupDeleteFromDB = async (groupId:string)=>{
    const result = await Group.findByIdAndDelete(groupId);
    return result;
}

export const GroupService = {
  createGroupIntDB,
  getGroupIntoDB,
  updateGroupIntoDB,
  groupDeleteFromDB
};
