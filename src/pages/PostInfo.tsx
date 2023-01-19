import { ArrowBackIcon, ExternalLinkIcon } from "@chakra-ui/icons"
import { Box, Button, Card, CardBody, CardFooter, Center, Flex, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { IIPostProps, UseBlogContext } from "../context/context"
import { useEffect, useState } from 'react';

export const PostInfo = () => {

    const { Apidata, GetData, QueryData, numberTotalPosts } = UseBlogContext()
    useEffect(() => {
        GetData()
    }, [])
    const { param } = useParams();
    console.log(param);
    let numero = Number(param)
    const [Newarray, setNewArray] = useState<IIPostProps[]>([])

    useEffect(() => {
        Apidata.forEach((item, index) => {
            if (Apidata[index].id === numero) {
                setNewArray([...Newarray, item])
                console.log(true)
            } else {
                console.log(false)
            }
        })
    }, [])


    return (
        <>
            <Center display="flex" flexDir="column" >
                <Heading>
                    <Image src='https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/Cover.png?alt=media&token=780fe995-6509-4872-86b5-cbc1e9732d72' />
                </Heading>
                {Newarray.map((item, index) => {
                    return (
                        <>
                            <Card
                                direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                boxShadow="0px 2px 28px rgba(0, 0, 0, 0.2)"
                                backgroundColor='#0B1B2B'
                                w='50%'
                                top='-80px'
                                borderRadius='10px'
                                key={index}
                            >
                                <Stack >
                                    <CardBody >
                                        <Heading color='#E7EDF4' fontSize='1rem' fontWeight={700} display='flex' justifyContent='space-between' minW='100%' w='auto' mb='20px' >

                                            <Flex gap='8px' as='button'>
                                                <ArrowBackIcon color='#3294F8' />
                                                <Text fontSize='12px' color='#3294F8'>{' '}VOLTAR</Text>
                                            </Flex>
                                            <Flex gap='8px' as='button'>
                                                <Text fontSize='12px' color='#3294F8'>{' '}VER NO GITHUB</Text>
                                                <ExternalLinkIcon color='#3294F8' />
                                            </Flex>

                                        </Heading>
                                        <Text color='#E7EDF4' as='h1' fontSize='24px' fontWeight='700'>{item.title}</Text>
                                    </CardBody>
                                    <CardFooter>
                                        <Image objectFit='cover' src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/info.png?alt=media&token=5fadabaf-2a31-405b-8079-02f09062c208" />
                                    </CardFooter>
                                </Stack>
                            </Card>
                            <Card display='flex' flexDirection='column' alignItems='center' p='40px 32px' gap='24px' direction={{ base: 'column', sm: 'row' }} backgroundColor='#071422' w='50%' mt='-79px' h='fit-content'>
                                <Text fontWeight={400} fontSize='16px' textAlign='justify' lineHeight='25.6px' color='#AFC2D4'>{item.body}</Text>
                            </Card>
                        </>
                    )

                })}

            </Center>

        </>
    )
}
