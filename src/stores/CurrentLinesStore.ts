import { action, observable } from "mobx";
import Line from "../entities/Line";

export default class CurrentLinesStore {
  @observable lines: Array<Line> = [
    new Line("Welcome to mvarendorff.github.io!", false, false),
    new Line("Feel free to have a look around, there isn't a lot here yet but you might find a thing or two.", false, false),
    new Line("", true, true),
  ];

  @action.bound
  addLine(line: Line): void {
    this.lines.push(line);
  }

  @action.bound
  updatePrompt(input: string): void {
    this.lines[this.lines.length - 1] = new Line(input, true, false);
  }

  @action.bound
  markOutputDone(): void {
    this.addLine(Line.out(""));
    this.addLine(new Line("", true, true));
  }

  @action.bound
  clear(): void {
    this.lines.length = 0;
  }

}

