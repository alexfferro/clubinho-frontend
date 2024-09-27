import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'secondary' | 'default'
  addChild: () => void;
}

export function Button({children, variant = 'default', addChild, ...props }: ButtonProps) {
  const buttonClass = `rounded-2xl  h-[35px] w-[140px]  ${variant == 'secondary' ? 'bg-red-400 text-[#fff] hover:bg-red-600 hover:text-[#fff]' : 'bg-green-400 text-[#fff] hover:bg-green-600 hover:text-[#fff]' }`
  return (
    <button className={buttonClass} onClick={addChild} {...props}>
      {children}
    </button>
  );
}