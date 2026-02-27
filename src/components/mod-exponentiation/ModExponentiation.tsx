import { useEffect, useState } from "react"
import { Input } from "../../shared/input"
import { calculate } from "./utils/calculate"


export const ModExponentiation = () => {
    const [firstDigit, setFirstDigit] = useState<number | "">("")
    const [secondDigit, setSecondDigit] = useState<number | "">("")
    const [modulo, setModulo] = useState<number | "">("")
    const [result, setResult] = useState<number | "">("")

    useEffect(() => {
        setResult(calculate(firstDigit, secondDigit, modulo) || "")
    }, [firstDigit, secondDigit, modulo])


    return (
        <section className="p-4 flex flex-col items-center gap-4">
            <div className="flex items-center content-center">
                <div className="flex content-center">
                    <Input
                        onChange={(ev) => setFirstDigit(parseInt(ev.target.value) || "")}
                        onFocus={(ev) => ev.target.select()}
                        placeholder="17" 
                        defaultValue={firstDigit} 
                        className="px-2 w-32 h-18 text-center text-5xl placeholder:text-gray-300"/>

                    <Input
                        onChange={(ev) => setSecondDigit(parseInt(ev.target.value) || "")}
                        onFocus={(ev) => ev.target.select()}                        
                        placeholder="21" 
                        defaultValue={secondDigit} 
                        className="ml-1 text-xl w-12 h-10 text-center p-0 placeholder:text-gray-300" />
                </div>
                <span className="text-2xl ml-2 mr-4">%</span>
                <Input
                    onChange={(ev) => setModulo(parseInt(ev.target.value) || "")} 
                    onFocus={(ev) => ev.target.select()}                    
                    placeholder="13" 
                    defaultValue={modulo} 
                    className="px-2 w-32 h-18 text-center text-5xl placeholder:text-gray-300" />
            </div>
            <div className="font-bold text-6xl">{result}</div>
        </section>
    )
}