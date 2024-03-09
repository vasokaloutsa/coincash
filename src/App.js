import "./App.css";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Body from "./components/Body";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;
