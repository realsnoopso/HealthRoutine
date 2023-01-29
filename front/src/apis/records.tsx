import { Record } from '@src/types/records';
import { fetchData } from './index';

export async function getRecords(id: number): Promise<Record[] | null> {
  const result = await fetchData(`/records?id=${id}`, { method: 'get' });
  if (result?.data) {
    return result.data;
  } else {
    console.log('error');
    return null;
  }
}

export async function setRecords(id: number, record: Record) {
  return fetchData(`/records?id=${id}`, { method: 'post', data: record });
}
