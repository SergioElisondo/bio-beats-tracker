import {IonApp, IonContent, IonHeader, IonInput, IonLabel, IonTitle, IonToolbar, IonItem, IonList, IonButton} from '@ionic/react';
import {useState} from 'react';

import BiorhythmCard from './components/BiorhythmCard';
import {useStoredState} from './lib/hooks';

import './App.css';

function getToday() {
  return new Date().toISOString().slice(0, 'yyyy-mm-dd'.length)
}

function App() {
  const [birthDate, setBirthDate] = useStoredState('birthDate'); // empty string means no date was selected yet
  const [targetDate, setTargetDate] = useState(getToday); // empty string means no value was passed in yet
  const [showInfo1, setShowInfo1] = useState(false); // controls whether the dropdown menu is visible or hidden
  const [showInfo2, setShowInfo2] = useState(false); // controls whether the dropdown menu is visible or hidden
  const [showInfo3, setShowInfo3] = useState(false); // controls whether the dropdown menu is visible or hidden

  function toggleInfo1() {
    setShowInfo1(!showInfo1);
  }

  function toggleInfo2() {
    setShowInfo2(!showInfo2);
  }

  function toggleInfo3() {
    setShowInfo3(!showInfo3);
  }

  return (
    <IonApp className="background-image">
      <IonHeader>
        <IonToolbar className="toolbar-gradient">
          <IonTitle className='ion-title-shadow'>Bio Beats Tracker</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem className='ion-item-clear'>
            <IonLabel position='fixed'>
              Birth Date:
            </IonLabel>
            <IonInput className='ion-input-shadow date-picker-icon' type="date" onIonChange={(event) => {setBirthDate(event.detail.value)}} />
          </IonItem>
          <IonItem className='ion-item-clear'>
            <IonLabel position='fixed'>
              Target Date:
            </IonLabel>
            <IonInput className='ion-input-shadow date-picker-icon' type="date" onIonChange={(event) => {setTargetDate(event.detail.value)}} />
          </IonItem>
        </IonList>
        <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
        <div className="dropdown-container">
          <IonButton className="info-button button-style" onClick={toggleInfo1}>What is Bio Beat Tracker?</IonButton>
          <div className={`dropdown-menu ${ showInfo1 ? 'show' : 'hide' }`}>
            <p>Bio Beats Tracker is an app that uses the biorhythm theory to help users understand their physical, emotional, and intellectual cycles. The biorhythm theory suggests that these cycles have periods that can be calculated based on a person's birthdate. Overall, Bio Beats Tracker is a helpful tool for anyone interested in improving their overall well-being by understanding and working with their natural biorhythms.</p>
          </div>
        </div>
        <div className="dropdown-container">
          <IonButton className="info-button button-style" onClick={toggleInfo2}>Biorhythm Theory + Rhythmic Cycles</IonButton>
          {showInfo2 && (
            <div className={`dropdown-menu ${ showInfo2 ? 'show' : 'hide' }`}>
              <p>The physical cycle is typically the shortest cycle and has a period of approximately 23 days. It is thought to influence a person's strength, coordination, and overall physical well-being. The emotional cycle is typically longer, with a period of around 28 days. This cycle is thought to influence a person's emotional state, including their moods and emotional stability. Finally, the intellectual cycle is the longest cycle, with a period of around 33 days. This cycle is thought to influence a person's cognitive abilities, including their memory, concentration, and problem-solving skills.</p>
            </div>
          )}
        </div>
        <div className="dropdown-container">
          <IonButton className="info-button button-style" onClick={toggleInfo3}>Physical Cycle</IonButton>
          {showInfo3 && (
            <div className={`dropdown-menu ${ showInfo3 ? 'show' : 'hide' }`}>
              <p>The physical cycle in biorhythms is a theoretical cycle that suggests that our physical abilities and energy levels fluctuate in a rhythmic pattern over time. According to this theory, the physical cycle lasts for 23 days and begins on the day of our birth.<br /><br />
                During the first few days of the physical cycle, our physical abilities and energy levels are believed to be at their peak. As the cycle progresses, our physical abilities and energy levels are thought to gradually decline, reaching a low point around day 11 or 12.<br /><br />
                After this low point, our physical abilities and energy levels are believed to slowly increase again, reaching another peak around day 23 before the cycle starts all over again.<br /><br />
                It's important to note that there is no scientific evidence to support the theory of biorhythms, including the physical cycle. While some people may feel like their physical abilities and energy levels follow a predictable pattern over time, this could be due to a number of other factors, such as sleep, exercise, diet, and overall health.</p>
            </div>
          )}
        </div>
      </IonContent>
    </IonApp>
  );
}

export default App;
