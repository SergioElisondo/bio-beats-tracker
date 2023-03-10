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
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // index of the currently open dropdown, null means no dropdown is open
  const dropdownContents = [
    'What is Bio Beat Tracker?',
    'Biorhythm Theory',
    'Physical Cycle',
    'Emotional Cycle',
    'Intellectual Cycle',
    'How To Read Results'
  ];

  function toggleDropdown(index) {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  }

  return (
    <IonApp className="background-image">
      <IonHeader>
        <IonToolbar className="toolbar-gradient">
          <IonTitle className='ion-title-shadow'>BIO BEATS TRACKER</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem className='ion-item-clear'>
            <IonLabel position='fixed'>
              <span className='birth-date'>Birth Date:</span>
            </IonLabel>
            <IonInput className='ion-input-shadow date-picker-icon' type="date" onIonChange={(event) => {setBirthDate(event.detail.value)}} />
          </IonItem>
          <IonItem className='ion-item-clear'>
            <IonLabel position='fixed'>
              <span className='target-date'>Target Date:</span>
            </IonLabel>
            <IonInput className='ion-input-shadow date-picker-icon' type="date" onIonChange={(event) => {setTargetDate(event.detail.value)}} />
          </IonItem>
        </IonList>
        <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
        {dropdownContents.map((content, index) => (
          <div key={index} className="dropdown-container">
            <IonButton className="info-button button-style" onClick={() => toggleDropdown(index)}>
              {content}
            </IonButton>
            <div className={`dropdown-menu ${ openDropdownIndex === index ? 'show' : '' }`}>
              <p className='bio-rhythm-content'>
                {content === 'What is Bio Beat Tracker?' && "Bio Beats Tracker is an app that uses the biorhythm theory to help users understand their physical, emotional, and intellectual cycles. The biorhythm theory suggests that these cycles have periods that can be calculated based on a person's birthdate. Overall, Bio Beats Tracker is a helpful tool for anyone interested in improving their overall well-being by understanding and working with their natural biorhythms."}
                {content === 'Biorhythm Theory' && "Biorhythms are rhythmic cycles that affect various aspects of our lives, such as our physical, emotional, and intellectual abilities."}
                {content === 'Physical Cycle' && 'The physical cycle is a 23-day cycle that affects physical energy, strength, and coordination.'}
                {content === 'Emotional Cycle' && 'The emotional cycle is a 28-day cycle that affects emotional stability, mood, and creativity.'}
                {content === 'Intellectual Cycle' && 'The intellectual cycle is a 33-day cycle that affects mental ability, memory, and communication skills.'}
                {content === 'How To Read Results' && 'When your biorhythms are in sync, you may feel more balanced and have increased energy and productivity.'}
              </p>
            </div>
          </div>
        ))}
        <div className='copyright-container'>
          <p className='copyright-content'>Design by Softinary © 2023</p>
        </div>
      </IonContent>
    </IonApp>
  );
}

export default App;
