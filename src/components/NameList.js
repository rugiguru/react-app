import React, { Component } from "react";
import Person from "./Person";
 
function NameList() {

    const names = ['Bruce', 'clark', 'Diana', 'Bruce']
    const persons = [
    {
        id : 1,
        name : 'bruce',
        age : 30,
        skill: 'React'
    },
    {
        id : 2,
        name : 'John',
        age : 32,
        skill: 'Node'
    },
    {
        id : 3,
        name : 'Dianan',
        age : 26,
        skill: 'Java'
    }

]
    const nameList = names.map((name, index) => <h2 key={index}> {index} {name}</h2>);
    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    return (
      <div>
        {
            nameList
        }
      </div>
    ); 
}
 
export default NameList;