import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";

export default function GroupedButtons(props) {

    const {removeFromList, quantity, price, setTotalPrice} = props;

    const [state, setState] = useState({'counter':quantity})

    const handleIncrement = () => {
        setState(state => ({ counter: state.counter + 1 }));
        if(setTotalPrice)    setTotalPrice(price * (state.counter+1));
    };
    
    const handleDecrement = () => {
        if(state.counter >= 1){
            setState(state => ({ counter: state.counter - 1 }));
        }
        if(state.counter === 1){
            removeFromList();
        }
        setTotalPrice(price * (state.counter-1));
    };

    return (
        <ButtonGroup size="small" aria-label="outlined primary button group" variant="outlined">
            <Button onClick={handleDecrement}>-</Button>
            <Button>{state.counter}</Button>
            <Button onClick={handleIncrement}>+</Button>
        </ButtonGroup>
    );
    
}
