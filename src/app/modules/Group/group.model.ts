import { model, Schema } from "mongoose";
import { TGroup } from "./group.interface";

const groupSchema = new Schema<TGroup>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Group = model<TGroup>("Group", groupSchema);
