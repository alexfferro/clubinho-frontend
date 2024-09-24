import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'secondary' | 'default'
  addChild: () => void;
}

export function Button({children, variant = 'default', addChild, ...props }: ButtonProps) {
  const buttonClass = `bg-opacity-30 rounded-2xl  h-[35px] w-[140px]  ${variant == 'secondary' ? 'bg-secondary text-[#D46060] hover:bg-secondary hover:text-[#fff]' : 'bg-primary text-primary hover:bg-primary hover:text-[#fff]' }`
  return (
    <button className={buttonClass} onClick={addChild} {...props}>
      {children}
    </button>
  );
}