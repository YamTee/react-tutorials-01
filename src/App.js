import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import GreetClass from "./components/GreetClass";

import MessageClass from "./components/MessageClass";

import CounterClass from "./components/CounterClass";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Yamtee (Not)" />
      <Greet>
        <h1>Hekkkkkkk </h1>
      </Greet>
      <Greet name="Yamtee" />

      <GreetClass name="Yamtee" /> */}

      <MessageClass />
      <CounterClass></CounterClass>

      {/* <Hello /> */}
    </div>
  );
}

export default App;
