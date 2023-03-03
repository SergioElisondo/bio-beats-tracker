import {IonApp, IonContent, IonHeader, IonInput, IonLabel, IonTitle, IonToolbar, IonItem, IonList} from '@ionic/react';
import {useState} from 'react';

import BiorhythmCard from './components/BiorhythmCard';
import {useStoredState} from './lib/hooks';

function getToday() {
  return new Date().toISOString().slice(0, 'yyyy-mm-dd'.length)
}

function App() {
  const [birthDate, setBirthDate] = useStoredState('birthDate') // empty string means no date was selected yet
  const [targetDate, setTargetDate] = useState(getToday) // empty string means no value was passed in yet

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* can move results here as well */}
        <IonList>
          <IonItem>
            <IonLabel position='fixed'>
              Birth Date:</IonLabel>
            <IonInput type="date" onIonChange={(event) => {setBirthDate(event.detail.value)}} />
          </IonItem>
          <IonItem>
            <IonLabel position='fixed'>
              Target Date:</IonLabel>
            <IonInput type="date" onIonChange={(event) => {setTargetDate(event.detail.value)}} />
          </IonItem>
        </IonList>
        {/* {Boolean(birthDate) && (
          <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
        )} */}
        <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
      </IonContent>
    </IonApp>
  );
}

export default App;
