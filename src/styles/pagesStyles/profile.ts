import { url } from 'inspector';
import { styled } from '..';

export const ProfileCard=styled('div',{
    display: 'flex',
    flexDirection: 'row',
    alignItems:'left',
    alignContent:'center',
    width:'50rem',
    height:212,
    top:-100,
    left:'calc(50% - 864px/2);',
    backgroundColor:'$baseProfile',
    boxShadow:'0px 2px 28px rgba(0, 0, 0, 0.2);',
    borderRadius:10,
    position:'relative',
    overflowX:'hidden',
    div:{
        display:'flex',
        marginTop:32,
        marginBottom:32,
        width:148,
        heigth:148,
       borderRadius:8,
       marginLeft:40,

       '@responsivo1':{
        display:'flex',
        width:'max-content',
        textAlign:'center',
        overflowX:'hidden',
        alignContent:'center',
        alignItems:'center',
        marginLeft: 'auto',
        paddingLeft:'3.5rem',
        paddingRight:'3.5rem',

        img:{
            display:'none'
        }
     }
    },
    h1:{
        display:'flex',
        flexDirection:'row',
        alignContent:'center',
        width:'450px',
        marginRight:32,
        flexWrap:'wrap',
        fontStyle:'normal',
        fontWeight:'700',
        fontSize:24,
        color:'$baseTitle',
        marginBottom:24,
    },
    span:{
        display:'flex',
        flexDirection:'row',
        alignContent:'center',
        width:'450px',
        marginRight:32,
        flexWrap:'wrap',
        fontStyle:'normal',
        fontWeight:'400',
        fontSize:16,
        color:'$baseText',
        marginBottom:24,
    },
   
    '@responsivo1':{
        display:'flex',
        width:'max-content',
        textAlign:'center',
        overflowX:'hidden',
        alignContent:'center',
        alignItems:'center',
        marginLeft: 'auto'
     }
})