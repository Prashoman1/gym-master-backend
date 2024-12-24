import { Router } from "express";
import { GroupRouter } from "../app/modules/Group/group.route";

const router = Router();
const moduleRoute = [
  {
    path: "/group",
    route: GroupRouter,
  },
];

moduleRoute.forEach((root) => {
  router.use(root.path, root.route);
});

export default router;
