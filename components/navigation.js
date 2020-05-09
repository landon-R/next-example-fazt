import Link from "next/link"

 const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/" > 
           <a className="navbar-brand" >Navbar</a>
        </Link>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      
        <li className="nav-item">
            <Link href="/about" >
          <a className="nav-link" >About</a>
            </Link>
        </li>
        <li className="nav-item">
             <Link href="/services" >
          <a className="nav-link" >Services</a>
            </Link>
        </li>
      
      </ul>
    </div>
  </nav>
  );
};

export default Navigation