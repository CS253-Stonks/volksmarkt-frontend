import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import GroupedButtons from './GroupedButtons';
import Button from '@mui/material/Button';

export default function CartCard() {
    return (
        <Card sx={{ 
            display: 'flex',
            height: '165px', 
            width: '40%',
            flexDirection: 'row',
            borderRadius: 0, 
            boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.25)',
            margin: '20px',
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ 
                    flex: '1 0 auto', 
                    marginX: '30px',
                }}>
                    <Typography component="div" variant="h5">
                        Product Name
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Description
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" component="div">
                        Quantity:
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" component="div">
                        Total Price:
                    </Typography>
                    <div>
                        <GroupedButtons />
                        <Button variant="outlined" sx={{
                            marginLeft: '20px',
                            height: '30px'
                        }}>
                            REMOVE ITEM
                        </Button>
                    </div>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ 
                    height: '100%',
                    width: '30%',
                    alignSelf: 'flex-end',
                    marginLeft: 'auto',
                }}
                image="https://img.atcoder.jp/assets/atcoder.png"
                alt="Live from space album cover"
            />
        </Card>
    );
}
