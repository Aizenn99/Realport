import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
      <Header />
      <Sidebar />
      </div>
    </>
  );
}

export default App;
