import Decrement from "../../components/counterActions/decrement";
import Increment from "../../components/counterActions/increment";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from "../../redux/fatures/CounterSlice";
import { useState } from "react";

function Container() {

    const [isDonated, setDonated] = useState(false)

    const reduxCounter = useSelector((state) => state.counterRed.counter)

    const dispatch = useDispatch();

    const onIncrement = () => {
        dispatch(increment())
    }

    const onDecrement = () => {
        if (reduxCounter >= 1) {
            dispatch(decrement())
        }
    }

    const toDonate = () => {
        setDonated(true)
    }

    const returnBack = () => {
        setDonated(false)
    }

    return <div className="bg-dark" style={{height:"89.1vh"}}>
        <div className="pt-5">
        {!isDonated ?
            <div className="mx-auto w-75 rounded  mt-5 border">
                <h1 className="text-success text-center m-4">Donate For Us !</h1>
                <h1 className="text-center text-primary fw-bold">{reduxCounter} $</h1>
                <div className="w-50 mx-auto m-3 d-flex justify-content-between">
                    <Increment increment={onIncrement} count="number" />
                    <Decrement decrement={onDecrement} count="number" />
                </div>
                <button className="btn btn-success d-block mx-auto w-25 p-3 mb-5" onClick={toDonate}>Donate</button>
            </div> : (
                <div className="mx-auto w-75 rounded m-5 border">
                    <h1 className="text-center text-primary m-5"> Thansk For Your Donation</h1>
                    <button className="btn btn-success btn-lg py-2 px-4 d-block mx-auto my-4" onClick={returnBack}>Return</button>
                </div>
            )}
        </div>
    </div>
}

export default Container