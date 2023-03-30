import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
// eslint-disable-next-line no-unused-vars
import useState from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #FFF',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};


export default function RatingModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [value, setValue] = React.useState(props.rating);
    const [hover, setHover] = React.useState(props.rating);

    return (
        <div>
            <Button onClick={handleOpen} variant="contained" sx={{
                height: '30px',
                marginRight: '30px',
            }}>RATE THE PRODUCT</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >

                <Box 
                    sx={{
                        ...style,
                        width: 400,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Rating
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                        onClick={(event) => {
                            setValue(hover);
                            props.setRating(hover);
                            setOpen(false);
                        }}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    {value !== null && (
                        <Box sx={{ ml: 2 }}>{hover !== -1 ? hover : value}</Box>
                    )}
                </Box>
            </Modal>
        </div>
    );
}