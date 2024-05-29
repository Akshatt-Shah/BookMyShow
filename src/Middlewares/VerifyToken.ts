import Jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
export interface NewRequest extends Request {
  Id?: string;
  Role?: string;
}
export class VerifyToken {
  async VerifySuperAdmin(req: NewRequest, res: Response, next: NextFunction) {
    try {
      const token = req.cookies.UserToken;
      if (token) {
        const data: any = await Jwt.verify(token, "Akshat");

        if (data && data.Role === "Super-Admin") {
          req.Id = data.UserToken;
          req.Role = data.Role;
          //   console.log(req.Id)
          //   console.log(req.Role)
          next();
        } else {
          res
            .status(400)
            .json({ message: "Unauthorized Super-Admin..............." });
        }
      } else {
        res
          .status(400)
          .json({ message: "Login is Required By Super-Admin Credemtials" });
      }
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
  async VerifyForAll(req: NewRequest, res: Response, next: NextFunction) {
    try {
      const token = req.cookies.UserToken;
      if (token) {
        const data: any = await Jwt.verify(token, "Akshat");

        if (data) {
          req.Id = data.UserToken;
          req.Role = data.Role;
          //   console.log(req.Id)
          //   console.log(req.Role)
          next();
        } else {
          res
            .status(400)
            .json({ message: "Unauthorized Super-Admin..............." });
        }
      } else {
        res
          .status(400)
          .json({ message: "Login is Required By Super-Admin Credemtials" });
      }
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
  async VerifyUser(req: NewRequest, res: Response, next: NextFunction) {
    try {
      const token = req.cookies.UserToken;
      if (token) {
        const data: any = await Jwt.verify(token, "Akshat");

        if (data && data.Role === "User") {
          req.Id = data.UserToken;
          req.Role = data.Role;
          next();
        } else {
          res.status(400).json({ message: "Unauthorized User..............." });
        }
      } else {
        res
          .status(400)
          .json({ message: "Login is Required By User Credemtials" });
      }
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
  async VerifyDirector(req: NewRequest, res: Response, next: NextFunction) {
    try {
      const token = req.cookies.UserToken;
      if (token) {
        const data: any = await Jwt.verify(token, "Akshat");

        if (data && data.Role === "Director") {
          req.Id = data.UserToken;
          req.Role = data.Role;
          next();
        } else {
          res
            .status(400)
            .json({ message: "Unauthorized Director..............." });
        }
      } else {
        res
          .status(400)
          .json({ message: "Login is Required By Director Credemtials" });
      }
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
  async VerifyTheaterAdmin(req: NewRequest, res: Response, next: NextFunction) {
    try {
      const token = req.cookies.UserToken;
      if (token) {
        const data: any = await Jwt.verify(token, "Akshat");

        if (data && data.Role === "Theater-Admin") {
          req.Id = data.UserToken;
          req.Role = data.Role;
          next();
        } else {
          res
            .status(400)
            .json({ message: "Unauthorized Theater-Admin..............." });
        }
      } else {
        res
          .status(400)
          .json({ message: "Login is Required By Theater-Admin Credemtials" });
      }
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
}
