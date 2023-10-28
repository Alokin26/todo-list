import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./components/Todo/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>To do list</h1>
        <p>This is my first to do list</p>
      </div>
      <Todo>
        <h2>das</h2>
        <textarea name="" id="" cols="30" rows="10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          debitis suscipit molestiae cumque beatae, illo voluptate nesciunt id
          eligendi enim exercitationem esse, laboriosam itaque voluptates rem in
          nisi quas quos, dolore sint. Quam, sunt id expedita natus odit,
          aliquid eligendi quasi tempore quae molestiae quisquam ipsam minima
          optio nemo mollitia!
        </textarea>
      </Todo>
    </>
  );
}

export default App;
