import React, { Fragment } from 'react';
import { Menu } from '../../components/Menu';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <Fragment>
      <Menu />
      {children}
    </Fragment>
  );
}
