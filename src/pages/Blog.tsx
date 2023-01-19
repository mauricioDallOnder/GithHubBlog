import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Center,
    Flex,
    Heading,
    Image,
    Input,
    Stack,
    Text,
} from "@chakra-ui/react";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ButtonLink } from "../components/ButtonLink";
import { Profile } from "../components/Profile";
import { IIPostProps, UseBlogContext } from "../context/context";


export const Blog = () => {
    const { Apidata, GetData, QueryData,numberTotalPosts } = UseBlogContext()
    const [search, setNewSearch] = useState("");

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewSearch(e.target.value);
    };
    useEffect(() => {
        GetData();
    }, []);

    const Apidatafiltered = Apidata.filter(
        (item) =>
            item.body!.toLowerCase().includes(search.toLowerCase()) ||
            item.title!.toLowerCase().includes(search.toLowerCase())
    );
    const filtered = !search ? Apidata : Apidatafiltered;
    const list = filtered.map((item) => {
        return (
            <>
                <Card h="280px" direction={{ base: "column", sm: "row" }}  w="47%" backgroundColor='#112131' borderRadius='10px' >
                    <Stack>
                    <CardHeader>
                        <Heading color='#E7EDF4' fontSize='20px' fontWeight='700' display='flex' justifyContent='space-between'>{item.title}
                                <Text color='#7B96B2' fontSize='14px'>há 1 dia</Text>
                            </Heading>
                        </CardHeader>
                        <CardBody display='flex' flexDirection='column' overflow='hidden'>
                            <Text fontWeight='400' color='#AFC2D4' fontSize='16px' mb='20px'>{item.body}</Text>
                            <ButtonLink key={item.id} title={'Acesse o post completo'} id={item.id} />
                        </CardBody>
                    </Stack>
                </Card>
            </>
        )
    });
    return (
        <>
            <Center display="flex" flexDir="column">
                <Heading>
                    <Image src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/Cover.png?alt=media&token=780fe995-6509-4872-86b5-cbc1e9732d72" />
                </Heading>
                <Profile />
                <Flex justifyContent="space-between" w="40%" mb='12px'>
                    <Text color='#C4D4E3' fontSize='18px' fontWeight={700}>Publicações</Text>
                    <Text fontWeight={400} fontSize='14px' color='#7B96B2'> {`${numberTotalPosts} Publicações`}</Text>
                </Flex>
                <Input
                    placeholder="buscar conteudo"
                    w="40%"
                    type="text"
                    value={search}
                    onChange={handleSearchChange}
                    mb="48px"
                    color='#C4D4E3'
                />
            </Center>

            <Flex
                w="40%"
                position="relative"
                flexWrap="wrap"
                gap="32px"
                alignContent="center"
                alignItems="center"
                margin="auto"
                mb="260px"
            >
                {list}
            </Flex>

        </>
    );
};