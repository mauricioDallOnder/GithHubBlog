
import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import { PostInfo } from './pages/PostInfo';
import { RouterPages } from './routes/Routes';
interface IIPostProps {
  title: string
  body: string
}
function App() {

  return (
    <>
      <RouterPages />
    </>
  )

}

export default App
