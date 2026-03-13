import { useState } from 'react'
import { Header } from './Header'
import { Operation } from './types/Operation'
import { ModExponentiation } from './components/operation/ui/ModExponentiation'
import { ModInverse } from './components/operation/ui/ModInverse'
import { GCD } from './components/operation/ui/GCD'
import { UpdateDialog } from './components/update-dialog/UpdateDialog'

function App() {
  const [operation, setOperation] = useState<Operation>(Operation.ModExponentiation)
  const [isShowUpdateDialog, setIsShowUpdateDialog] = useState(false);

  return (
    <main>
        <UpdateDialog show={isShowUpdateDialog} toggleDialog={(val) => setIsShowUpdateDialog(typeof val === 'boolean' ? val : !isShowUpdateDialog)} />
        <Header
          toggleDialog={() => setIsShowUpdateDialog(pr => !pr)}
          setValue={setOperation} 
          value={operation}/>
          
        {operation === Operation.ModExponentiation && <ModExponentiation />}
        {operation === Operation.ModInverse && <ModInverse />}
        {operation === Operation.GCD && <GCD />}
    </main>
  )
}

export default App
