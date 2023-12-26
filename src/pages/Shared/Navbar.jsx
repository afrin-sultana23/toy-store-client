import { Link, useLocation, useNavigate } from "react-router-dom";
import logos from "../../assets/icons/logos.ico"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const { user, logOut } = useContext(AuthContext);
    const [  islogin, setIslogin ] = useState(false)

    useEffect(() => {
        setIslogin(location.pathname === '/login');
    }, [location]);

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Log Out'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        navigate('/');
                        Swal.fire(
                            'Success..!',
                            'You are logged out.'
                        );
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            }
        });
    };

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/alltoys">All Toys</Link></li>
        <li><Link to="/blog">Blog</Link></li>
    </>

    return (
        <div className="bg-base-200">
            <div className="navbar pb-8 bg-base-200 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="text-lg tracking-wide menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                        {user && <li><Link to='mytoys' className=''>My Toys</Link></li>
                        }
                        {
                        user && <li><Link to='addtoys' className=''>Add Toy</Link></li>
                        }
                    </ul>
                    </div>
                    <Link to="/" className="ml-0 btn btn-link">
                       <img src={logos} className="ml-0 w-2/4 md:w-full " alt="" />
                       
                    </Link>
                </div>
                <div className="navbar-start hidden lg:flex pt-4">
                    <ul className="text-lg font-medium tracking-widest menu menu-horizontal px-1">
                        {navItems}
                        {user && <li><Link to='mytoys' className=''>My Toys</Link></li>
                        }
                        {
                        user && <li><Link to='addtoys' className=''>Add Toy</Link></li>
                        }
                    </ul>
                </div>
                <div className="navbar-end md:w-[20%] pt-4">
                { 
                  user && ( 
                    <figure className="mx-2 tooltip w-1/4" data-tip={user.email}>
                        <img src={user.photoURL ? user.photoURL : 'https://i.ibb.co/QCMNBFf/User-Icon.jpg'} alt="" className="rounded-full" />
                    </figure> 
                  )
                }
                { user ? (
                <Link onClick={handleLogout}>Logout</Link> ) : islogin ? ( <Link to="/register">SignUp</Link> ) : ( <Link to="/login">Login</Link> 
                )
                }
                </div>
            </div>
        </div>
    );
};

export default Navbar;