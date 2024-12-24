import { Types } from "mongoose";


type TTrainer = {
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
    branchId: string;
    phone: string;
    photo: string;
    // specilization: "yoga" | "muscular" | "cardio" | "aerobics";
    specialization: Types.ObjectId;
    status: number;
    availability: "Morning" | "Evening" | "Night";
};

