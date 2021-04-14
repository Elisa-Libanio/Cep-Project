import { Provider } from './context/CepContext';
import MainPage from '../src/mainPage'

function App() {
  return (
    <Provider>
      <MainPage />
    </Provider>
  );
}

export default App;
