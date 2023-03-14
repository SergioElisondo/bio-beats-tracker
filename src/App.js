import {IonApp} from '@ionic/react';
import React from 'react';

import {IonReactRouter} from '@ionic/react-router';
import {Route} from 'react-router-dom'; // removed BrowserRouter

import Home from './Pages/Home'
import LoadingScreen from './Pages/LoadingScreen'
import './App.css';


function App() {

  return (
    <IonApp>
      <IonReactRouter>
        {/* <IonRouterOutlet> this is for smooth transitions is not fading to white on mobile */}
        <Route exact path="/">
          <LoadingScreen />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        {/* <Redirect exact path="/" to="/LoadingScreen" /> */}
        {/* </IonRouterOutlet> */}
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
