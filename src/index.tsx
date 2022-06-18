import React, { ReactChild } from 'react';

interface ComponentProps {
  children?: ReactChild;
}

export const Component: React.FC<ComponentProps> = ({ children }) => {
  return <div>{children || `I love you GitHub Action`}</div>;
};
