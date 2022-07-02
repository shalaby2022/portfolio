import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { gethProducts} from "../../redux/fatures/ShopSlice";

const Products = () => {

    const prodRedux = useSelector(state => state.shopRed)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(gethProducts())
    }, []);

    const { products , isLoading} = prodRedux

    return <div className="bg-dark">
        <div className="container row mx-auto">
            { !isLoading ? products.map((item, i) => {
                return <Link to={`/products/${item.id}`} key={i} className="col-lg-4 text-decoration-none text-center" >
                    <Card className="borde m-3" style={{ minHeight: '550px' }}>
                        <Card.Img variant="top" src={item.image} className="d-block mx-auto pt-3" style={{ width: '200px', height: '200px', maxWidth: '100%'}} />
                        <Card.Body>
                            <Card.Title className="text-danger p-1">{item.title}</Card.Title>
                            <Card.Text className="text-info p-1">{item.category}</Card.Text>
                            <Card.Text className="text-primary p-1">{item.price}</Card.Text>
                            <Button variant="primary p-1">Buy now</Button>
                        </Card.Body>
                    </Card>
                </Link>
            }
            ) : (
                <Spinner animation="border" role="status" className="text-danger  fw-bold my-5 mx-auto">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
        </div>
    </div>
}

export default Products