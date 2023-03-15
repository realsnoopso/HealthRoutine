import { Record } from '@src/types/records';
import { fetchData } from './index';

export async function getRecords(id: number): Promise<Record[] | null> {
  const result = await fetchData(`/record?id=${id}`, { method: 'get' });
  if (result?.data) {
    return result.data;
  } else {
    console.log('error');
    return null;
  }
}

export async function getAllRecords(): Promise<any[] | null> {
  const result = await fetchData(`/records`, { method: 'get' });
  if (result?.data) {
    return result.data;
  } else {
    console.log('error');
    return null;
  }
}

export async function setRecords(id: string, record: Record) {
  return fetchData(`/record`, { method: 'post', data: record });
}
