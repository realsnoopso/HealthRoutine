import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef, ReactElement } from 'react';
import { runSetCount, makeTimer } from '@src/services/makeTimer';
import { resetData } from '@src/services/resetData';
interface Navbar {
  drawerOpenFuc: () => void;
}

export default function Navbar(props: Navbar) {
  const { drawerOpenFuc } = props;
  const router = useRouter();

  const [count, setCount] = useState(0);

  useEffect(() => {
    runSetCount(count, setCount);
  }, [count]);

  function quitRoutines() {
    resetData()
    router.push('/')
  }

  return (
    <StyledRoot>
      <button onClick={() => drawerOpenFuc()}>
        <span className="material-icons">reorder</span>
      </button>
      <span className="timer">{makeTimer(count, 'h:m:s')}</span>
      <button onClick={quitRoutines}>
        <span className="material-icons">power_settings_new</span>
      </button>
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background-color: ${theme.colors.background};
  color: ${theme.colors.text};

  .material-icons {
    font-size: 28px;
    color: ${theme.colors.secondary};
  }
`;
