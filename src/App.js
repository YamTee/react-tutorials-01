import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import GreetClass from "./components/GreetClass";

import MessageClass from "./components/MessageClass";

import CounterClass from "./components/CounterClass";

import ParentComponentClass from "./components/ParentComponentClass";

import NameList from "./components/NameList";

import FormClass from "./components/FormClass";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto px-4">
        <Greet name="Yamtee (Not)" heroName="Hero" />

        <h1 className="text-3xl font-bold underline text-sky-400">
          Hello world!
        </h1>

        {/* <Greet name="Yamtee (Not)" />
      <Greet>
        <h1>Hekkkkkkk </h1>
      </Greet>
      <Greet name="Yamtee" />

      <GreetClass name="Yamtee" /> */}

        {/* <MessageClass />
      <CounterClass></CounterClass>

      <ParentComponentClass greet="Hi" />
      <ParentComponentClass greet="Hello" /> */}

        {/* <NameList /> */}

        {/* <Hello /> */}

        <FormClass />
      </div>
    </div>
  );
}

export default App;
