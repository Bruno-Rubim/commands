import GameState from "./gameState.js";
import { bindListeners } from "./inputs.js";
export const gameState = new GameState();
bindListeners();
