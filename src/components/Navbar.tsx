import { NavLink } from 'react-router-dom';

import { links } from '../utils';
function Navbar() {
  return (
    <nav className='mx-auto px-8 py-4 bg-slate-700 text-white'>
      <div className='flex justify-between items-center '>
        {links.map((link) => {
          return (
            <NavLink
              to={link.href}
              key={link.href}
              className={({ isActive }) => {
                return `capitalize font-light tracking-wide ${
                  isActive ? 'text-green-500' : ''
                }`;
              }}
            >
              {link.label}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
export default Navbar;
