import React from "react";
import "./App.css";
import Line from "./entities/Line";
import { configure } from "mobx";
import { observer } from "mobx-react";
import { CurrentLinesStore } from "./stores";
import PromptInput from "./components/PromptInput";

configure({ enforceActions: "observed" });

@observer
class App extends React.Component {
  inputRef: PromptInput | null | undefined;

  constructor(props: {}) {
    super(props);

    this.consoleClick = this.consoleClick.bind(this);
  }

  render(): React.ReactNode {
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

  lineToHtml = (line: Line, index: number): React.ReactNode =>
    line.hasPrompt ? (
      <this.LineWithPrompt key={index.toString()} line={line} />
    ) : (
      <this.LineWithoutPrompt key={index.toString()} line={line} />
    );

  LineWithoutPrompt: React.FC<{ line: Line }> = ({ line }) => (
    <p>{line.toString()}</p>
  );

  LineWithPrompt: React.FC<{ line: Line }> = ({ line }) => (
    <div className={"prompt-container"}>
      <p>{window.location.toString() + ">" + line}</p>
      {line.acceptsInput ? (
        <PromptInput
          ref={(ref): void => {
            this.inputRef = ref;
          }}
        />
      ) : null}
    </div>
  );
}

export default App;
