import './App.css';
import EightBall from './EightBall';
import Answers from './Answers';

function App() {
  return (
    <>
      <h1>Magic Eight Ball!</h1>
      <EightBall answers={Answers} />
    </>
  );
}

export default App;
