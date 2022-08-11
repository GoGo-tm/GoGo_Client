import type { ReactNode } from 'react';
import Header from './header';
import Navbar from './navbar';

interface Props {
  children: ReactNode;
  title: string;
}

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Header title={title} />
      {children}
      <Navbar />
    </>
  );
};

export default Layout;
