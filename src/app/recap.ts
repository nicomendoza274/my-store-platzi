const username: string = 'nico274';

const sum = (a:number, b:number) =>{
  return a + b;
}

sum(1,3);

class Person {

  constructor( public age: number, public name: string, public lastname: string){}

}


const nico = new Person(21, 'Nicolás', 'Mendoza');
