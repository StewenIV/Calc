import { useEffect, useState, type ChangeEvent } from "react"
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
    calculate: (firstDigit: number | "", secondDigit: number | "", modulo: number | "") => number | null | "",

    showDividers?: boolean
    showPower?: boolean
    separator?: string
}

export const OperationWrapper = (props: OperationWrapperProps) => {
    const [dividers, setDividers] = useState<number[] | null>(null);
    const { firstDigit, secondDigit, modulo, setFirstDigit, setSecondDigit, setModulo, result, setResult, calculate, showDividers = true, showPower = true, separator = " % " } = props;

    useEffect(() => {
        setResult(calculate(firstDigit, secondDigit, modulo) || "")
    }, [firstDigit, secondDigit, modulo])

    useEffect(() => {
        setDividers(result ? getDividers(result) : null);
    }, [result])

    const getDividersHandler = () => {
        setDividers(getDividers(result));
    }

    const handleChangeValue = (value : ChangeEvent<HTMLInputElement>, callback: (value: number | "") => void) => {
        const intValue = parseInt(value.target.value.replace(/\D/g, ''));
        callback(isNaN(intValue) ? "" : intValue);
    }

    return (
        <section className="p-4 flex flex-col items-center gap-4">
            <div className="flex items-center content-center">
                <div className="flex content-center">
                    <Input 
                        value={firstDigit}
                        onFocus={(ev) => ev.target.select()}
                        onChange={(ev) => handleChangeValue(ev, setFirstDigit)}
                        placeholder="17" className="px-2 w-32 h-18 text-center text-5xl placeholder:text-gray-300/50"/>
                    {showPower && <Input 
                        value={secondDigit}
                        onFocus={(ev) => ev.target.select()}
                        onChange={(ev) => handleChangeValue(ev, setSecondDigit)}
                        placeholder="21" className="ml-1 text-xl w-12 h-10 text-center p-0 placeholder:text-gray-300/50" />
                    }
                </div>
                <span className="text-2xl ml-2 mr-4">{separator}</span>
                <Input 
                    value={modulo}
                    onFocus={(ev) => ev.target.select()}
                    onChange={(ev) => handleChangeValue(ev, setModulo)} 
                    placeholder="13" className="px-2 w-32 h-18 text-center text-5xl placeholder:text-gray-300/50" />
            </div>
            <div onClick={getDividersHandler} className="font-bold text-6xl">{result}</div>
            {dividers && showDividers && <div className="text-sm">{dividers.length === 1 ? "Это простое число" : dividers.join(" × ")}</div>}
        </section>
    )
}