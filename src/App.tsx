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
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.22),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(45,212,191,0.2),_transparent_30%),linear-gradient(180deg,_rgba(8,15,36,0.98),_rgba(3,7,18,1))] text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <UpdateDialog show={isShowUpdateDialog} toggleDialog={(val) => setIsShowUpdateDialog(typeof val === 'boolean' ? val : !isShowUpdateDialog)} />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/55 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <Header
            toggleDialog={() => setIsShowUpdateDialog(pr => !pr)}
            setValue={setOperation}
            value={operation}
          />

          <div className="px-4 pb-6 sm:px-6 sm:pb-8 lg:px-8 lg:pb-10">
            {operation === Operation.ModExponentiation && <ModExponentiation />}
            {operation === Operation.ModInverse && <ModInverse />}
            {operation === Operation.GCD && <GCD />}
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
