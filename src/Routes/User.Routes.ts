import { UserControllers } from "../Controllers";
import { Router } from "express";
const UserController = new UserControllers();
import { VerifyToken } from "../Middlewares/VerifyToken";
const Verify = new VerifyToken();
const URoute = Router();

URoute.post("/User/create-User", UserController.createUser);

URoute.put("/User/update-User", UserController.UpdateUser);

URoute.delete("/User/delete-User", UserController.DeleteUser);

URoute.get("/User/get-User", Verify.VerifyForAll, UserController.GetUser);

URoute.post("/User/login-User", UserController.LoginUser);

export { URoute };
