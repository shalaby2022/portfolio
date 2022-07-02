import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from '../../redux/fatures/ProductSlice';


const Prodcut = () => {

    const urlParams = useParams()
    const prodRedux = useSelector(state => state.prodRed.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProduct(urlParams.id))
    }, []);

    return <div className="bg-dark" style={{ height: "89.1vh" }}>
        <div className='mx-auto w-50 p-3'>
            {prodRedux ? (<Card className="border p-1 text-center m-5" style={{ height: '400px' }}>
                <Card.Img variant="top" src={prodRedux.image} className="w-25 d-block mx-auto" sytle={{ width: '200px', height: '150px', maxWidth: '100%' }} />
                <Card.Body>
                    <Card.Title className="text-danger">{prodRedux.title}</Card.Title>
                    <Card.Text className="text-info">{prodRedux.category}</Card.Text>
                    <Card.Text className="text-primary">{prodRedux.price}</Card.Text>
                    <Button variant="primary">Buy now</Button>
                </Card.Body>
            </Card>) : <p className="text-danger fs-1 fw-bold my-5 text-center">Loading ......</p>}
        </div>
    </div>
}


export default Prodcut