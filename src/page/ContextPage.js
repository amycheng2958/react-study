import React, { Component } from "react";
import ContextTypePage from "./ContextTypePage";
import ConsumerPage from "./ConsumerPage";
import MultipleContextPage from "./MultipleContextPage";
import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";
export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: "red"
      },
      user: {
        username: "cyy"
      }
    };
  }
  changeColor = () => {
    const { themeColor } = this.state.theme;
    this.setState({
      theme: {
        themeColor: themeColor === "red" ? "green" : "red"
      }
    });
  };
  render() {
    const { theme, user } = this.state;
    return (
      <div>
        <button onClick={this.changeColor}>changeColor</button>
        <ThemeProvider value={theme}>
          <ContextTypePage />
          <ConsumerPage />
          <UserProvider value={user}>
            <MultipleContextPage />
          </UserProvider>
        </ThemeProvider>
      </div>
    );
  }
}
