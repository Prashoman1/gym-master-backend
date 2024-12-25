import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../../config";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";


const userSchema = new Schema<TUser>(
  {
    group: {
      type: Schema.Types.ObjectId,
      ref: "Group",
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function(next){
    const user = this;
    try {
      const passwordHash = await bcrypt.hash(user.password, Number(config.salt_rounds));
      user.password = passwordHash;
      next();
    } catch (error:any) {
      throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, "Internal Server Error", error);
    }
})


export const User = model<TUser>("User", userSchema);
