import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Films</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </header>
  );
}
