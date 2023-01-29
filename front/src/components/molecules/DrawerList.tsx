import { css } from '@emotion/css';
import theme from '@src/styles/theme';

interface DrawerList {
  _onClick?: () => void;
  name: string;
  id: number;
  rounds: number;
  totalRounds: number;
}

export default function DrawerList(props: DrawerList) {
  const { _onClick, name, rounds, totalRounds } = props;

  return (
    <button
      className={styleRoot}
      onClick={_onClick}
      disabled={rounds === totalRounds}
    >
      <div className="listContents">
        <h5>{name}</h5>
        <p>
          {rounds}/{totalRounds} 세트 완료
        </p>
      </div>
      {rounds === totalRounds ? (
        <span className="material-icons">done</span>
      ) : (
        ''
      )}
    </button>
  );
}

const styleRoot = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 24px;
  gap: 15px;
  width: 100%;
  text-align: left;
  border-bottom: 1px solid ${theme.colors.divider};

  :hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.primaryHover};
  }

  .listContents {
    flex-grow: 1;
  }
`;
