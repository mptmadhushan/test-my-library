// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Import the store
import { MyDataList } from 'gc-test-npm'; // Import your component

const App = () => (
  <Provider store={store}>
    <MyDataList />
  </Provider>
);

export default App;
