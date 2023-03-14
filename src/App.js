import {IonApp} from '@ionic/react';
import React from 'react';

import {BrowserRouter, Redirect, Route} from 'react-router-dom';

import Home from './Pages/Home'
import LoadingScreen from './Pages/LoadingScreen'
import './App.css';


function App() {

  return (
    <IonApp>
      <BrowserRouter>
        <Route exact path="/">
          <LoadingScreen />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
      </BrowserRouter>
    </IonApp>
  );
}

export default App;
