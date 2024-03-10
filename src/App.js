import "./App.css";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }`;

function App() {
  const style = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "100vh",
  };
  return (
    <div>
      {/* <GlobalStyle /> */}
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
