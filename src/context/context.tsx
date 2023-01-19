import { createContext, ReactNode, useContext, useState } from 'react'
import axios from "axios";
import { api } from '../lib/axios';
export interface IIPostProps {
    id:any
    title: string;
    body: string;
}

type PostContextProviderProps = {
    children: ReactNode
}

type PostBlogContextType = {
    Apidata: IIPostProps[],
    GetData: () => void,
    numberTotalPosts: number,
    QueryData: (query: number) => void
}

export const BlogContext = createContext({} as PostBlogContextType)

export const UseBlogContext = () => {
    return useContext(BlogContext)
}

export const BlogPostContextProvider = ({ children }: PostContextProviderProps) => {
    const [Apidata, setData] = useState<IIPostProps[]>([]);
    const [numberTotalPosts, setnumberTotalPosts] = useState(0)
    async function GetData() {
        let res = await axios.get(
            "https://api.github.com/repos/mauricioDallOnder/GithHubBlog/issues"
        );

        let responseData = res.data;
        setnumberTotalPosts(responseData.length)
        setData(responseData);
    }
    async function QueryData(query: number) {
        const response = await api.get(`/issues/${query}`
        )
        let responseData = response.data;
        setData(responseData)
    }
    return (
        <BlogContext.Provider
            value={{
                Apidata,
                GetData,
                numberTotalPosts,
                QueryData
            }}
        >
            {children}
        </BlogContext.Provider>
    )
}