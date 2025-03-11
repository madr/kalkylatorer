import { currentView } from "./store";

export const navigate = (page: "start" | "fatcalc") =>
  currentView.update((_) => page);
