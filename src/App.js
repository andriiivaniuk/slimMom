import Router from './Router';
import Header from './components/Header/Header';

import GlobalStylesReset from "./assets/resets";

function App() {
  return (
    <div>
      <GlobalStylesReset />
      <Header/>
      <Router />
    </div>
  );
}

export default App;
