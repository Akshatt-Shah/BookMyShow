import express, { Request, Response } from "express";
import { IUser } from "../Interfaces";
import { UserServices } from "../Services";
import bcrypt from "bcrypt";
import { Msg } from "../utills";
import { NewRequest } from "../Middlewares/VerifyToken";
const UserService = new UserServices();

export class UserControllers {
  async createUser(req: Request, res: Response) {
    try {
      let Data: IUser = req.body;
      Data.password = await bcrypt.hash(Data.password, 10);
      const UserData = await UserService.createUser(Data);
      res.status(200).json(UserData);
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: false });
    }
  }
  async UpdateUser(req: Request, res: Response) {
    try {
      const { id } = req.query;
      let Data: IUser = req.body;
      Data.password = await bcrypt.hash(Data.password, 10);
      const UserData = await UserService.updateUser(id as string, Data);
      res.status(200).json(UserData);
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: false });
    }
  }
  async DeleteUser(req: Request, res: Response) {
    try {
      const { id } = req.query;
      const UserData = await UserService.deleteUser(id as string);
      res.status(200).json(UserData);
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: false });
    }
  }
  async GetUser(req: NewRequest, res: Response) {
    try {
      const { Id, Role } = req;
      console.log(Id,Role)
      if (Role === "User" || Role === "Director" || Role === "Theater-Admin") {
        const UserData = await UserService.getUser(Id as string);
        res.status(200).json(UserData);
      } else {
        const UserData = await UserService.getUser();
        res.status(200).json(UserData);
      }
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: false });
    }
  }
  async LoginUser(req: Request, res: Response) {
    try {
      let { email, password } = req.body;
      const UserData = await UserService.loginUser(email, password);
      res.cookie("UserToken", UserData?.Token);
      res.status(200).json(UserData);
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: false });
    }
  }
}
