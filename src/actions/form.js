import shortid from 'shortid';
import {
  setMilliseconds,
  setSeconds,
  setMinutes,
  setHours,
  getMinutes,
  getHours,
} from 'date-fns';

export function createReminder(time) {
  // Set default time of day to now
  // Rounds up minutes to nearest 5 mins
  const newTime = setHours(
    setMinutes(
      setSeconds(setMilliseconds(time, 0), 0),
      Math.ceil(getMinutes(new Date()) / 5) * 5,
    ),
    getHours(new Date()),
  );
  return { type: 'FORM_OPENED', id: null, time: newTime.toUTCString() };
}

export function formClosed() {
  return { type: 'FORM_CLOSED' };
}

export function formSubmitted(form) {
  return {
    type: 'FORM_SUBMITTED',
    form: { ...form, id: form.id || shortid.generate() },
  };
}

export function editItem(reminder) {
  return { type: 'ITEM_EDITED', reminder };
}

export function itemDeleted(id) {
  return { type: 'ITEM_DELETED', id };
}
