import { useEffect, useState } from "react"
import { Input } from "../../shared/input"
import { getDividers } from "./utils/get-dividers"


interface OperationWrapperProps {
    firstDigit: number | ""
    secondDigit: number | ""
    modulo: number | ""
    setFirstDigit: (value: number | "") => void
    setSecondDigit: (value: number | "") => void
    setModulo: (value: number | "") => void
    result: number | null | ""
    setResult: (value: number | "") => void
    calculate: (firstDigit: number | "", secondDigit: number | "", modulo: number | "") => number | null | ""
}

export const OperationWrapper = (props: OperationWrapperProps) => {
    const [dividers, setDividers] = useState<number[] | null>(null);
    const { firstDigit, secondDigit, modulo, setFirstDigit, setSecondDigit, setModulo, result, setResult, calculate } = props;

    useEffect(() => {
        setResult(calculate(firstDigit, secondDigit, modulo) || "")
    }, [firstDigit, secondDigit, modulo])

    useEffect(() => {
        setDividers(result ? getDividers(result) : null);
    }, [result])

    const getDividersHandler = () => {
        setDividers(getDividers(result));
    }

    return (
        <section className="p-4 flex flex-col items-center gap-4">
            <div className="flex items-center content-center">
                <div className="flex content-center">
                    <Input 
                        defaultValue={firstDigit}
                        onFocus={(ev) => ev.target.select()}
                        onChange={(ev) => setFirstDigit(parseInt(ev.target.value) || "")}
                        placeholder="17" className="px-2 w-32 h-18 text-center text-5xl placeholder:text-gray-300"/>
                    <Input 
                        defaultValue={secondDigit}
                        onFocus={(ev) => ev.target.select()}
                        onChange={(ev) => setSecondDigit(parseInt(ev.target.value) || "")}
                        placeholder="21" className="ml-1 text-xl w-12 h-10 text-center p-0" />
                </div>
                <span className="text-2xl ml-2 mr-4">%</span>
                <Input 
                    defaultValue={modulo}
                    onFocus={(ev) => ev.target.select()}
                    onChange={(ev) => setModulo(parseInt(ev.target.value) || "")} 
                    placeholder="13" className="px-2 w-32 h-18 text-center text-5xl placeholder:text-gray-300" />
            </div>
            <div onClick={getDividersHandler} className="font-bold text-6xl">{result}</div>
            {dividers && <div className="text-sm">{dividers.length === 1 ? "Это простое число" : dividers.join(" × ")}</div>}
        </section>
    )
}