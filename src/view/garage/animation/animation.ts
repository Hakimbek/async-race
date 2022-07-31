import aButton from './start/a';
import bButton from './stop/b';
import carRace from './race/race';
import reset from './reset/reset';

export default function animation(element: HTMLElement) {
  // A BUTTON
  if (element.getAttribute('id') === 'a') {
    aButton(element);
  }
  // B BUTTON
  if (element.getAttribute('id') === 'b') {
    bButton(element);
  }
  // RACE
  if (element.getAttribute('id') === 'race') {
    carRace();
  }
  // RESET
  if (element.getAttribute('id') === 'reset') {
    reset();
  }
}