import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Routine } from '@src/types/index';

const Start: NextPage = (props: any) => {
  const { routines } = props;
  const router = useRouter();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [round, setRound] = useState(0);

  useEffect(() => {
    async function fetch() {
      const { round, routineId } = await getCurrnetIndexAndRoutineId();
      setRound(round);
      const firstRoutine = routines
        ? findFirstRoutine(routines, routineId)
        : null;
      if (firstRoutine) {
        const { name, id } = firstRoutine;
        setName(name);
        setId(id);
      }
    }
    fetch();
  }, [routines]);

  async function getCurrnetIndexAndRoutineId(): Promise<Current> {
    const currentFromLocalStorage = window.localStorage.getItem('current');
    const current = currentFromLocalStorage
      ? JSON.parse(currentFromLocalStorage)
      : {
          round: 1,
          routineId: routines ? routines[0]?.id : '',
        };
    return current;
  }

  function findFirstRoutine(routines: Routine[], routineId: string) {
    const target = routines.find((v: any) => v.id === routineId);
    if (target) return target;
    return '';
  }

  function startNextRound() {
    router.push(`/doing/${id}/${round}`);
  }

  return (
    <Cycle btnIcon="play_arrow" _onClick={startNextRound}>
      <h3>{name}</h3>
      <h1>{round}세트 시작</h1>
    </Cycle>
  );
};

export default Start;
