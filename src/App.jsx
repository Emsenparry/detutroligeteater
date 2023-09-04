import './App.scss';
import AppRouter from './Components/App/AppRouter';
import Header from './Components/Partials/Header/Header';
import { ContainerStyle } from './Styled/Container.style.js';

function App() {
  return (
    <ContainerStyle maxwidth="1024">
      <Header />
      <AppRouter />
    </ContainerStyle>
  );
}

export default App;
