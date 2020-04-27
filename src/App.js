import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Messages from './components/Messages';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import LifeCycleOne from './components/LifeCycleOne';
import StyleSheet from './components/StyleSheet';
import Inlines from './components/Inlines';
import Form from './components/Form';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
// import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';


function App() {
  return (
    <div className="App">
      <Greet name ="Cristiano" heroname ="batman"><p>This is children</p></Greet>
      <Greet name ="Messi" heroname ="superman"><button>Submit</button></Greet>
      <Greet name = "Neymar" heroname ="Wonderman"></Greet>
      <Welcome name ="dx" heroname ="batman"></Welcome>
      <Welcome name = "dgen" heroname ="Wonderman"></Welcome>
      <Hello></Hello>
      <Messages></Messages>
      <Counter></Counter>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <EventBind></EventBind>
      <ParentComponent></ParentComponent>
      <UserGreeting></UserGreeting>
      <NameList></NameList>
      <LifeCycleOne></LifeCycleOne>
      <StyleSheet primary = {true}></StyleSheet>
      <Inlines></Inlines>
      <Form></Form>
      <FragmentDemo></FragmentDemo>
      <Table></Table>
      {/* <PureComp></PureComp> */}
      <ParentComp></ParentComp>
      <RefsDemo />
      <FocusInput />
      <FRParentInput />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
