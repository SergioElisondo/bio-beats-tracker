import {IonPage, IonContent, IonHeader, IonInput, IonLabel, IonTitle, IonToolbar, IonItem, IonList, IonButton, IonImg, IonRouterLink} from '@ionic/react';
import {useState} from 'react'; // removed useEffect

import BiorhythmCard from '../components/BiorhythmCard';
import {useStoredState} from '../lib/hooks';

// import {useLocation, useHistory} from 'react-router-dom';

import anime_girl from './anime_softinary_full.png'

import './Home.css';

function getToday() {
  return new Date().toISOString().slice(0, 'yyyy-mm-dd'.length)
}

function Home() {
  // const location = useLocation();
  // const history = useHistory();

  // useEffect(() => {
  //   if (location.pathname === '/Home') {
  //     history.push('/Home');
  //   }
  // }, [location, history]);

  // useEffect(() => {
  //   if (performance.navigation.type === 1) {
  //     // this is a page refresh, redirect to /Home
  //     history.push('/Home');
  //   }
  // }, [history]);


  const [birthDate, setBirthDate] = useStoredState('birthDate'); // empty string means no date was selected yet
  const [targetDate, setTargetDate] = useState(getToday); // empty string means no value was passed in yet
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // index of the currently open dropdown, null means no dropdown is open
  const dropdownContents = [
    'How to Use',
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
    <IonPage className="background-image fade-in-main">
      <IonHeader>
        <IonToolbar className="toolbar-gradient">
          <IonTitle className='ion-title-shadow'>BIO BEATS TRACKER</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding main-app-size">
        <IonList>
          <IonItem className='ion-item-clear'>
            <IonLabel position='fixed'>
              <span className='birth-date'>BIRTH DATE:</span>
            </IonLabel>
            <IonInput className='ion-input-shadow date-picker-icon' type="date" onIonChange={(event) => {setBirthDate(event.detail.value)}} />
          </IonItem>
          <IonItem className='ion-item-clear'>
            <IonLabel position='fixed'>
              <span className='target-date'>TARGET DATE:</span>
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
                {content === 'How to Use' && (<>The Bio Beats Tracker app is designed to help you understand your physical, emotional, and intellectual cycles utilizing the biorhythms theory. Here's a short guide on how to use the app and where to find your results:<br /><br />
                  1. Click on the "BIRTH DATE" field and enter your birth date by using the date picker tool<br /><br />
                  2. Click on the "TARGET DATE" field and enter the date for which you want to calculate your biorhythms<br /><br />
                  3. Your physical, emotional, and intellectual biorhythm cycles will be represented in the graph<br /><br />
                  4. Look at the horizontal axis of the chart to find the date range displayed<br /><br />
                  5. Identify the physical, emotional, and intellectual cycles by looking at the color-coded lines on the chart<br /><br />
                  6. Note the highs and lows of each cycle by finding the peaks and valleys of each line on the chart - each cycle will show your current state, whether you are in a positive or negative range<br /><br />
                  7. Use this information to plan activities or make decisions based on which cycles are in their high or low phases<br /><br />
                  To read more about biorhythm theory, tap on the "What is Bio Beat Tracker?" or "Biorhythm Theory" buttons. Here you can find detailed information on each cycle and how they relate to your overall well-being.
                </>)}
                {content === 'What is Bio Beat Tracker?' && (<>Bio Beats Tracker is an app that uses the biorhythm theory to help users understand their physical, emotional, and intellectual cycles. The biorhythm theory suggests that these cycles have periods that can be calculated based on a person's birthdate. Overall, Bio Beats Tracker is a helpful tool for anyone interested in improving their overall well-being by understanding and working with their natural biorhythms.</>)}
                {content === 'Biorhythm Theory' && (<>Biorhythms theory suggests that our physical, emotional, and intellectual states follow rhythmic patterns over time, with each cycle having its own duration and starting point.By plotting these cycles on a graph and comparing them to their respective zero points, it's believed that we can gain insight into our current state and potential future trends.
                  <br /><br />
                  The physical cycle is typically the shortest cycle and has a period of approximately 23 days. It is thought to influence a person's strength, coordination, and overall physical well-being. The emotional cycle is typically longer, with a period of around 28 days. This cycle is thought to influence a person's emotional state, including their moods and emotional stability. Finally, the intellectual cycle is the longest cycle, with a period of around 33 days. This cycle is thought to influence a person's cognitive abilities, including their memory, concentration, and problem-solving skills.
                  <br /><br />
                  It's important to note that biorhythms theory is considered by many to be pseudoscientific, and there is no scientific evidence to support the idea that our physical abilities and energy levels follow a predictable pattern over time. Therefore, it's generally not recommended to base important decisions or actions on biorhythms readings.</>)}

                {content === 'Physical Cycle' && (<>The physical cycle is a theoretical cycle that suggests that our physical abilities and energy levels follow a rhythmic pattern over time. According to biorhythms theory, this cycle lasts for 23 days and begins on the day of our birth.
                  <br /><br />
                  When the physical cycle is in a positive range, it is believed that our physical abilities and energy levels are high, and we are more likely to feel strong and healthy. Conversely, when the physical cycle is in a negative range, it is believed that our physical abilities and energy levels are low, and we may feel more tired or susceptible to illness.
                  <br /><br />
                  To interpret biorhythms readings for the physical cycle, you would typically plot the cycle on a graph with the y-axis representing the percentage of the cycle completed and the x-axis representing time. The midpoint of the cycle (day 12) is typically marked as the "zero" point, with positive values to the right of the midpoint and negative values to the left.
                  <br /><br />
                  To determine whether the physical cycle is in a positive or negative range, you would look at the current value on the graph and compare it to the zero point. If the value is to the right of the zero point, the physical cycle is in a positive range, and if it is to the left, the physical cycle is in a negative range.</>)}

                {content === 'Emotional Cycle' && (<>The emotional cycle is another theoretical cycle in biorhythms that suggests that our emotions follow a rhythmic pattern over time. According to biorhythms theory, the emotional cycle lasts for 28 days and begins on the day of our birth.
                  <br /><br />
                  When the emotional cycle is in a positive range, it is believed that we are more likely to experience positive emotions such as happiness, love, and contentment. Conversely, when the emotional cycle is in a negative range, we may be more prone to negative emotions such as sadness, anxiety, and irritability.
                  <br /><br />
                  To interpret biorhythms readings for the emotional cycle, you would typically plot the cycle on a graph with the y-axis representing the percentage of the cycle completed and the x-axis representing time. As with the physical cycle, the midpoint of the cycle (day 14) is marked as the "zero" point, with positive values to the right and negative values to the left.
                  <br /><br />
                  To determine whether the emotional cycle is in a positive or negative range, you would look at the current value on the graph and compare it to the zero point. If the value is to the right of the zero point, the emotional cycle is in a positive range, and if it is to the left, the emotional cycle is in a negative range.</>)}

                {content === 'Intellectual Cycle' && (<>The intellectual cycle is a theoretical cycle in biorhythms that suggests that our mental abilities and cognitive functioning follow a rhythmic pattern over time. According to biorhythms theory, this cycle lasts for 33 days and begins on the day of our birth.
                  <br /><br />
                  When the intellectual cycle is in a positive range, it is believed that our mental abilities are at their peak, and we may be more alert, focused, and creative. Conversely, when the intellectual cycle is in a negative range, we may experience more difficulty with cognitive tasks and may be more prone to errors or mental fatigue.
                  <br /><br />
                  To interpret biorhythms readings for the intellectual cycle, you would typically plot the cycle on a graph with the y-axis representing the percentage of the cycle completed and the x-axis representing time. As with the physical and emotional cycles, the midpoint of the cycle (day 16.5) is marked as the "zero" point, with positive values to the right and negative values to the left.
                  <br /><br />
                  To determine whether the intellectual cycle is in a positive or negative range, you would look at the current value on the graph and compare it to the zero point. If the value is to the right of the zero point, the intellectual cycle is in a positive range, and if it is to the left, the intellectual cycle is in a negative range.</>)}

                {content === 'How To Read Results' && (<>When all three cycles are in a positive range, it is believed that we are at our peak in terms of physical, emotional, and intellectual functioning. This is seen as a time of high energy, positivity, and mental clarity, and we may be more likely to achieve our goals and succeed in our endeavors.
                  <br /><br />
                  Conversely, when all three cycles are in a negative range, it is believed that we may be more pronse to physical fatigue, negative emotions, and mental fatigue. This is seen as a time of decreased energy, motivation, and productivity, and we may be more likely to make mistakes or experience setbacks.
                  <br /><br />
                  When the cycles are in mixed ranges, the interpretation can be more nuanced. For example, if the physical cycle is in a negative range but the emotional and intellectual cycles are in a positive range, it may be a time when we are feeling emotionally and mentally sharp but physically tired. Alternatively, if the emotional cycle is in a negative range but the physical and intellectual cycles are in a positive range, we may be physically and mentally capable but struggling with negative emotions.
                  <br /><br />
                  It's important to note that biorhythms theory is considered by many to be pseudoscientific, and there is no scientific evidence to support the idea that our states follow predictable patterns over time. Therefore, it's generally not recommended to rely on biorhythms readings for making important decisions or taking action. However, some people find tracking their biorhythms to be a fun and interesting way to gain insight into their overall well-being.</>)}
              </p>
            </div>
          </div>
        ))}
        <div className='copyright-container'>
          <IonRouterLink href="https://softinary.com/"><IonImg
            className='anime-girl-headphones-home'
            src={anime_girl}
            alt="Anime Girl Head with Softinary Logo"
            onError={(e) => {console.error("Error loading image", e);}}
          /></IonRouterLink>
        </div>
        <div className='copyright-container-home'>
          <p className='copyright-content'>DESIGN BY <IonRouterLink href="https://softinary.com/">SOFTINARY</IonRouterLink> © 2023</p>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Home;
