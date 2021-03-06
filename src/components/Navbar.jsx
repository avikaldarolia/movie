import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useFirebaseAuth } from '../context/FirebaseAuthContext';
const Navbar = () => {
  const navigate = useNavigate();
  const user = useFirebaseAuth();
  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    navigate('/login');
  };
  return (
    <div className="flex bg-black items-center">
      <div className="flex items-center">
        {/* <img className="h-16" src={util} alt="" /> */}
        <Link to="/">
          <p className="text-white py-5 ml-12 cursor-pointer">Bot-Movies</p>
        </Link>
      </div>
      {user && (
        <p className="text-[#f9790e] py-5 mx-auto cursor-pointer hover:text-white">
          <Link to="/playlists">My Playlists</Link>
        </p>
      )}

      <FiLogOut
        onClick={handleLogout}
        className="h-6 w-6 text-white ml-auto mr-12 cursor-pointer"
      />
    </div>
  );
};

export default Navbar;
