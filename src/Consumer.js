import { useContext } from 'react';
import { MyContext } from './context/sharedData';

function Consumer() {
  const sharedData = useContext(MyContext)
  return (
    <div>
      <h1>componente consumidor</h1>
      <p>{sharedData}</p>
    </div>
  );
}

export default Consumer;
