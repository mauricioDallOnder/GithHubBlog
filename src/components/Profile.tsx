import { Card, Stack, CardBody, Heading, CardFooter,Image,Text } from "@chakra-ui/react"

export const Profile=()=>{
    return(
        <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                boxShadow="0px 2px 28px rgba(0, 0, 0, 0.2)"
                backgroundColor='#0B1B2B'
                w='50%'
                top='-80px'
                borderRadius='10px'
            >
                <Image objectFit='cover'
                    mt='32px'
                    mb='32px'
                    ml='40px'
                    w='148px' h='148px'
                    src='https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/avatar.png?alt=media&token=09637439-6860-415d-8a0f-7c839da7683f'
                    
                />

                <Stack>
                    <CardBody display='flex' flexDir='column' justifyContent='space-between' alignContent='center' >
                        <Heading size='md' color='#E7EDF4' fontSize='1rem' fontWeight={700}>Cameron Williamson</Heading>

                        <Text py='2' color='#AFC2D4' fontSize='1rem' fontWeight={400}>
                            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                        </Text>
                    </CardBody>
                    <CardFooter>
                        <Image objectFit='cover' src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/info.png?alt=media&token=5fadabaf-2a31-405b-8079-02f09062c208" />
                    </CardFooter>
                </Stack>
            </Card>
    )
}