import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";

export default function GroupedButtons(props) {

    const {removeFromList, quantity, price, setTotalPrice} = props;

    const [state, setState] = useState({'counter':quantity})

    const handleIncrement = () => {
        setState(state => ({ counter: state.counter + 1 }));
        setTotalPrice(price * (state.counter+1));
    };
    
    const handleDecrement = () => {
        setState(state => ({ counter: state.counter - 1 }));
        if(state.counter === 1){
            removeFromList();
        }
        setTotalPrice(price * (state.counter-1));
    };

    return (
        <ButtonGroup size="small" aria-label="small outlined button group">
            <Button onClick={handleDecrement}>-</Button>
            <Button disabled>{state.counter}</Button>
            <Button onClick={handleIncrement}>+</Button>
        </ButtonGroup>
    );
    
}
