// components/Button.tsx

import React from 'react';
import Styles from './styles.module.css'

interface ButtonProps {
  onClick: () => void;
  title: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, title ="ADD"}) => {
  return (
    <button
      onClick={onClick}
      className={Styles["button-add"]}
     >
      {title}
    </button>
  );
};

export default Button;
