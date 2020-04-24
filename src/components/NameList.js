import React from 'react'

function NameList() {
//    const names = ['Michel','Jordon','Bruce']
   const person = [
       {
           id: 1,
           name : 'Rahul',
           age : '22'
       },
       {
        id: 2,
        name : 'Raj',
        age : '24'

    },
    {
        id: 3,
        name : 'Ritam', 
        age : '26'

    },

   ]
//    const nameList = names.map(name=> <h2>{name}</h2>)
   const personList = person.map(person=> (<h2>I am {person.name}.My age is  {person.age}</h2>))
//    return <div>{nameList}</div>
   return <div>{personList}</div>

}

export default NameList
