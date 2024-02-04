import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import { Delete} from '@mui/icons-material';
import Alert from '@mui/material/Alert';
import SearchBox from './assets/components/SearchBox';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SearchBox/>
    </>
  )
}

export default App
