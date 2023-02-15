import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import Task from "./modules/Task/components/Task";

const store = configureStore({});

const App = () => {
  return (
    <Provider store={store}>
      <Task />
    </Provider>
  );
};

export default App;
