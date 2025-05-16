import { response } from "express";
import { PlayerModel } from "../models/player-model";
import { statisticsModel } from "../models/statistics-model";
import { deleteOnePlayer, findAllPlayers, findAndModifyPlayer, findPlayerById, insertPlayer } from "../repositories/players-repository";
import  * as HttpResponse  from "../utils/http-helper";

export const getPlayerService = async () =>{
const data = await findAllPlayers ();
let response = null;

if (data){
    response = await HttpResponse.ok(data);

}else{
    response = await HttpResponse.noContent();
}
return response;
};

export const getPlayerByIdService = async (id: number) => {
    // pedir para o repositório de dados
    const data = await findPlayerById(id);
    let response = null
if (data){
    response = await HttpResponse.ok(data);

}else {
    response = await HttpResponse.noContent();
}
return response;
};

export const createPlayerService = async (player: PlayerModel) =>{
    //verifica se está vazio
    let response = null;
    if(player){
       await insertPlayer(player);
       response = await HttpResponse.created()
    }else{
        response = await HttpResponse.badRequest();
    }
      return response 
};

export const deletePlayerService = async (id:number) => {
    let response = null;
    const isDeleted = await deleteOnePlayer(id);

    if(isDeleted) {
        response = await HttpResponse.ok({message: "deleted"});
    } else{
        response = await HttpResponse.badRequest();
    }
       
    return response
};

export const updatePlayerService = async (id:number, statistics: statisticsModel) => {
const data = await findAndModifyPlayer(id, statistics);
let response = null;
if(Object.keys(data).length ===0){
 response = await HttpResponse.badRequest();
} else {
 response = await HttpResponse.ok(data);
}
 return response;
};