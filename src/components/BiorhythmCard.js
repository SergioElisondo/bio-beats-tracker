import {IonCard, IonCardContent, IonCardHeader, IonCardTitle} from "@ionic/react";
import dayjs from "dayjs";

import {calculateBiorhythms} from '../lib/biorhythms'
import BiorhythmChart from "./BiorhythmChart";

import './BiorhythmCard.css'

function formatDate(isoString) {
  const day = dayjs(isoString)
  return day.format('D MMMM YYYY')
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
        <p className="biorhythm-physical">Physical: {bioRhythms.physical.toFixed(4)}</p>
        <p className="biorhythm-emotional">Emotional: {bioRhythms.emotional.toFixed(4)}</p>
        <p className="biorhythm-intellectual">Intellectual: {bioRhythms.intellectual.toFixed(4)}</p>
      </IonCardContent>
    </IonCard>
  )
}

export default BiorhythmCard;
