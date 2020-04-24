import React  from 'react';
//Jsx
//without jsx

const Hello = () => {

  // return (
  //   <div className="react"><h1>Hi! React</h1></div>  //jsx
  // )
  
   //without jsx
  // return  React.createElement('div',null,React.createElement('h1',null,'Hi! React')
  
  // null->Additional Property

  return  React.createElement('div',
  {id: 'react',className:'react'},      //Additional Property               
  React.createElement('h1',null,'Hi! React')
  )

}


export default Hello;
