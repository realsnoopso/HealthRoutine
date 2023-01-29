import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import { resetData } from '@src/services/resetData';
import { useRouter } from 'next/router';

const Start: NextPage = () => {
  const router = useRouter();

  function finishRoutines() {
    resetData()
    router.push(`/`); 
  }

  return (
    <Cycle btnIcon="play_arrow" _onClick={finishRoutines}>
      <h3>ㅊㅋㅊㅋ 끗</h3>
      <p>끝난 시간: 1시간 5분 31초</p>
    </Cycle>
  );
};

export default Start;
