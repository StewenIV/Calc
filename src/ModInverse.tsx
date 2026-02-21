import { useEffect, useState } from "react"
import { Input } from "./shared/input"


export const ModInverse = () => {
    const [firstDigit, setFirstDigit] = useState<number | "">("")
    const secondDigit = -1;
    const [modulo, setModulo] = useState<number | "">("")
    const [result, setResult] = useState<number | "">("")

    useEffect(() => {
        calculate()
    }, [firstDigit, modulo])

    const isValuesValid = () => {
        return typeof firstDigit === "number" && typeof modulo === "number"
    } 
    const calculate = () => {
        if(!isValuesValid()) return;

        let a : number  = firstDigit as number;
        const b = modulo as number;
        a %= b;
        for (let x = 1; x < b; x++) {
            if ((a*x)%b == 1) {
                setResult(x)
                return;
            }
        }
    }


    return (
        <section className="p-4 flex flex-col items-center gap-4">
            <div className="flex items-center content-center">
                <div className="flex content-center">
                    <Input 
                        defaultValue={firstDigit}
                        onChange={(ev) => setFirstDigit(parseInt(ev.target.value) || "")}
                        placeholder="17" className="px-2 w-32 h-18 text-center text-5xl"/>
                    <Input 
                        defaultValue={secondDigit}
                        placeholder="21" className="ml-1 text-xl w-12 h-10 text-center p-0" />
                </div>
                <span className="text-2xl ml-2 mr-4">%</span>
                <Input 
                    defaultValue={modulo}
                    onChange={(ev) => setModulo(parseInt(ev.target.value) || "")} 
                    placeholder="13" className="px-2 w-32 h-18 text-center text-5xl" />
            </div>
            <div className="font-bold text-6xl">{result}</div>
        </section>
    )
}