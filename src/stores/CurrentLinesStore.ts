import { action, observable } from "mobx";
import Line from "../entities/Line";

export default class CurrentLinesStore {
  @observable lines: Array<Line> = [
    new Line("Welcome to geisterfurz007.github.io!", false, false),
    new Line("Feel free to have a look around, there isn't a lot here yet but you might find a thing or two.", false, false),
    new Line("", true, true),
  ];

  @action.bound
  addLine(line: Line) {
    this.lines.push(line);
  }

  @action.bound
  updatePrompt(input: string) {
    this.lines[this.lines.length - 1] = new Line(input, true, false);
  }

  @action.bound
  markOutputDone() {
    this.addLine(Line.out(""));
    this.addLine(new Line("", true, true));
  }

  @action.bound
  clear() {
    this.lines.length = 0;
  }

}

