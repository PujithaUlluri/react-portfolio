import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return (
        <div className="bg-dark text-light" style={{ backgroundColor: "#0b0f14", color: "#e5e7eb" }}>
{/* Navbar */}
<nav className="navbar navbar-expand-lg navbar-dark container">
<a className="navbar-brand fw-bold text-light me-0" href="#">
  Portfolio
</a>

<div className="ms-auto">
<ul className="navbar-nav flex-row gap-4">
<li className="nav-item">
<NavLink to='/' className='nav-link'>Home</NavLink>
</li>
<li className="nav-item">
<NavLink to='/skills' className='nav-link'>Skills</NavLink>
</li>
<li className="nav-item">
<NavLink to='/projects' className='nav-link'>Projects</NavLink> 
  </li>
<li className="nav-item">
 <NavLink to='/contact' className='nav-link'>Contact</NavLink>
</li>
</ul>
</div>
</nav>
</div>
    )
}

export default Navbar;