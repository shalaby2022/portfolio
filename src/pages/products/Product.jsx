import { useParams } from'react-router-dom'
import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap";

const Prodcut = () => {

    const urlParams = useParams()
    console.log(urlParams)

    useEffect(() => {
        fetchProduct()
    }, []);

    const fetchProduct = ()=> {
        fetch(`https://fakestoreapi.com/products/${urlParams.id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
            
    }
    const [product,setProduct] = useState([])
    console.log(product)

    return <div className='mx-auto w-50 m-5'>
        <Card className="borde m-2 p-3" style={{height: '450px'}}>
                <Card.Img variant="top" src= {product.image} className="w-50"/>
                <Card.Body>
                    <Card.Title className="text-danger">{product.title}</Card.Title>
                    <Card.Text className="text-info">{product.category}</Card.Text>
                    <Card.Text className="text-primary">{product.price}</Card.Text>
                    <Button variant="primary">Buy now</Button>
                </Card.Body>
                </Card>
    </div>
}

export default Prodcut