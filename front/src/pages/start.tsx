import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import { workoutList } from '@src/constants/mockData';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getRoutines } from '@src/apis/routines';
const Start: NextPage = () => {
  const router = useRouter();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [round, setRound] = useState(0);

  function getCurrnetIndexAndRound(routineList: any) {
    const current = { id: '', round: 1, name: '' };
    current.id =
      window.localStorage.getItem('current-id') ??
      routineList?.[0].id ??
      current.id;
    current.round = window.localStorage.getItem('current-rounds')
      ? Number(window.localStorage.getItem('current-round'))
      : current.round;
    current.name =
      routineList?.find((v: any) => v.id === current.id)?.name ?? current.name;
    return current;
  }

  useEffect(() => {
    async function fetch() {
      const routines = await getRoutines();
      const current = getCurrnetIndexAndRound(routines);
      setId(current.id);
      setName(current.name);
      setRound(current.round);
    }
    fetch();
  }, []);

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
