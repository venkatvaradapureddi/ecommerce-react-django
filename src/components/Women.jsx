import React from 'react'
import { useState,useEffect } from 'react'
import { Card,CardMedia,CardContent,Typography,Grid,Box} from '@mui/material'
import { Link } from 'react-router-dom'

function Women() {
    const [products,setProducts]=useState([])
    const [loading,setLoading] = useState(false)
    
    useEffect(()=>{
        setLoading(true)
        fetch("http://venkat123.pythonanywhere.com/api/products/?category=women's clothing")
        .then(res => res.json())
        .then(data=>{setProducts(data);
            setLoading(false)})
    },[])
  return (
    <>
    <h1 style={{textAlign:'center'}}>Women's Wear</h1>
    {loading?(<h3 style={{textAlign:'center'}}>Loading..</h3>):(
    <Box sx={{padding:2,marginLeft:8,'@media (max-width: 768px)': {
      margin:'2%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',
      padding:10,}}}>
        <Grid container spacing={3}>
            {products.map((item)=>(
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                    <Link to={`/single/${item.id}`}><Card sx={{maxWidth:345,height:'100%',margin:'auto',borderRadius:2,boxShadow:3,
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.03)',
                          boxShadow: 6,
                        },
                    }}>
                        <CardMedia component='img' height='200' image={item.image} sx={{
                            objectFit:'contain',padding: 2,display: 'block', margin: '0 auto',
                        }}/>
                        <CardContent>
                            <Typography variant='subtitle1'>{item.title}</Typography>
                            <Typography color='primary'>₹{item.price}</Typography>
                        </CardContent>
                    </Card></Link>

                </Grid>

            ))}


        </Grid>
    </Box>
    )}
    </>
  )
}

export default Women