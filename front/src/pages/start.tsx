import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import { workoutList } from '@src/constants/mockData';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getAllRecords } from '@src/apis/index';
const Start: NextPage = (props: any) => {
  const { routines } = props;
  console.log(routines);
  const router = useRouter();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [round, setRound] = useState(0);

  async function getCurrnetIndexAndRound() {
    console.log(await getAllRecords());
    // const current = window.localStorage.getItem('current') ?? routines?.[0];
    // return current;
  }

  useEffect(() => {
    async function fetch() {
      getCurrnetIndexAndRound();
      // const { name, round } = routines;
    }
    fetch();
  }, []);

  function startNextRound() {
    router.push(`/doing/${id}/${round}`);
  }

  return (
    <Cycle btnIcon="play_arrow" _onClick={startNextRound}>
      {/* <h3>{name}</h3>
      <h1>{round}세트 시작</h1> */}
    </Cycle>
  );
};

export default Start;
