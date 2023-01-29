import { css } from '@emotion/css';
import theme from '@src/styles/theme';
import React, { useEffect } from 'react';

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  _onClick?: () => void;
  shape?: 'round' | 'square';
  icon?: string;
  style?: any;
}

const Button = React.forwardRef((props: Button, ref: any) => {
  const { children, _onClick, shape, icon, style } = props;
  const [disabled, setDisabled] = React.useState(false);
  const buttonDomDisabled = ref?.current?.disabled;

  useEffect(() => {
    setDisabled(buttonDomDisabled);
  }, [buttonDomDisabled]);

  return (
    <button
      ref={ref}
      className={
        styleRoot + ` ${style} ${shape === 'round' ? 'round' : 'squre'}`
      }
      onClick={disabled ? () => {} : _onClick}
    >
      <span className="material-icons">{icon}</span>
      {children}
    </button>
  );
});
Button.displayName = 'Button';

export default Button;

const styleRoot = css`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.btnText};
  display: flex;
  align-items: center;
  justify-content: center;

  &.round {
    padding: 16px;
    min-width: inherit;
    border-radius: 50%;
  }

  &.squre {
    padding: 24px;
    border-radius: 20px;
    min-width: 160px;
  }

  .material-icons {
    font-size: 56px;
  }

  &:disabled {
    opacity: 0.3;
  }
`;
