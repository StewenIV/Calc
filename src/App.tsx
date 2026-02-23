import { useState } from 'react'
import { Header } from './Header'
import { Operation } from './types/Operation'
import { ModInverse } from './components/mod-inverse/ModInverse'
import { ModExponentiation } from './components/mod-exponentiation/ModExponentiation'

function App() {
  const [operation, setOperation] = useState<Operation>(Operation.ModExponentiation)
  
  return (
    <main>
        <Header
          setValue={setOperation} 
          value={operation}/>
        {operation === Operation.ModExponentiation && <ModExponentiation />}
        {operation === Operation.ModInverse && <ModInverse />}
    </main>
  )
}

export default App
