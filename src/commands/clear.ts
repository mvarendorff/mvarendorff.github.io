import { CurrentLinesStore } from "../stores";
import Command from "./Command";

const Clear: Command = {
  action: () => {
    CurrentLinesStore.clear();
  },
  description: "Clears the console",
  name: "clear"
};

export default Clear;
