import { checkRecordIsDone, postRecord } from '../../src/services/service';

test('checkRecordIsDone', async () => {
  expect(await checkRecordIsDone('7490e5a4-f69f-4b4b-9191-df9f330edd4c')).toBe(
    true
  );
  expect(await checkRecordIsDone('')).toBe(null);
});

test('checkCurrentWeightAndCount', async () => {
  expect(
    await postRecord({ routineId: 'ddd', weight: 2, count: 2, isDone: false })
  ).toBe(true);
});
