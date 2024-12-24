import { model, Schema } from "mongoose";
import { TSpecialization } from "./specialization.interface";


const specializationSchema = new Schema<TSpecialization>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Specialization = model<TSpecialization>("Specialization", specializationSchema);
