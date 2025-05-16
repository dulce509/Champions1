
import { Router} from "express";
import { deletePlayers, getPlayer, getPlayerById, postPlayer, updatePlayers } from "./controllers/players-controller";
import { getClubs } from "./controllers/clubs-controller";

const router = Router()
router.get("/players", getPlayer);

router.post("/players", postPlayer);
router.delete("/players/:id", deletePlayers);
router.patch("/players/:id", updatePlayers);
router.get("/players/:id", getPlayerById);

router.get("/clubs", getClubs )
export default router;