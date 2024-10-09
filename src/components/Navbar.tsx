import { Link, NavLink } from 'react-router-dom';

import { links } from '../utils';
import Logo from './Logo';
import { Button } from './ui/button';
function Navbar() {
  return (
    <nav className='mx-auto px-8 py-4 bg-slate-700 text-white'>
      <div className='flex justify-between items-center '>
        <Logo />
        <div className='flex justify-between items-center gap-x-8'>
          {links.map((link) => {
            return (
              <NavLink
                to={link.href}
                key={link.href}
                className={({ isActive }) => {
                  return ` font-light tracking-wide  uppercase ${
                    isActive ? 'text-green-500' : ''
                  }`;
                }}
              >
                {link.label}
              </NavLink>
            );
          })}
          <Button asChild className='hover:bg-green-500 bg-slate-700'>
            <Link className='uppercase' to='/login'>
              Login in
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
