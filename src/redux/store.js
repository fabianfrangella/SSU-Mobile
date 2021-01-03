import { createStore } from "redux";
import ssu_reducer from "./universidadReducer";
const store = createStore(
  ssu_reducer

);
export {store};