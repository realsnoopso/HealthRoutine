import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { resetData } from '@src/services/resetData';

const Start: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    resetData();
  }, []);

  function stratNextRound() {
    console.log('stratNextRound');
    router.push(`/start`);
  }

  return (
    <Cycle btnIcon="play_arrow" _onClick={stratNextRound}>
      <h1>운동을 시작합니다</h1>
    </Cycle>
  );
};

export default Start;
