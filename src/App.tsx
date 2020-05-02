import React from "react";
import "./App.css";
import Line from "./entities/Line";
import { configure } from "mobx";
import { observer } from "mobx-react";
import { CurrentLinesStore } from "./stores";
import PromptInput from "./components/PromptInput";

configure({ enforceActions: "observed" });

const LineWithPrompt: React.FC<{
  line: Line;
  inputRef: (ref: PromptInput | null) => void;
}> = ({ line, inputRef }) => {
  console.log("Rendering LineWithPrompt");
  console.log(PromptInput);
  console.log("Imported PromptInput above");

  return (
    <div className={"prompt-container"}>
      <p>{window.location.toString() + ">" + line}</p>
      {line.acceptsInput && <PromptInput ref={inputRef} />}
    </div>
  );
};

@observer
export default class App extends React.Component {
  inputRef: PromptInput | null | undefined;

  constructor(props: {}) {
    super(props);

    this.consoleClick = this.consoleClick.bind(this);
  }

  render(): React.ReactNode {
    console.log("Rendering App!");
    return (
      <div className="console" onClick={this.consoleClick}>
        {CurrentLinesStore.lines.map(this.lineToHtml)}
      </div>
    );
  }

  //TODO: Get this to work without eating dragging
  consoleClick(): void {
    this.inputRef && this.inputRef.focus();
  }

  lineToHtml = (line: Line, index: number): React.ReactNode => {
    console.log("lineToHtml: " + line.toString() + " index " + index);
    console.log(LineWithPrompt + "");
    console.log(this.LineWithoutPrompt + "");
    console.log("MARKER");

    return line.hasPrompt ? (
      <LineWithPrompt
        key={index.toString()}
        line={line}
        inputRef={(ref): void => {
          this.inputRef = ref;
        }}
      />
    ) : (
      <this.LineWithoutPrompt key={index.toString()} line={line} />
    );
  };

  LineWithoutPrompt: React.FC<{ line: Line }> = ({ line }) => (
    <p>{line.toString()}</p>
  );
}
