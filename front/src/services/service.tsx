import { Record } from '@src/types/index';
import { getLastRecordFromAPI } from '@src/apis/records';

export async function checkRecordIsDone(routineId: Record['routineId']) {
  const lastRecord = await getLastRecordFromAPI(routineId);
  if (!lastRecord) return null;
  const { isDone } = lastRecord;
  return isDone;
}
