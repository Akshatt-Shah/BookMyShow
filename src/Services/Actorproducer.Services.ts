import { ActorProducer } from "../Models";
import { IActorProducer } from "../Interfaces";
import { Msg } from "../utills";

export class actorProducerServices {
  async createActorProducer(Data: IActorProducer) {
    try {
      const data = await ActorProducer.create(Data);
      return { Data: data, status: true, message: Msg.createdata(Data.type) };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async getActorProducer() {
    try {
      const data = await ActorProducer.find();
      return { Data: data, status: true };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async updateActorProducer(id: string, Data: IActorProducer) {
    try {
      const data = await ActorProducer.findByIdAndUpdate(id, Data);
      return { Data: data, status: true, message: Msg.Updatedata(Data.type) };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async deleteActorProducer(id: string) {
    try {
      const data = await ActorProducer.findByIdAndDelete(id);
      return { Data: data, status: true };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
}
