import {IonCard, IonCardContent, IonCardHeader, IonCardTitle} from "@ionic/react";
import dayjs from "dayjs";

import {calculateBiorhythms} from '../lib/biorhythms'
import BiorhythmChart from "./BiorhythmChart";

import './BiorhythmCard.css'

function formatDate(isoString) {
  const day = dayjs(isoString)
  return day.format('D MMMM YYYY').toLocaleUpperCase()
}

function BiorhythmCard({birthDate, targetDate}) {
  const bioRhythms = calculateBiorhythms(birthDate, targetDate)
  return (
    <IonCard className="ion-text-center">
      <IonCardHeader>
        <IonCardTitle>
          {formatDate(targetDate)}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <BiorhythmChart birthDate={birthDate} targetDate={targetDate} />
        <p className="biorhythm-physical">PHYSICAL: {bioRhythms.physical.toFixed(4)}</p>
        <p className="biorhythm-emotional">EMOTIONAL: {bioRhythms.emotional.toFixed(4)}</p>
        <p className="biorhythm-intellectual">INTELLECTUAL: {bioRhythms.intellectual.toFixed(4)}</p>
      </IonCardContent>
    </IonCard>
  )
}

export default BiorhythmCard;
