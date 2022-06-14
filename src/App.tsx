import React from "react";
import HeaderBar from "./components/Header";
import Home from "./components/Home";
import { AppContextProvider } from "./components/utils/context";

import "./App.css";

function App() {
  return (
    <AppContextProvider>
      <HeaderBar />
      <Home />
    </AppContextProvider>
  );
}

export default App;
