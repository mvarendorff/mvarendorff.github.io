import { CurrentLinesStore } from "../stores";
import Line from "../entities/Line";
import Command from "./Command";

import commands from "./index";

const Help: Command = {
  action: () => {
    const listing = Object.values(commands).map(c => `${c.name}: ${c.description}`);
    ["Available commands:", ...listing]
      .map(Line.out).forEach(CurrentLinesStore.addLine);
  },
  description: "Shows this help",
  name: "help"
};

export default Help;
