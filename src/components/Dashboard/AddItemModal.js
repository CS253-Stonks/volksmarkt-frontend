import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {

    const {itemList, setItemList} = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addItem = () => {
        handleClose();
        let newList = itemList.slice();
        newList.push(
            {
                "productName": "X",
                "description": "This is near GH",
                "price": 0,
                "id": 0,
            }
        )
        setItemList(newList);
        console.log(itemList);
    };

    return (
        <div>
            <Button 
                variant="outlined" 
                onClick={handleClickOpen}
                sx = {{ 
                    marginX: 'auto',
                    marginBottom: 3 
                }}
            >
                ADD AN ITEM
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add an Item</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter item details:
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Product Name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="desc"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="price"
                        label="Price"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>CANCEL</Button>
                    <Button onClick={addItem}>ADD</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}