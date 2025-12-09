import { useState } from 'react'

import HelpCenter from './helpcenter/Helpcenter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HelpCenter/>
    </>
  )
}

export default App
