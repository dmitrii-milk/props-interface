import React from 'react';
import TestForProps from './TestForProps';


const App: React.FC = () => {

  const text = 'someTextInside';
  const number = 25;
  const someArray = ['string1','string2','string3','string4'];
  const someArrayNumber = [1,2,3,4];
  const someArrayObject = [{name: 'Dima', age: 25},
                           {name: 'Julia', age: 25},
                           {name: 'Tina', age: 25},
                           {name: 'Yauhen', age: 25},
                           {name: 'Oleg', age: 25}
                          ];
  const someArrayObjectWithArray = [
                           {name: 'Dima', age: 25, friends:['Vasya', 'Petya']},
                           {name: 'Julia', age: 25, friends:['Olga', 'Sveta']},
                           {name: 'Tina', age: 25, friends:['Ira', 'Vika', 'Oleg']},
                           {name: 'Yauhen', age: 25, friends:['Ura', 'Tolya']},
                           {name: 'Oleg', age: 25, friends:['Artem', 'Jora', 'Igor']}
                          ];
  const someArrayObjectWithObject = [
                           {name: 'Dima', age: 25, favoritePets:{name:'Barsik'}},
                           {name: 'Julia', age: 25, favoritePets:{name: 'Mops'}},
                           {name: 'Tina', age: 25, favoritePets:{name: 'Barsa'}},
                           {name: 'Yauhen', age: 25, favoritePets:{name: 'Ejik'}},
                           {name: 'Oleg', age: 25, favoritePets:{name: 'Svastica'}}
                          ];




  return (
    <TestForProps 
      text={text} 
      number={number} 
      someArray={someArray} 
      someArrayNumber={someArrayNumber}
      someArrayObject={someArrayObject}
      someArrayObjectWithArray={someArrayObjectWithArray}
      someArrayObjectWithObject={someArrayObjectWithObject}
      
    />
  )
}

export default App;
