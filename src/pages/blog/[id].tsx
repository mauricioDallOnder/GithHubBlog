import { IIPostProps, UseBlogContext } from "@/Context/Context";
import { ProfileCard } from "@/styles/pagesStyles/profile";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from 'react';
import Image from 'next/image'
import info from '../../assets/info.png'
import { BoxPost } from "@/styles/pagesStyles/BoxBodyPost";
export default function BlogPage() {
    const { GetData, Apidata } = UseBlogContext()
    const router = useRouter()
    const { id } = router.query
    useEffect(() => {
        GetData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    let numero = Number(id)
    const [Newarray, setNewArray] = useState<IIPostProps[]>([])

    useEffect(() => {
        Apidata.forEach((item, index) => {
            if (Apidata[index].id === numero) {
                setNewArray([...Newarray, item])
            } else {
                console.log(false)
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <main>
            {Newarray.map((item, index) => {
                return (
                    <>
                        <ProfileCard key={index}>
                            <div>
                                <h1>
                                    Titulo da Publicação: {item.title}
                                    <br /><br />
                                </h1>
                                <Image src={info} alt='' />
                            </div>
                        </ProfileCard>
                        <BoxPost>
                            <span>{item.body}</span>
                        </BoxPost>
                    </>
                )

            })}


        </main>


    )
}