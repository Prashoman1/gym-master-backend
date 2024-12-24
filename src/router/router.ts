import { Router } from "express";
import { GroupRouter } from "../app/modules/Group/group.route";
import { SpecializationRouter } from "../app/modules/Specialization/specialization.route";

const router = Router();
const moduleRoute = [
  {
    path: "/group",
    route: GroupRouter,
  },
  {
    path:"/specializations",
    route:SpecializationRouter,
  }
];

moduleRoute.forEach((root) => {
  router.use(root.path, root.route);
});

export default router;
