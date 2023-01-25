import {globalCss} from "."

export const GlobalStyles=globalCss({
    '*':{
        margin: 0,
        padding: 0,
       display:"flex",
       flexDirection:'column',
       
    },
    body:{
        backgroundColor:'#071422',
        '-webkit-font-smoothing': 'antialiased',
        
        width: '100%',
        height: '100%'
       
        
        
    },
    'body, input, textarea, button':{
        fontWeight:400,
        lineHeight:'160%',

    },
    
})