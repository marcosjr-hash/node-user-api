import { Router } from "express";
import * as userController from  "../controllers/userController.js";

const router = Router();

router.post("/usuarios", userController.create);
router.get("/usuarios", userController.list);
router.put("/usuarios/:id", userController.update);
router.delete("/usuarios/:id", userController.remove);

export default router;