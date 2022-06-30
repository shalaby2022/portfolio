import { Link } from 'react-router-dom'

const Navbar = () => {
    return <div className="container w-75 mx-auto py-1 bg-secondary m-2">
        <ul className="list-unstyled d-flex justify-content-between">
            <li ><Link to='/home' className='text-decoration-none text-danger fs-4'>Home</Link></li>
            <li ><Link to='/about' className='text-decoration-none text-danger fs-4'>About</Link></li>
            <li ><Link to='/products' className='text-decoration-none text-danger fs-4'>Products</Link></li>
            <li ><Link to='/Todo' className='text-decoration-none text-danger fs-4'>ToDo</Link></li>
            <li ><Link to='/counter' className='text-decoration-none text-danger fs-4'>Counter</Link></li>
        </ul>
    </div>
}

export default Navbar