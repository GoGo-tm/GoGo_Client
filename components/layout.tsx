import type { ReactNode } from 'react';

import Header from './header';
import Navbar from './navbar';

interface Props {
  children: ReactNode;
  title: string;
  pre?: boolean;
}

const Layout = ({ children, title, pre }: Props) => {
  return (
    <>
      <Header title={title} pre={pre} />
      {children}
      <Navbar />
    </>
  );
};

export default Layout;
