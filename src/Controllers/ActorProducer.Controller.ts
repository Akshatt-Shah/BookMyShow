import { IActorProducer } from "../Interfaces";
import { actorProducerServices } from "../Services";
import { Request, Response } from "express";
const actorProducerService = new actorProducerServices();

export class actorProducerControllers {
  async createActorProducer(req: Request, res: Response) {
    try {
      const Data: IActorProducer = req.body;
      const actorProducerData = await actorProducerService.createActorProducer(
        Data
      );
      res.status(200).json(actorProducerData);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
  async getActorProducer(req: Request, res: Response) {
    try {
      const Data: IActorProducer = req.body;
      const actorProducerData = await actorProducerService.getActorProducer();
      res.status(200).json(actorProducerData);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
  async updateActorProducer(req: Request, res: Response) {
    try {
      const Data: IActorProducer = req.body;
      const { id } = req.params;
      const actorProducerData = await actorProducerService.updateActorProducer(
        id,
        Data
      );
      res.status(200).json(actorProducerData);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
  async deleteActorProducer(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const actorProducerData = await actorProducerService.deleteActorProducer(
        id
      );
      res.status(200).json(actorProducerData);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
}
