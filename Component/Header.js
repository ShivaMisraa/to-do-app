import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <nav className="navbar">
      <Link href={'/todoForm'} className="nav-link">
        New ToDo
      </Link>
      <Link href={'/todos'} className="nav-link">
        My Todos
      </Link>
      <Link href={'/about'} className="nav-link">
        About
      </Link>

      <style jsx>{`
        .navbar {
          background-color: #3498db;
          display: flex;
          justify-content: space-around;
          padding: 10px;
          margin-Bottom:10px
        }

        .nav-link {
          color: #fff;
          text-decoration: none;
          font-size: 16px;
          margin: 0 10px;
        }

        .nav-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
};

export default Header;
