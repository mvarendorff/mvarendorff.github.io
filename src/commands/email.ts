import { CurrentLinesStore } from "../stores";
import Line from "../entities/Line";
import Command from "./Command";

const Email: Command = {
  action: () => {
    ["The first part of this domain at google's mail server",
      "(if you are not a bot, you should be able to piece that one together)"].map(Line.out).forEach(CurrentLinesStore.addLine);
  },
  description: "Shows my mail address (please don't spam...)",
  name: "email",
};

export default Email;
