import mongoose, { Schema } from "mongoose";

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dob: { type: Date, required: true },
    gender: {
      type: String,
      enum: {
        values: ["Male", "Female", "Other"],
        message: "${VALUE} Is Not A Valid Gender",
      },
      required: true,
    },
    role: {
      type: String,
      enum: {
        values: ["Director", "Super-Admin", "User", "Theater-Admin"],
        message: "${VALUE} Is Not A Valid Gender",
      },
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("users", UserSchema);
export { Users };
