import { initialLoad, addItem } from "./modules/helper.js";

initialLoad();
document.getElementById("todoBtn").addEventListener("click", () => addItem());
