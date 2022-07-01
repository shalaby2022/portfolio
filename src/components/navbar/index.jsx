import { Link } from 'react-router-dom'
import { Navbar ,Container, Nav} from 'react-bootstrap'

const Navigator = () => {
    return <Navbar bg="dark" variant="dark" className="container-fluid">
            <Container className="w-100">
                <Nav className="w-100 d-flex justify-content-between p-2">
                    <li><Link to='/' className='text-decoration-none text-danger fs-4'>Home</Link></li>
                    <li><Link to='/about' className='text-decoration-none text-danger fs-4'>About</Link></li>
                    <li><Link to='/products' className='text-decoration-none text-danger fs-4'>Products</Link></li>
                    <li><Link to='/Todo' className='text-decoration-none text-danger fs-4'>ToDo</Link></li>
                    <li><Link to='/counter' className='text-decoration-none text-danger fs-4'>Counter</Link></li>
                </Nav>
            </Container>
        </Navbar>
}

export default Navigator