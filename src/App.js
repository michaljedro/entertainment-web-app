import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";

const theme = {
  colors: {
    backgroundColor: "#10141E",
    button: "#FC4747",
    btnHover: "#FFFFFF",
    grey: "#5A698f",
    sidebar: "#161D2F",
    font: "#ffffff",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
      </>
    </ThemeProvider>
  );
}

export default App;
