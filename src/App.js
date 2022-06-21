import logo from './logo.svg';
import Character from "./components/character/Character";
import './App.css';

function App() {
  return (
    <div>
        <Character name={'Bart'}
                   desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae consequuntur deleniti dolore\n'}
                   picture={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
        />

        <Character name='Homer'
                   desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae consequuntur deleniti dolore\n'
                   picture='https://upload.wikimedia.org/wikipedia/uk/thumb/0/02/Homer_Simpson_2006.png/300px-Homer_Simpson_2006.png'
        />

    </div>
  );
}

export default App;
