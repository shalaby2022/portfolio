import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom'



const Products = () => {

    useEffect(() => {
        fetchProducts()
    }, []);

    const fetchProducts = ()=> {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            
    }

    const [products,setProducts] = useState([])

    return <div className="container row mx-auto m-4 ">
        { products.length > 0 ? products.map((item,i) => {
            
            return <Link to={`/products/${item.id}`} key={i} className="col-md-4 text-decoration-none text-center" >
                <Card className="borde m-2" style={{height: '450px'}}>
                <Card.Img variant="top" src= {item.image} className="d-block mx-auto pt-3" style={{width:'200px',height: '200px'}}/>
                <Card.Body>
                    <Card.Title className="text-danger p-1">{item.title}</Card.Title>
                    <Card.Text className="text-info p-1">{item.category}</Card.Text>
                    <Card.Text className="text-primary p-1">{item.price}</Card.Text>
                    <Button variant="primary p-1">Buy now</Button>
                </Card.Body>
                </Card>
            </Link>
            }
        ) : (<p className="text-danger fs-1 fw-bold my-5 text-center">Loading ......</p>)}
        
    </div>
}

export default Products