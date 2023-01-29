import { css } from '@emotion/css';
import { useRouter } from 'next/router';

interface Ready {}

export function Ready(props: Ready) {
  const router = useRouter();

  return (
    <div className={styleRoot}>
      <h1>운동을 시작합니다</h1>
    </div>
  );
}

const styleRoot = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
