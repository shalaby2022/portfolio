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
    // console.log(products)

    return <div className="row m-4">
        {products.map((item,i) => {
            
            return <Link to={`/products/${item.id}`} key={i} className="col-md-4 text-decoration-none" >
                <Card className="borde m-2 p-3" style={{height: '450px'}}>
                <Card.Img variant="top" src= {item.image} className="w-50"/>
                <Card.Body>
                    <Card.Title className="text-danger">{item.title}</Card.Title>
                    <Card.Text className="text-info">{item.category}</Card.Text>
                    <Card.Text className="text-primary">{item.price}</Card.Text>
                    <Button variant="primary">Buy now</Button>
                </Card.Body>
                </Card>
            </Link>
            }
        )}
    </div>
}

export default Products