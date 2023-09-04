import './App.scss';
import AppRouter from './Components/App/AppRouter';
import Header from './Components/Partials/Header/Header';
import { ContainerStyle } from './Styled/Container.Style.js';

function App() {
  return (
    <ContainerStyle maxwidth="1024">
      <Header />
      <AppRouter />
    </ContainerStyle>
  );
}

export default App;
