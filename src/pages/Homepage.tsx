import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function HomePage() {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
}
export default HomePage;
