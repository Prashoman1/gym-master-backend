import { Router } from "express";

import { validationMiddleware } from "../../middleware/validationMiddleware";
import { SpecializationValidation } from "./specialization.validation";
import { SpecializationController } from "./specialisztion.controller";


const router = Router();

router.post('/store', validationMiddleware(SpecializationValidation.SpecializationInsertValidation), SpecializationController.createSpecialization);
router.get('/get/:id?', SpecializationController.getSpecialization);

router.put('/update/:id', validationMiddleware(SpecializationValidation.SpecializationUpdateValidation), SpecializationController.updateSpecialization); 

router.delete('/delete/:id', SpecializationController.deleteSpecialization);




export const SpecializationRouter = router;