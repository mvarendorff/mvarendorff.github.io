export default class Line {
  content: string;
  hasPrompt: boolean;
  acceptsInput: boolean;

  static out(content: string): Line {
    return new Line(content, false, false);
  }

  constructor(content: string, hasPrompt: boolean, acceptsInput: boolean) {
    this.content = content;
    this.hasPrompt = hasPrompt;
    this.acceptsInput = acceptsInput;
  }

  toString(): string {
    return this.content;
  }
}