import { styled } from '..';

export const Container=styled('div',{
    display:'flex',
    flexDirection:'collumn',
    minHeight:'100vh'
    
})

export const Header=styled('header',{
    width:'100%',
    margin:'0 auto',
    img:{
        objectFit:'cover',
        marginTop:'0px',
        top:0,
        left:0,
        width: '100%'
    }
})