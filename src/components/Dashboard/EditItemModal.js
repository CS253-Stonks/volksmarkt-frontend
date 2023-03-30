import * as React from 'react' 
import Button from '@mui/material/Button' 
import TextField from '@mui/material/TextField' 
import Dialog from '@mui/material/Dialog' 
import DialogActions from '@mui/material/DialogActions' 
import DialogContent from '@mui/material/DialogContent' 
import DialogContentText from '@mui/material/DialogContentText' 
import DialogTitle from '@mui/material/DialogTitle' 
import { useState } from 'react' 
import axios from 'axios' 


export default function FormDialog1(props) {

    const product = props.item 
    const [open, setOpen] = useState(false) 
    
    const [productName, setProductName] = useState('') 
    const [description, setDescription] = useState('') 
    const [price, setPrice] = useState('') 
    const [quantity, setQuantity] = useState('') 

    const handleClickOpen = () => {
        console.log(product)    
        setOpen(true) 
    } 

    const handleClose = () => {
        setOpen(false) 
    } 

    const submitHandler = (e) => {
        e.preventDefault() 
        const Product={
            id: product.id,
            name: productName,
            description: description,
            price: price,
            quantity: quantity,
            store: 1
        }
        axios.put(`http://127.0.0.1:8000/Products/${Product.id}/`, Product)
    }

    const editItem = (e) => {
        submitHandler(e)
        handleClose() 
    } 

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
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        margin="dense"
                        id="productName"
                        label="Product Name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        margin="dense"
                        id="price"
                        label="Price"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        margin="dense"
                        id="quantity"
                        label="Quantity"
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
    ) 
}