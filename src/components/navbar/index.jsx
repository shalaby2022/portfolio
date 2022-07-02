import { Link } from 'react-router-dom'
import { Navbar ,Container, Nav} from 'react-bootstrap'

const Navigator = () => {
    return <Navbar bg="secondary" variant="dark" className="container-fluid">
            <Container className="w-100">
                <Nav className="w-100 d-flex justify-content-between p-2">
                    <li><Link to='/' className='text-decoration-none text-danger fs-4 fw-bold'>Home</Link></li>
                    <li><Link to='/products' className='text-decoration-none text-danger fs-4 fw-bold'>E-commerce</Link></li>
                    <li><Link to='/Todo' className='text-decoration-none text-danger fs-4 fw-bold'>ToDo</Link></li>
                    <li><Link to='/donate' className='text-decoration-none text-danger fs-4 fw-bold'>Donate</Link></li>
                    <li><Link to='/signup' className='text-decoration-none text-danger fs-4 fw-bold'>SignUp</Link></li>
                </Nav>
            </Container>
        </Navbar>
}

export default Navigator