import { Record } from '@src/types/records';
import { fetchData } from './index';

export async function getRecordFromAPI(
  id: Record['id']
): Promise<Record | null> {
  const result = await fetchData(`/record?id=${id}`, { method: 'get' });
  if (result?.data) {
    return result.data;
  } else {
    console.log('error');
    return null;
  }
}

export async function getAllRecordsFromAPI(): Promise<Record[] | null> {
  const result = await fetchData(`/records`, { method: 'get' });
  if (result?.data) {
    return result.data;
  } else {
    console.log('error');
    return null;
  }
}

export async function getLastRecordFromAPI(
  routineId: Record['routineId']
): Promise<Record | null> {
  const result = await fetchData(`/record/last?routineId=${routineId}`, {
    method: 'get',
  });
  if (result?.data) {
    return result.data;
  } else {
    console.log('error');
    return null;
  }
}

export async function postRecordToAPI(record: Record) {
  return fetchData(`/record`, { method: 'post', data: record });
}
