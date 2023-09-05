import "./App.scss";
import AppRouter from "./Components/App/AppRouter";
import Footer from "./Components/Partials/Footer/Footer";
import Header from "./Components/Partials/Header/Header";
import { ContainerStyle } from "./Styled/Container.Style.js";

function App() {
  return (
    <ContainerStyle maxwidth="1100">
      <Header />
      <AppRouter />
      <Footer />
    </ContainerStyle>
  );
}

export default App;
