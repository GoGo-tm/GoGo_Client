import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { Children } from 'react';

interface NavLinkProps extends React.PropsWithChildren<LinkProps> {
  activeClassName?: string;
}

const NavLink = ({
  children,
  activeClassName = 'active',
  ...props
}: NavLinkProps) => {
  const { asPath } = useRouter();
  const child = Children.only(children) as React.ReactElement;
  const childClassName = child.props.className || '';

  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default NavLink;
