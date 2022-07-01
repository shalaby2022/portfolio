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
    const [product,setProduct] = useState(null)

    return <div className='mx-auto w-50 m-4'>
        { product ?  (<Card className="border p-1 text-center" style={{height: '400px'}}>
            <Card.Img variant="top" src= {product.image} className="w-25 d-block mx-auto" sytle={{width: '200px',height: '150px'}}/>
            <Card.Body>
                <Card.Title className="text-danger">{product.title}</Card.Title>
                <Card.Text className="text-info">{product.category}</Card.Text>
                <Card.Text className="text-primary">{product.price}</Card.Text>
                <Button variant="primary">Buy now</Button>
            </Card.Body>
        </Card>) : <p className="text-danger fs-1 fw-bold my-5 text-center">Loading ......</p>}
        </div> 
}


export default Prodcut