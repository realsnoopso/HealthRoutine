import { LOCALSTORAGE_KEYS } from '@src/constants/workout';
import { getNextRoutines } from '@src/apis/routines';
import { setRecords } from '@src/apis/records';
import { Record, Routine } from '@src/types';
import { error, ERROR_MESSAGE } from '@src/services/error';

export function getLocalStorage() {
  const index = Number(window.localStorage.getItem(LOCALSTORAGE_KEYS.INDEX));
  const round = Number(window.localStorage.getItem(LOCALSTORAGE_KEYS.ROUND));
  return { index, round };
}

export function updateLocalStorage(index: number, round: number) {
  window.localStorage.setItem(LOCALSTORAGE_KEYS.INDEX, String(index));
  window.localStorage.setItem(LOCALSTORAGE_KEYS.ROUND, String(round));
}

export async function saveRecord(id: number, record: Record) {
  const success = await setRecords(id, record);
  return success ? true : false;
}

export function iscurrentRoutineFinished(info: {
  id: number;
  round: number;
  routines: Routine[];
}) {
  const { id, round, routines } = info;
  let totalRounds: number = 0;
  routines.forEach((routine: Routine) => {
    if (routine.id === id) totalRounds = routine.totalrounds;
  });
  if (totalRounds === 0) {
    error(ERROR_MESSAGE.TOTAL_ROUNDS_EMPTY);
    return false;
  }
  return round >= totalRounds ? true : false;
}

export async function getNextRoutine() {
  const nextRoutine: { id: number; round: number } = await getNextRoutines();
  const { id, round } = nextRoutine;
  return { id, round };
}
