import { Types } from "mongoose";


export type TUser ={
    _id: string;
    group: Types.ObjectId;
    email: string;
    password: string;
    isDeleted: boolean;
    status: number;
}