import MyContextProvider from './context/sharedData';
import Consumer  from './Consumer';
import './App.css';

function App() {
  return (
    <MyContextProvider>  
      <div>
        <h1>App</h1>
        <Consumer />
      </div>
    </MyContextProvider>
  );
}

export default App;
