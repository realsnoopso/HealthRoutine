import { Routine } from '@src/types/routines';

import { fetchData } from './index';

export async function getRoutines(): Promise<Routine[] | null> {
  const response = await fetchData(`/routines`, { method: 'get' });
  if (response) {
    return response.data;
  } else {
    console.log('error');
    return null;
  }
}

export function setRoutines(id: string, record: Routine) {
  // Api.post(`/records?id=${id}`, record);
}
