import { currentView } from "./store";

export const navigate = (
  page: "start" | "armyfatcalc" | "navyfatcalc" | "onerepmax",
) => currentView.update((_) => page);
