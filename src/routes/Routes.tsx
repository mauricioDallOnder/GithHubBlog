import { Routes, Route } from "react-router-dom"
import { Blog } from "../pages/Blog"
import { PostInfo } from "../pages/PostInfo"

export const RouterPages = () => {
    return (
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:param" element={<PostInfo />} />
      </Routes>
    )
  }