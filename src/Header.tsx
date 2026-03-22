import { Info, Moon, Sun } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "./shared/toggle-group"
import { Operation } from "./types/Operation"
import { useTheme } from "./components/theme-provider/theme-provider"


export const Header = ({value, setValue, toggleDialog} : {value: Operation, setValue: (value: Operation) => void, toggleDialog: () => void}) => {
    const {setTheme, theme} = useTheme()

    return (
        <header className="flex flex-col gap-4 border-b border-white/10 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex items-center justify-between gap-4 lg:justify-start">
                <button
                    type="button"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white/10"
                    aria-label="Переключить тему"
                >
                    {theme === "dark" ?
                    <Sun size={20} data-testid="sun" className="transition-transform group-hover:rotate-12" /> :
                    <Moon size={20} data-testid="moon" className="transition-transform group-hover:-rotate-12" />}
                </button>

                <div className="lg:ml-2">
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">CryptoCalc</p>
                    <h1 className="text-xl font-semibold text-white sm:text-2xl">Modular Calculator</h1>
                    <p className="text-sm text-slate-300/80">Выбирайте операцию, вводите выражения и смотрите результат в аккуратной панели.</p>
                </div>
            </div>

            <div className="flex items-center justify-between gap-3 lg:justify-end">
                <ToggleGroup onValueChange={v => v && setValue(v as Operation)} type="single" variant="outline" value={value} className="rounded-2xl border border-white/10 bg-white/5 p-1 shadow-lg shadow-black/10 backdrop-blur">
                    <ToggleGroupItem value={Operation.ModExponentiation} aria-label="module Exponentiation" className="rounded-xl border-0 bg-transparent px-4 text-sm text-slate-200 data-[state=on]:bg-cyan-400 data-[state=on]:text-slate-950">
                        <span>x <sup>y</sup> % z</span>
                    </ToggleGroupItem>
                    <ToggleGroupItem value={Operation.ModInverse} aria-label="module Inverse" className="rounded-xl border-0 bg-transparent px-4 text-sm text-slate-200 data-[state=on]:bg-cyan-400 data-[state=on]:text-slate-950">
                        <span>x <sup>-1</sup> % z</span>
                    </ToggleGroupItem>
                    <ToggleGroupItem value={Operation.GCD} aria-label="GCD" className="rounded-xl border-0 bg-transparent px-4 text-sm text-slate-200 data-[state=on]:bg-cyan-400 data-[state=on]:text-slate-950">
                        <span>НОД(x,y)</span>
                    </ToggleGroupItem>
                </ToggleGroup>

                <button
                    type="button"
                    onClick={toggleDialog}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white/10"
                    aria-label="Открыть информацию"
                >
                    <Info size={20} />
                </button>
            </div>
        </header>
    )
}