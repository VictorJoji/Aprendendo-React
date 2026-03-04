import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ children }) => {
  const isLucro = typeof children === 'string' && children.includes('Lucro');
  const isPrejuizo = typeof children === 'string' && children.includes('Prejuízo');

  const headingStyle = {
    color: isLucro ? 'blue' : isPrejuizo ? 'var(--baixa)' : 'black',
  };

  return <h1 style={headingStyle}>{children}</h1>;
};