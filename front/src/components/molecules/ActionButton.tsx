import Button from '@src/components/atoms/Button';
import { css } from '@emotion/css';
import React from 'react';

interface ActionButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  _onClick?: () => void;
  icon?: string;
  style?: any;
}

const ActionButton = React.forwardRef((props: ActionButton, ref: any) => {
  const { _onClick, icon, style } = props;

  return (
    <Button
      ref={ref}
      style={style}
      shape="round"
      icon={icon}
      _onClick={_onClick}
    />
  );
});

ActionButton.displayName = 'ActionButton';

export default ActionButton;
