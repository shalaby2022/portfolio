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

    return <>
        {!isDonated ?
            <div className="mx-auto w-75 rounded m-5 border">
                <h1 className="text-success text-center m-4">Donate For Us !</h1>
                <h1 className="text-center text-primary fw-bold">{reduxCounter} $</h1>
                <div className="w-50 mx-auto m-3 d-flex justify-content-between">
                    <Decrement decrement={onDecrement} count="number" />
                    <Increment increment={onIncrement} count="number" />
                </div>
                <button className="btn btn-success d-block mx-auto w-25 p-3 mb-5" onClick={toDonate}>Donate</button>
            </div> : (
                <div className="mx-auto w-75 rounded m-5 border">
                    <h1 className="text-center text-priamry m-5"> Thansk For Your Donation</h1>
                </div>

            )}
    </>
}

export default Container