import { model, Schema } from "mongoose";
import { TTrainer } from "./trainer.interface";

const trainerSchema = new Schema<TTrainer>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    experience: {
      type: Number,
      required: true,
    },
    presentAddress: {
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    permanentAddress: {
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    trainerId: {
      type: String,
      required: true,
      unique: true,
    },
    punchId: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    specialization: {
      type: Schema.Types.ObjectId,
      ref: "Specialization",
      required: true,
    },
    status: {
      type: Number,
      default: 1,
    },
    availability: {
      type: String,
      enum: ["Morning", "Evening", "Night"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Trainer = model<TTrainer>("Trainer", trainerSchema);
