import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import NumberInput from '@src/components/molecules/NumberInput';
import { css } from '@emotion/css';
import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { unfinishedWorkoutRecords } from '@src/services/unfinishedWorkoutRecords';
import { setRecords, getRecords } from '@src/apis/records';
import { getRoutines } from '@src/apis/routines';

type Record = {
  id: number;
  name: string;
  weight: number;
  count: number;
};

const Doing: NextPage = () => {
  const router = useRouter();
  const [record, setRecord] = useState<Record | undefined>(undefined);
  const [round, setRound] = useState(0);
  const weightInput = useRef();
  const countInput = useRef();

  const loading = !!record;

  useEffect(() => {
    (async () => {
      // TODO: query에 id, round 없을 때 예외처리 해야함.
      const id = Number(router.query.id);
      const round = Number(router.query.round); // 어라라? DB꺼 안쓰고?

      const routines = await getRoutines();
      if (routines) {
        const currentName = routines.find((v) => v.id === id)?.name;

        if (!currentName) {
          throw new Error('존재하지 않는 루틴입니다.');
        }

        setRecord({
          id,
          count: 0,
          name: currentName,
          weight: 0,
        });

        const records = await getRecords(id);
        if (records) {
          setRound(records.length);
        }
      }
    })();
  }, []);

  if (!loading) {
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
      <h3>{record.name}</h3>
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
