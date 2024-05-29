import { IUser } from "../Interfaces";
import { Users } from "../Models";
import { Msg } from "../utills";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "config";
export class UserServices {
  async createUser(Data: IUser) {
    try {
      console.log(Data);
      const UserData = await Users.create(Data);
      return {
        Data: UserData,
        message: Msg.createdata("User"),
        status: false,
      };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async updateUser(id: string, Data: IUser) {
    try {
      console.log(Data);
      const UserData = await Users.findByIdAndUpdate(id, Data);
      return {
        Data: UserData,
        message: Msg.Updatedata("User"),
        status: false,
      };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async deleteUser(id: string) {
    try {
      const UserData = await Users.findByIdAndDelete(id);
      return {
        Data: UserData,
        message: Msg.Deletedata("User"),
        status: false,
      };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async getUser(id?: string) {
    try {
      if (id) {
        const UserData = await Users.findOne({ _id: id });
        return {
          Data: UserData,
          message: Msg.Selectdata("User"),
          status: false,
        };
      } else {
        const UserData = await Users.find();
        return {
          Data: UserData,
          message: Msg.Selectdata("User"),
          status: false,
        };
      }
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async loginUser(email: string, password: string) {
    try {
      const userdata = await Users.find({
        email: email,
      });

      if (userdata.length > 0) {
        const Userpassword = userdata[0].password;
        if (typeof Userpassword == "string") {
          const verifypassword = await bcrypt.compare(password, Userpassword);
          if (verifypassword) {
            const Token = await Jwt.sign(
              { UserToken: userdata[0]._id, Role: userdata[0].role },
              "Akshat",
              {
                expiresIn: "12h",
              }
            );

            return { message: "Login Successful", Token: Token, status: true };
          }
        } else {
          return {
            message: "Password Does not Match please provide right password",
            status: true,
          };
        }
      } else {
        return { Message: Msg.NotFounddata("User"), status: true };
      }
      // return {
      //   Data: userdata,
      //   status: false,
      // };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
}
