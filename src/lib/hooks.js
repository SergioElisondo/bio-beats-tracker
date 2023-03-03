import {useState} from 'react';

export function useStoredState(storageKey, defaultState) {
  // this gets a users info in case it already exists with conditional
  function getInitialState() {
    const storedState = localStorage.getItem(storageKey)
    return storedState ?? defaultState
  }
  const [state, setState] = useState(getInitialState)
  // function updates state and stores in localStorage
  function setAndStoreState(state) {
    setState(state);
    localStorage.setItem(storageKey, state)
  }
  return [state, setAndStoreState];
}
