import { IIPostProps, UseBlogContext } from '@/Context/Context'
import { ChangeEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { styled } from '@/styles'
import { ProfileCard } from '@/styles/pagesStyles/profile'
import mulher from '../assets/mulher.png'
import info from '../assets/info.png'
import Image from 'next/image'
import { BoxInput } from '@/styles/pagesStyles/inputBoxStyle'

const Card = styled('button', {
  display: 'flex',
  flexDirection: 'collumn',
  alignItems: 'left',
  alignContent: 'left',
  height: '520px',
  width: '416px',
  flexBasis: '48%',
  margin: '0 auto',
  backgroundColor: '#112131',
  borderRadius: '10px',
  cursor: 'pointer',
  border: 'none',
  marginBottom: '16px',
  

  h2: {
    color: '$baseTitle',
    fontWeight:700,
    fontSize:'20px',
    textDecoration:'none',
    marginTop:32,
    textAlign:'left',
    paddingLeft:32
  },
  h3:{
    color: '$baseText',
    fontWeight:400,
    fontSize:'16px',
    textDecoration:'none',
    marginTop:52,
    paddingLeft:32,
    paddingRight:32,
    height:'fit-content',
    textAlign:'justify',
  },
  a:{
    textDecoration:'none'
  },
})
const BoxCard = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
  alignContent: 'center',
  width: 864,
  justifyContent: 'space-around',
  margin: '0 auto',
  flexWrap: 'wrap',

})


export default function Home() {
  const { Apidata, GetData } = UseBlogContext()
  const [search, setNewSearch] = useState("");
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewSearch(e.target.value);

  };

  useEffect(() => {
    GetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const Apidatafiltered = Apidata.filter((item) => (item.body.toLowerCase().includes(search.toLowerCase())) || (item.title.toLowerCase().includes(search.toLowerCase())))
  const filtered = !search ? Apidata : Apidatafiltered
  return (
    <>
      <main>
        <ProfileCard>
          <div>
            <Image src={mulher} alt='' />
          </div>
          <div>
            <h1>Cameron Williamson
            </h1>
            <span>Tristique volutpat pulvinar vel massa, pellentesque egestas.
              Eu viverra massa quam dignissim aenean malesuada suscipit.
              Nunc, volutpat pulvinar vel mass.</span>
            <Image src={info} alt='' />
          </div>
        </ProfileCard>
        <BoxInput>
          <section>
            <h3>Publicações</h3>
            <h4>6 publicações</h4>
          </section>
          <input placeholder='Buscar Conteudo' value={search} onChange={handleSearchChange}/>
        </BoxInput>
        <BoxCard>
          {filtered.map((post: IIPostProps) => (
            <>
              <Card>
                <Link href={`/blog/${post.id}`}>
                  <h2>{post.title}</h2>
                  <h3>{post.body}</h3>
                </Link>
              </Card>

            </>
          ))}
        </BoxCard>
      </main>
    </>
  )
}
