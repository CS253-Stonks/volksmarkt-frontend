import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

class GroupedButtons extends React.Component {
    state = { counter: 0 };

    handleIncrement = () => {
        this.setState(state => ({ counter: state.counter + 1 }));
    };

    handleDecrement = () => {
        this.setState(state => ({ counter: ((state.counter>0) ? state.counter - 1 : 0) }));
    };
    render() {
        return (
            <ButtonGroup size="small" aria-label="small outlined button group">
                <Button onClick={this.handleDecrement}>-</Button>
                <Button disabled>{this.state.counter}</Button>
                <Button onClick={this.handleIncrement}>+</Button>
            </ButtonGroup>
        );
    }
}

export default GroupedButtons;
