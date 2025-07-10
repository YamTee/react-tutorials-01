import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import GreetClass from "./components/GreetClass";

import MessageClass from "./components/MessageClass";

import CounterClass from "./components/CounterClass";

import ParentComponentClass from "./components/ParentComponentClass";

import NameList from "./components/NameList";

function App() {
  return (
    <div className="App">
      <Greet name="Yamtee (Not)" heroName="Hero" />

      {/* <Greet name="Yamtee (Not)" />
      <Greet>
        <h1>Hekkkkkkk </h1>
      </Greet>
      <Greet name="Yamtee" />

      <GreetClass name="Yamtee" /> */}

      <MessageClass />
      <CounterClass></CounterClass>

      <ParentComponentClass greet="Hi" />
      <ParentComponentClass greet="Hello" />

      <NameList />

      {/* <Hello /> */}
    </div>
  );
}

export default App;
