import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '@src/styles/globalStyles';
import Head from 'next/head';
import Navbar from '@src/components/organisms/Navbar';
import Drawer from '@src/components/organisms/Drawer';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import { getRoutines } from '@src/apis/routines';
import { getAllRecords } from '@src/apis/records';
import { Routine, Record } from '@src/types/index';

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const backdropRef = useRef();
  const [drawerOpen, setDrawerOpen] = useState(false);
  // let routines: Routine[] = [];
  const [routines, setRoutines] = useState<Routine[]>([]);
  let records: Record[] = [];
  const [routineName, setRoutineName] = useState('');

  async function fetchRoutines() {
    const data = await getRoutines();
    if (data) setRoutines(data);
  }

  async function fetchRecords() {
    const data = await getAllRecords();
    if (data) records = data;
  }

  useEffect(() => {
    fetchRoutines();
  }, []);

  function closeDrawer() {
    setDrawerOpen(false);
  }

  function drawerFunc() {
    return setDrawerOpen(!drawerOpen);
  }

  return (
    <RecoilRoot>
      <Global styles={globalStyles} />
      <Head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

      {asPath === '/' ? null : <Navbar drawerOpenFuc={drawerFunc} />}
      <Drawer
        backdropRef={backdropRef}
        drawerCloseFunc={drawerFunc}
        open={drawerOpen}
        closeFunc={closeDrawer}
        routines={routines}
      />
      <Component
        routines={routines}
        {...pageProps}
        routineName={routineName}
        setRoutineName={setRoutineName}
      />
    </RecoilRoot>
  );
}

export default MyApp;
