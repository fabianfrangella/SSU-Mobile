import { createStore } from "redux";
import ssu_reducer from "./ssu_reducer";
const store = createStore(
  ssu_reducer

);
export {store};