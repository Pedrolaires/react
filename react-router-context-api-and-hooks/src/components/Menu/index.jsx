import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        height: '60px',
        alignItems: 'center',
        background: '#D0D0D0',
      }}
    >
      <Link style={{ textDecoration: 'none', color: '#000755' }} to="/">
        Home
      </Link>
      <Link style={{ textDecoration: 'none', color: '#000755' }} to="/abc">
        Abc
      </Link>
    </nav>
  );
};
