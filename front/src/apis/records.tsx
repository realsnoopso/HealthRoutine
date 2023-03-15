import { Record } from '@src/types/records';
import { fetchData } from './index';

export async function getRecords(id: Record['id']): Promise<Record | null> {
  const result = await fetchData(`/record?id=${id}`, { method: 'get' });
  if (result?.data) {
    return result.data;
  } else {
    console.log('error');
    return null;
  }
}

export async function getAllRecords(): Promise<Record[] | null> {
  const result = await fetchData(`/records`, { method: 'get' });
  if (result?.data) {
    return result.data;
  } else {
    console.log('error');
    return null;
  }
}

export async function getLastRecord(
  routineId: Record['routineId']
): Promise<Record | null> {
  const result = await fetchData(`/records/last?routineId=${routineId}`, {
    method: 'get',
  });
  if (result?.data) {
    return result.data;
  } else {
    console.log('error');
    return null;
  }
}

export async function setRecords(record: Record) {
  return fetchData(`/record`, { method: 'post', data: record });
}
