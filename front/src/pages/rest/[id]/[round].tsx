import type { NextPage } from 'next';
import { useState, useEffect, useRef } from 'react';
import { runSetCount, makeTimer } from '@src/services/makeTimer';
import { workoutList } from '@src/constants/mockData';
import { useRouter } from 'next/router';
import Cycle from '@src/components/templates/Cycle';
import { unfinishedWorkoutRecords } from '@src/services/unfinishedWorkoutRecords';

const Rest: NextPage = () => {
  const [count, setCount] = useState(0);
  const router = useRouter();
  
  let index = Number(router.query.index)
  let id = router.query.id
  let round = Number(router.query.round)
  const totalRounds = Number(workoutList[index]?.['totalRounds']);
  const actionButton: any = useRef();

  useEffect(() => {
    runSetCount(count, setCount);
  }, [count]);

  useEffect(() => {
    actionButton.current.disabled = true;
  }, []);

  if (count > 1) {
    actionButton.current.disabled = false;
  }

  function startNewRound() {
    if (isRoundFinished()) {
      id = getNextRoundId()
      round = 1
    } else {
      round = round + 1
    }
    saveCurrIdAndRound()
    router.push('/start');
  }

  function getNextRoundId() {
    const noRecordWorkouts = unfinishedWorkoutRecords().filter(v => v.round === 0);
    if (noRecordWorkouts.length !== 0) {
      return noRecordWorkouts[0].id
    } else {
      return unfinishedWorkoutRecords()[0].id
    }
  }

  function isRoundFinished() {
    const roundInfo = workoutList.find(v => v.id === id)
    if (roundInfo && round >= roundInfo?.totalRounds) {
      return true;
    } else {
      return false;
    }
  }

  function saveCurrIdAndRound() {
    window?.localStorage.setItem('currId', `${id}`)
    window?.localStorage.setItem('currRound', `${round}`)
  }

  return (
    <Cycle btnIcon="play_arrow" _onClick={startNewRound} ref={actionButton}>
      <h3>쉬는 시간</h3>
      <h1>{makeTimer(count, 'm:s')}</h1>
    </Cycle>
  );
};

export default Rest;
