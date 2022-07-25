import React, { ReactChild } from 'react';

interface ComponentProps {
  children?: ReactChild;
}

export const Component: React.FC<ComponentProps> = ({ children }) => {
  return (
    <div>
      <h1>{children || `GitHub Action with Semantic Release`}</h1>
    </div>
  );
};
