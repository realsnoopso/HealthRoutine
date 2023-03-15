import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import NumberInput from '@src/components/molecules/NumberInput';
import { css } from '@emotion/css';
import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { unfinishedWorkoutRecords } from '@src/services/unfinishedWorkoutRecords';
import { setRecords } from '@src/apis/records';
import { Record } from '@src/types/index';

const Doing: NextPage = (props: any) => {
  const { routines } = props;
  const router = useRouter();
  const [id, setId] = useState('');
  const [record, setRecord] = useState<Record>({
    id: '',
    routineId: '',
    count: 0,
    weight: 0,
    isDone: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [round, setRound] = useState(0);
  const weightInput = useRef();
  const countInput = useRef();

  function setRecordInfo() {
    const query = router.query;
    if (query.id && query.round) {
      const id = String(query.id);
      const round = Number(query.round);
      setId(id);
      setRound(round);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setRecordInfo();
  }, []);

  if (!isLoading) {
    return <Cycle btnIcon="done"></Cycle>;
  }

  const finishRoutine = () => {
    saveRecord();
    if (unfinishedWorkoutRecords().length === 0) {
      return router.push(`/done`);
    }
    router.push(`/rest/${record.id}/${round}`);
  };

  const saveRecord = async () => {
    await setRecords(record.id, record);
  };

  return (
    <Cycle btnIcon="done" _onClick={finishRoutine}>
      <h3></h3>
      <h1>{round}세트</h1>
      <NumberInput
        ref={weightInput}
        label="무게 (kg)"
        type="weight"
        placeholder={0}
        value={record.weight}
        setValue={(value) => {
          setRecord((prevRecord) => {
            if (!prevRecord) {
              return prevRecord;
            }
            return {
              ...prevRecord,
              weight: value,
            };
          });
        }}
        style={css`
          margin-top: 24px;
          margin-bottom: 24px;
        `}
      />
      <NumberInput
        ref={countInput}
        label="횟수"
        type="count"
        placeholder={0}
        value={record.count}
        setValue={(value) => {
          setRecord((prevRecord) => {
            if (!prevRecord) {
              return prevRecord;
            }
            return {
              ...prevRecord,
              count: value,
            };
          });
        }}
      />
    </Cycle>
  );
};

export default Doing;
