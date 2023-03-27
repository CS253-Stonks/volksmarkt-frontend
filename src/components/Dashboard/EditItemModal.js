import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog1(props) {

    const {itemList, setItemList, id} = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const editItem = () => {
        handleClose();
        let newList = itemList.slice();
        // newList.push(
        //     {
        //         "productName": "X",
        //         "description": "This is near GH",
        //         "price": 0,
        //         "id": 0,
        //     }
        // )

        setItemList(newList.map((item) => {
            if(id === item.id){
                
            }
            return newList
        }))

        setItemList(newList);
        console.log(itemList);
    };

    return (
        <div>
            <Button 
                variant="outlined" 
                onClick={handleClickOpen}
                sx = {{ 
                    marginLeft: '5px',
                    height: '30px'
                }}
            >
                EDIT ITEM
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Item</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Edit item details:
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
                    <Button onClick={editItem}>SAVE</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}