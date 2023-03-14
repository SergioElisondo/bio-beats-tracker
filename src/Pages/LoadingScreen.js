import {IonPage, IonContent, IonTitle, IonImg} from '@ionic/react';
import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'; // import useHistory

import './LoadingScreen.css';

import anime_girl from './anime_softinary_full.png'

function LoadingScreen() {
  const [fade, setFade] = useState(false);

  const history = useHistory(); // initialize history

  // useEffect(() => {
  //   setTimeout(() => {
  //     window.location.href = './Home'
  //   }, 4000)
  // }, [])

  useEffect(() => {
    setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        history.push('/Home'); // use history.push instead of window.location.href
      }, 1000); // wait for the fade-out to complete before redirecting
    }, 2700);
  }, [history]);

  return (
    <div className={`fade-container${ fade ? ' fade-out' : '' }`}>
      <IonPage className="background-image fade-in">
        <IonContent className="ion-padding">
          <div className='main-copyright-container-media'>
            <div className='copyright-container'>
              <IonImg
                className='anime-girl-headphones-image'
                src={anime_girl}
                alt="Anime Girl Head with Softinary Logo"
                onError={(e) => {console.error("Error loading image", e);}}
              />
            </div>
          </div>
          <IonTitle className='ion-title-shadow-loading'>SOFTINARY © 2023</IonTitle>
        </IonContent>
      </IonPage>
    </div>
  );
}

export default LoadingScreen;
