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
  const [showInfo4, setShowInfo4] = useState(false); // controls whether the dropdown menu is visible or hidden
  const [showInfo5, setShowInfo5] = useState(false); // controls whether the dropdown menu is visible or hidden
  const [showInfo6, setShowInfo6] = useState(false); // controls whether the dropdown menu is visible or hidden

  function toggleInfo1() {
    setShowInfo1(!showInfo1);
  }

  function toggleInfo2() {
    setShowInfo2(!showInfo2);
  }

  function toggleInfo3() {
    setShowInfo3(!showInfo3);
  }

  function toggleInfo4() {
    setShowInfo4(!showInfo4);
  }

  function toggleInfo5() {
    setShowInfo5(!showInfo5);
  }

  function toggleInfo6() {
    setShowInfo6(!showInfo6);
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
        <div className="dropdown-container">
          <IonButton className="info-button button-style" onClick={toggleInfo1}>What is Bio Beat Tracker?</IonButton>
          <div className={`dropdown-menu ${ showInfo1 ? 'show' : '' }`}>
            <p className='bio-rhythm-content'>Bio Beats Tracker is an app that uses the biorhythm theory to help users understand their physical, emotional, and intellectual cycles. The biorhythm theory suggests that these cycles have periods that can be calculated based on a person's birthdate. Overall, Bio Beats Tracker is a helpful tool for anyone interested in improving their overall well-being by understanding and working with their natural biorhythms.</p>
          </div>
        </div>
        <div className="dropdown-container">
          <IonButton className="info-button button-style" onClick={toggleInfo2}>Biorhythm Theory</IonButton>
          <div className={`dropdown-menu ${ showInfo2 ? 'show' : '' }`}>
            <p className='bio-rhythm-content'>Biorhythms theory suggests that our physical, emotional, and intellectual states follow rhythmic patterns over time, with each cycle having its own duration and starting point.By plotting these cycles on a graph and comparing them to their respective zero points, it's believed that we can gain insight into our current state and potential future trends.
              <br /><br />
              The physical cycle is typically the shortest cycle and has a period of approximately 23 days. It is thought to influence a person's strength, coordination, and overall physical well-being. The emotional cycle is typically longer, with a period of around 28 days. This cycle is thought to influence a person's emotional state, including their moods and emotional stability. Finally, the intellectual cycle is the longest cycle, with a period of around 33 days. This cycle is thought to influence a person's cognitive abilities, including their memory, concentration, and problem-solving skills.</p>
          </div>
        </div>
        <div className="dropdown-container">
          <IonButton className="info-button button-style" onClick={toggleInfo3}>Physical Cycle</IonButton>
          <div className={`dropdown-menu ${ showInfo3 ? 'show' : '' }`}>
            <p className='bio-rhythm-content'>The physical cycle is a theoretical cycle that suggests that our physical abilities and energy levels follow a rhythmic pattern over time. According to biorhythms theory, this cycle lasts for 23 days and begins on the day of our birth.
              <br /><br />
              When the physical cycle is in a positive range, it is believed that our physical abilities and energy levels are high, and we are more likely to feel strong and healthy. Conversely, when the physical cycle is in a negative range, it is believed that our physical abilities and energy levels are low, and we may feel more tired or susceptible to illness.
              <br /><br />
              To interpret biorhythms readings for the physical cycle, you would typically plot the cycle on a graph with the y-axis representing the percentage of the cycle completed and the x-axis representing time. The midpoint of the cycle (day 12) is typically marked as the "zero" point, with positive values to the right of the midpoint and negative values to the left.
              <br /><br />
              To determine whether the physical cycle is in a positive or negative range, you would look at the current value on the graph and compare it to the zero point. If the value is to the right of the zero point, the physical cycle is in a positive range, and if it is to the left, the physical cycle is in a negative range.
              <br /><br />
              It's important to note that biorhythms theory is considered by many to be pseudoscientific, and there is no scientific evidence to support the idea that our physical abilities and energy levels follow a predictable pattern over time. Therefore, it's generally not recommended to base important decisions or actions on biorhythms readings.</p>
          </div>
        </div>
        <div className="dropdown-container">
          <IonButton className="info-button button-style" onClick={toggleInfo4}>Emotional Cycle</IonButton>
          <div className={`dropdown-menu ${ showInfo4 ? 'show' : '' }`}>
            <p className='bio-rhythm-content'>The emotional cycle is another theoretical cycle in biorhythms that suggests that our emotions follow a rhythmic pattern over time. According to biorhythms theory, the emotional cycle lasts for 28 days and begins on the day of our birth.
              <br /><br />
              When the emotional cycle is in a positive range, it is believed that we are more likely to experience positive emotions such as happiness, love, and contentment. Conversely, when the emotional cycle is in a negative range, we may be more prone to negative emotions such as sadness, anxiety, and irritability.
              <br /><br />
              To interpret biorhythms readings for the emotional cycle, you would typically plot the cycle on a graph with the y-axis representing the percentage of the cycle completed and the x-axis representing time. As with the physical cycle, the midpoint of the cycle (day 14) is marked as the "zero" point, with positive values to the right and negative values to the left.
              <br /><br />
              To determine whether the emotional cycle is in a positive or negative range, you would look at the current value on the graph and compare it to the zero point. If the value is to the right of the zero point, the emotional cycle is in a positive range, and if it is to the left, the emotional cycle is in a negative range.
              <br /><br />
              It's important to note that there is no scientific evidence to support the idea that our emotions follow a predictable pattern over time, and biorhythms theory is considered by many to be pseudoscientific. Therefore, it's generally not recommended to rely on biorhythms readings for making important decisions or taking action.</p>
          </div>
        </div>
        <div className="dropdown-container">
          <IonButton className="info-button button-style" onClick={toggleInfo5}>Intellectual Cycle</IonButton>
          <div className={`dropdown-menu ${ showInfo5 ? 'show' : '' }`}>
            <p className='bio-rhythm-content'>The intellectual cycle is a theoretical cycle in biorhythms that suggests that our mental abilities and cognitive functioning follow a rhythmic pattern over time. According to biorhythms theory, this cycle lasts for 33 days and begins on the day of our birth.
              <br /><br />
              When the intellectual cycle is in a positive range, it is believed that our mental abilities are at their peak, and we may be more alert, focused, and creative. Conversely, when the intellectual cycle is in a negative range, we may experience more difficulty with cognitive tasks and may be more prone to errors or mental fatigue.
              <br /><br />
              To interpret biorhythms readings for the intellectual cycle, you would typically plot the cycle on a graph with the y-axis representing the percentage of the cycle completed and the x-axis representing time. As with the physical and emotional cycles, the midpoint of the cycle (day 16.5) is marked as the "zero" point, with positive values to the right and negative values to the left.
              <br /><br />
              To determine whether the intellectual cycle is in a positive or negative range, you would look at the current value on the graph and compare it to the zero point. If the value is to the right of the zero point, the intellectual cycle is in a positive range, and if it is to the left, the intellectual cycle is in a negative range.
              <br /><br />
              As with the physical and emotional cycles, it's important to note that biorhythms theory is considered by many to be pseudoscientific, and there is no scientific evidence to support the idea that our mental abilities follow a predictable pattern over time. Therefore, it's generally not recommended to base important decisions or actions on biorhythms readings.</p>
          </div>
        </div>
        <div className="dropdown-container last-container">
          <IonButton className="info-button button-style" onClick={toggleInfo6}>How To Read Results</IonButton>
          <div className={`dropdown-menu ${ showInfo6 ? 'show' : '' }`}>
            <p className='bio-rhythm-content'>When all three cycles are in a positive range, it is believed that we are at our peak in terms of physical, emotional, and intellectual functioning. This is seen as a time of high energy, positivity, and mental clarity, and we may be more likely to achieve our goals and succeed in our endeavors.
              <br /><br />
              Conversely, when all three cycles are in a negative range, it is believed that we may be more pronse to physical fatigue, negative emotions, and mental fatigue. This is seen as a time of decreased energy, motivation, and productivity, and we may be more likely to make mistakes or experience setbacks.
              <br /><br />
              When the cycles are in mixed ranges, the interpretation can be more nuanced. For example, if the physical cycle is in a negative range but the emotional and intellectual cycles are in a positive range, it may be a time when we are feeling emotionally and mentally sharp but physically tired. Alternatively, if the emotional cycle is in a negative range but the physical and intellectual cycles are in a positive range, we may be physically and mentally capable but struggling with negative emotions.
              <br /><br />
              It's important to note that biorhythms theory is considered by many to be pseudoscientific, and there is no scientific evidence to support the idea that our states follow predictable patterns over time. Therefore, it's generally not recommended to rely on biorhythms readings for making important decisions or taking action. However, some people find tracking their biorhythms to be a fun and interesting way to gain insight into their overall well-being.</p>
          </div>
        </div>
        <div className='copyright-container'>
          <p className='copyright-content'>Design by Softinary © 2023</p>
        </div>
      </IonContent>
    </IonApp>
  );
}

export default App;
