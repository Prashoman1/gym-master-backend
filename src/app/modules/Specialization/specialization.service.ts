import { TSpecialization } from "./specialization.interface";
import { Specialization } from "./specialization.model";


const storeSpecializationIntoDB = async (payload:TSpecialization) =>{
    const result = await Specialization.create(payload);
    return result;
} 

const getSpecializationFromDB = async (id:string) =>{
    if(id){
        const result = await Specialization.findById(id);
        return result;
    }
    const result = await Specialization.find();
    return result;
}

const updateSpecializationIntoDB = async (id:string,payload:TSpecialization) =>{
    const result = await Specialization.findByIdAndUpdate(id,payload,{new:true});
    return result;
}

const deleteSpecializationFromDB = async (id:string) =>{
    const result = await Specialization.findByIdAndDelete(id);
    return result;
}


export const SpecializationService = {
    storeSpecializationIntoDB,
    getSpecializationFromDB,
    updateSpecializationIntoDB,
    deleteSpecializationFromDB
}