import { observable, action } from "mobx";


export default class CommandHistoryStore {

  @observable
  history: Array<string> = [];

  @observable
  currentIndex = 0;

  @action.bound
  addEntry(command: string): void {
    this.history.push(command);
  }

  @action.bound
  goBackAndGetPrevious(): string {
    if (this.history.length === 0) return "";

    this.currentIndex = this.currentIndex < 1 ? 0 : this.currentIndex - 1;
    return this.history[this.currentIndex];
  }

  @action.bound
  goForwardAndGetNext(): string {
    if (this.history.length === 0) return "";

    this.currentIndex = (this.currentIndex + 1) % this.history.length;
    return this.history[this.currentIndex];
  }

}
