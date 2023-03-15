import { Record } from '@src/types/index';
import { getLastRecordFromAPI, postRecordToAPI } from '@src/apis/records';

export async function checkRecordIsDone(routineId: Record['routineId']) {
  const lastRecord = await getLastRecordFromAPI(routineId);
  if (!lastRecord) return null;
  const { isDone } = lastRecord;
  return isDone;
}

export function getUnfinishedRoutines(routines: Record[]) {
  // todo: 루틴 API 먼저 수정하기
  return routines.filter((routine) => !routine.isDone);
}

export function stopExercise() {
  // todo: 작성
}

export function checkCurrentWeightAndCount(window: Window) {
  return (
    window.localStorage.hasItem('currentWeight') &&
    window.localStorage.hasItem('currentCount')
  );
}

export function getCurrentWeightAndCount(window: Window) {
  return {
    currentWeight: window.localStorage.getItem('currentWeight'),
    currentCount: window.localStorage.getItem('currentCount'),
  };
}

export function postCurrentWeight(window: Window, currentWeight: number) {
  window.localStorage.setItem('currentWeight', String(currentWeight));
}

export function postCurrentCount(window: Window, currentCount: number) {
  window.localStorage.setItem('currentCount', String(currentCount));
}

export async function postRecord(record: Record) {
  const response = await postRecordToAPI(record);
  return response?.status === 200 ? true : false;
}
