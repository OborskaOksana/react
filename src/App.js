
// 1. Описати всю сім'ю сімпсонів (5 персонажів)

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

        <Character name={'Homer'}
                   desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae consequuntur deleniti dolore\n'}
                   picture={'https://upload.wikimedia.org/wikipedia/uk/thumb/0/02/Homer_Simpson_2006.png/300px-Homer_Simpson_2006.png'}
        />

        <Character name={'Liza'}
                   desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae consequuntur deleniti dolore\n'}
                   picture={'https://static.wikia.nocookie.net/simpsons/images/5/57/Lisa_Simpson2.png'}
        />

        <Character name={'Abraham'}
                   desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae consequuntur deleniti dolore\n'}
                   picture={'https://static.wikia.nocookie.net/simpsons/images/c/c5/Abraham_Simpson_-_shading.png'}
        />

        <Character name={'Herb'}
                   desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae consequuntur deleniti dolore\n'}
                   picture={'https://static.wikia.nocookie.net/simpsons/images/c/c2/HerbPowell.png'}
        />

    </div>
  );
}
export default App;

//
// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
// https://rickandmortyapi.com/api/character
//       Створити 6 персонажів