import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, CardContent, CardMedia, Grid, Grid2, Typography } from '@mui/material';
const Home = () => {
   
    const [rows,setRows]=useState([]);
//connecting external Api
useEffect(()=>{
  axios.get('https://fakestoreapi.com/products').then((res)=>{

    setRows(res.data);
  })

},[])


  return (
    
    <Grid2 container spacing={2}>
    {rows.map((row) => (
      <Grid2 rows xs={12} sm={6} md={4} key={row.title}>
        <Card sx={{display:'flex',flexDirection:'column',height:'100%',width:400,marginTop:'6%', borderRadius:1, boxShadow:'0 0 10px rgba(0,0,0,0,0.2)','&:hover':{boxShadow:'0 0 10px rgba(0,0,0,0.5'}}}>
          <CardMedia 
             image={row.image}
             alt={row.title}
            sx={{height:250}}
            // image={row.image}  {/* External image URL */}
           
          />
          <CardContent sx={{flex:'10 auto'}}>
            <Typography gutterBottom variant="h5" component="div">
              {row.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             <b>Price:</b> {row.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
             <b>Rate:</b>   {row.rating.rate}
              
            </Typography>
          </CardContent>
        </Card>
      </Grid2>
    ))}
  </Grid2>
  
);
};


export default Home