import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import { NAVBAR_LINKS } from './constants';

const showPipe = (index: number): ReactElement => {
  return NAVBAR_LINKS.length - 1 > index ? <span className="mx-1">|</span> : <></>;
};

const Navbar = (): ReactElement => {
  return <nav className="flex justify-between items-center mb-16">
    <div>
      <NavLink
        to="/"
        className={(isActive): string => {
          const classes = 'uppercase text-2xl tracking-tight text-blue-900 logo';

          return isActive ? `${classes} font-bold` : `${classes} font-normal`;
        }}
      >
        RB
      </NavLink>
    </div>
    <div className="uppercase text-sm tracking-tight text-blue-900">
      {NAVBAR_LINKS.map(({ path, name }, index) => (
        <NavLink
          key={path}
          to={path}
          className={(isActive): string => isActive ? 'font-bold' : 'font-normal'}
        >
          {name}
          {showPipe(index)}
        </NavLink>
      ))}
    </div>
  </nav>;
};
export default Navbar;
