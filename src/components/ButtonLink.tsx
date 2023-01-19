import { Link } from "react-router-dom";
import { ReactNode } from 'react';
import { Box, Button, Image } from '@chakra-ui/react';
type IIProps={
    id:number
    title:string
}
export const ButtonLink=({id,title}:IIProps)=> {
  return (
    <Box display='flex'
    alignItems='center'
    justifyContent='center'
    width='100%'
    py='auto'
    bgPosition='center'
    bgRepeat='no-repeat'
    mb={20}>
    <Button colorScheme='purple' display='flex' alignItems='center'
    justifyContent='center'>
    <Link to={`/post/${id}`}>Acesse o Post Completo</Link>
    </Button>
    </Box>
  );
}