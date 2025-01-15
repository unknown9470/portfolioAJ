const Header = () => (
  <header className="bg-primary text-white p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold">Alexis Jeandenans</h1>
      <ul className="hidden md:flex space-x-4">
        <li><a href="#about" className="hover:text-secondary">À propos</a></li>
        <li><a href="#projects" className="hover:text-secondary">Projets</a></li>
        <li><a href="#contact" className="hover:text-secondary">Contact</a></li>
      </ul>
      <button className="md:hidden text-secondary">Menu</button>
    </nav>
  </header>
);

export default Header;
