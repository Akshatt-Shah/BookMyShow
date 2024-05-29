import mongoose, { Schema } from "mongoose";
const actorAndProducerSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    type: {
      type: String,
      enum: {
        values: ["Actor", "Producer"],
        message: "${VALUE} Is Not A Valid Type",
      },
    },
  },
  {
    timestamps: true,
  }
);
const ActorProducer = mongoose.model("actorproducer", actorAndProducerSchema);
export { ActorProducer };
