import { CurrentLinesStore } from "../stores";
import Line from "../entities/Line";
import Command from "./Command";

const Linkedin: Command = {
  action: () => CurrentLinesStore.addLine(Line.out("https://linkedin.com/in/michelvonv")), description: "Shows a link to my LinkedIn account", name: "linkedin"
};

export default Linkedin;
