import { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import axios from "axios";

export interface IIPostProps {
    id:number | string
    title: string;
    body: string;
    number:number
}

type PostContextProviderProps = {
    children: ReactNode
}

type PostBlogContextType = {
    Apidata: IIPostProps[],
    GetData: () => void
}

export const BlogContext = createContext({} as PostBlogContextType)

export const UseBlogContext = () => {
    return useContext(BlogContext)
}
export const BlogPostContextProvider = ({ children }: PostContextProviderProps) => {
    const [Apidata, setData] = useState<IIPostProps[]>([]);
    async function GetData() {
        try {
            let res = await axios.get(
                'https://api.github.com/repos/mauricioDallOnder/GithHubBlog/issues'
            );
            setData(res.data);
        } catch (error) {
            console.error(error);
        }
    }
  
   
    return(
        <BlogContext.Provider value={{GetData,Apidata}}>
        {children}
    </BlogContext.Provider>
    )
}
