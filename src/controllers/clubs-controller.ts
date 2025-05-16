
import express, {Request, Response} from "express";
  
import { getClubService } from "../services/club-service";

export const getClubs = async (req: Request, res: Response) => {
const response = await getClubService()
res.status(response.statusCode).json(response.body)
};