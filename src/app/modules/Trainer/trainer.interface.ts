import { Types } from "mongoose";


export type TTrainer = {
    _id: string;
    user: Types.ObjectId;
    email: string;
    fullName: {
        firstName: string;
        lastName: string;
    };
    experience: number;
    presentAddress: {
        city: string;
        state: string;
        country: string;
    };
    permanentAddress: {
        city: string;
        state: string;
        country: string;
    };
    trainerId: string;
    punchId: string;
    phone: string;
    photo: string;
    specialization: Types.ObjectId;
    status: number;
    availability: "Morning" | "Evening" | "Night";
};

