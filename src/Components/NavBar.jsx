import { Link, useMatch, useResolvedPath} from "react-router-dom";

function NavBar () {
    return (
        <div className="navbar">
            <img src="liam.png" alt="mylogo"/>      
            <ul>
                <CustomLink to='/home' image="hero.png">Home</CustomLink>
                <CustomLink to='/about' image="about.png">About</CustomLink>
                <CustomLink to='/contact' image="contact.png">Contact</CustomLink>
            </ul>   
        </div>
    );
}  

function CustomLink({ image, to, children, ...props }) {
    const resolvePath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvePath.pathname, end: true });
  
    return (
      <li className={isActive ? "active" : ""}>
        <img src={image} alt={children} />
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
}

export default NavBar;