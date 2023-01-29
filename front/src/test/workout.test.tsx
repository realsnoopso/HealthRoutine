import { iscurrentRoutineFinished, getNextRoutine } from '../services/workout';

const sum = iscurrentRoutineFinished({
  id: 1,
  round: 3,
  routines: routines,
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
