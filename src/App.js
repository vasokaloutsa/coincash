import "./App.css";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";

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
    </div>
  );
}

export default App;