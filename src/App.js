import React, { useState } from "react";
import { configureStore } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Login from './components/Login'
function App() {
  const [store, ] = useState(configureStore().store);

  return (
    <>
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={configureStore().persistor}
        >
          <Login/>

        </PersistGate>
      </Provider>
    </>
  );
} 

export default App;
 