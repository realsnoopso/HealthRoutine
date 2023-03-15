import { Record } from '@src/types/index';
import { getRecords } from '@src/apis/records';

async function getLastRecord() {}

function checkRecordIsDone(lastRecrod: Record) {
  const { isDone } = lastRecrod;
  return isDone;
}
