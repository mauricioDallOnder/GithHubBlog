import { styled } from '..';

export const BoxInput=styled('div',{
    marginTop:113,
    display:'flex',
    alignItems:'center',
    alignContent:'center',
    margin:'0 auto',
    width:864,

    section:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        marginBottom:'15px',

        h3:{
            FontWeight:'700',
            FontSize:'18px',
            color:'$baseSubtitle',
        },

        h4:{
            FontWeight:'400',
            FontSize:'14px',
            color:'$baseSpan',
        },
        '@responsivo1':{
            display:'flex',
            flexDirection:'collumn',
            width:'fit-content',
            justifyContent:'space-around',
            textAlign:'left',
            overflowX:'hidden',
            alignContent:'flex-start',
            alignItems:'flex-start',
            paddingLeft:'3.5rem',
            paddingRight:'3.5rem',
            gap:'15rem'
         }

    },
    input:{
        padding:'12px 16px',
        gap:8,
        backgroundColor:'$BaseInput',
        border:'1px solid #1C2F41',
        borderRadius:'6px',
        color:'$baseLabel',
        width:864,
        marginBottom:48,

        '@responsivo1':{
            width:'80vw'
        }

    },
    '@responsivo1':{
        display:'flex',
        width:'max-content',
        textAlign:'center',
        overflowX:'hidden',
        alignContent:'center',
        alignItems:'center',
        marginLeft: 'auto'
    },
})