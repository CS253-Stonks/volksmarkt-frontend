import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function GroupedButton(props) {

    const {quantity, setQuantity} = props;

    const handleIncrement = () => {
        setQuantity(quantity+1);
    };
    
    const handleDecrement = () => {
        if(quantity >= 1){
            setQuantity(quantity-1);
        }
    };

    return (
        <ButtonGroup size="small" aria-label="outlined primary button group" variant="outlined">
            <Button onClick={handleDecrement}>-</Button>
            <Button>{quantity}</Button>
            <Button onClick={handleIncrement}>+</Button>
        </ButtonGroup>
    );
    
}
