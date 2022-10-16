import React from 'react';

import './styles.css'

export interface IButton {
  isActive: boolean
  title: string
  onClick?: VoidFunction
}

const Button: React.FC<IButton> = ({isActive, title, ...rest}) => (
  <button 
    type='button' 
    className={`button ${isActive && 'active'}`}
    {...rest}
  >
    {title}
  </button>
)

export default Button;