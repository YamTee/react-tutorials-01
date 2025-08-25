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

import RefsDemo from "./components/RefsDemo";

import FocusInput from "./components/FocusInput";

import FRParentInput from "./components/FRParentInput";

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

      <ParentComponentClass />
      <ParentComponentClass greet="Hello" /> */}

        {/* <NameList /> */}

        {/* <Hello /> */}

        {/* <FormClass /> */}

        {/* <ParentComponentClass /> */}
        {/*
        <RefsDemo />

        <FocusInput />*/}

        <FRParentInput />
      </div>
    </div>
  );
}

export default App;
