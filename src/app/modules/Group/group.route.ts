import { Router } from "express";
import { GroupValidation } from "./group.validation";
import { validationMiddleware } from "../../middleware/validationMiddleware";
import { GroupController } from "./group.controller";

const router = Router();

router.post('/create', validationMiddleware(GroupValidation.GroupInsertValidation), GroupController.createGroup);
router.get('/get/:id?', GroupController.getGroup);

router.put('/update/:id', validationMiddleware(GroupValidation.GroupInsertValidation), GroupController.updateGroup);

router.delete('/delete/:id', GroupController.deleteGroup);




export const GroupRouter = router;