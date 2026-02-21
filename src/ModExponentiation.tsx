import { useEffect, useState } from "react"
import { Input } from "./shared/input"


export const ModExponentiation = () => {
    const [firstDigit, setFirstDigit] = useState<number | "">("")
    const [secondDigit, setSecondDigit] = useState<number | "">("")
    const [modulo, setModulo] = useState<number | "">("")
    const [result, setResult] = useState<number | "">("")

    useEffect(() => {
        setResult(calculate())
    }, [firstDigit, secondDigit, modulo])

    const isValuesValid = () => {
        return typeof firstDigit === "number" && typeof secondDigit === "number" && typeof modulo === "number"
    } 

    // right-to-left binary method
    const calculate = () => { 
        if (!isValuesValid()) return ""

        let result = 1
        let base = (firstDigit as number) % (modulo as number) 
        let exponent = secondDigit

        while ((exponent as number) > 0) {
            if ((exponent as number) % 2 == 1)
                result = (result * base) % (modulo as number)

            base = (base * base) % (modulo as number)
            exponent = Math.floor((exponent as number) / 2)
            
        }

        return result        
    }

    return (
        <section className="p-4 flex flex-col items-center gap-4">
            <div className="flex items-center content-center">
                <div className="flex content-center">
                    <Input
                        onChange={(ev) => setFirstDigit(parseInt(ev.target.value) || "")}
                        onFocus={(ev) => ev.target.select()}
                        placeholder="17" 
                        defaultValue={firstDigit} 
                        className="px-2 w-32 h-18 text-center text-5xl"/>

                    <Input
                        onChange={(ev) => setSecondDigit(parseInt(ev.target.value) || "")}
                        onFocus={(ev) => ev.target.select()}                        
                        placeholder="21" 
                        defaultValue={secondDigit} 
                        className="ml-1 text-xl w-12 h-10 text-center p-0" />
                </div>
                <span className="text-2xl ml-2 mr-4">%</span>
                <Input
                    onChange={(ev) => setModulo(parseInt(ev.target.value) || "")} 
                    onFocus={(ev) => ev.target.select()}                    
                    placeholder="13" 
                    defaultValue={modulo} 
                    className="px-2 w-32 h-18 text-center text-5xl" />
            </div>
            <div className="font-bold text-6xl">{result}</div>
        </section>
    )
}