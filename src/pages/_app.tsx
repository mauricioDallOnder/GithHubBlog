import { BlogPostContextProvider } from '@/Context/Context'
import { GlobalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pagesStyles/app'
import type { AppProps } from 'next/app'
import img from '../assets/Cover.png'
import Image from 'next/image'
GlobalStyles()
export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <Container>
      <Header>
        <Image src={img} alt=''/>
      </Header>
    <BlogPostContextProvider>
      <Component {...pageProps} />
    </BlogPostContextProvider>
    </Container>
  )
}
