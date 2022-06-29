
// 1. Описати всю сім'ю сімпсонів (5 персонажів)

import logo from './logo.svg';
import Character from "./components/character/Character";
import './App.css';

function App() {

  return (
    <div>
      <Character
      id={1}
      name={"Rick Sanchez"}
      status={"Alive"}
      species={"Human"}
      gender={"Male"}
      image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}
      alt={"Rick"}
          />

</div>
  )
}
export default App;

//
// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
// https://rickandmortyapi.com/api/character
//       Створити 6 персонажів