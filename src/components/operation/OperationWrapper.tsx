import { useEffect, useMemo, useState, type ChangeEvent } from "react"
import { Input } from "../../shared/input"
import { getDividers } from "./utils/get-dividers"
import { Textarea } from "@/shared/textarea"


interface OperationWrapperProps {
    firstDigit: number | string
    secondDigit: number | string
    modulo: number | string
    setFirstDigit: (value: number | string) => void
    setSecondDigit: (value: number | string) => void
    setModulo: (value: number | string) => void
    result: number | null | string
    setResult: (value: number | string) => void
    calculate: (firstDigit: number | string, secondDigit: number | string, modulo: number | string) => number | null | string,

    showDividers?: boolean
    showPower?: boolean
    separator?: string
}

export const OperationWrapper = (props: OperationWrapperProps) => {
    const [dividers, setDividers] = useState<number[] | null>(null);
    const { firstDigit, secondDigit, modulo, setFirstDigit, setSecondDigit, setModulo, result, setResult, calculate, showDividers = true, showPower = true, separator = " % " } = props;
    const textSizes = useMemo(() => ({
        normal: "text-5xl",
        small: "text-4xl px-1",
        smaller: "text-3xl px-1",
        very_small: "text-2xl px-1",
        extra_small: "text-xl px-1"
    }), [])

    useEffect(() => {
        setResult(calculate(firstDigit, secondDigit, modulo) || "")
    }, [firstDigit, secondDigit, modulo])

    useEffect(() => {
        setDividers(result ? getDividers(result) : null);
    }, [result])

    const getTextSize = (value: string) => {
        if(value.length <= 4)
            return textSizes.normal;
        else if(value.length <= 6)
            return textSizes.small;
        else if(value.length <= 8)
            return textSizes.smaller;
        else if(value.length <= 10)
            return textSizes.very_small;
    }

    const getDividersHandler = () => {
        setDividers(getDividers(result));
    }

    const handleChangeValue = (value : ChangeEvent<HTMLInputElement>, callback: (value: number | string) => void) => {
        const intValue = (value.target.value.replace(/[^\d-]/g, ''));
        callback(intValue);
    }

    return (
        <section className="p-4 flex flex-col items-center gap-4">
            <div className="flex items-center content-center">
                <div className="flex content-center">
                    <Textarea 
                        value={firstDigit}
                        onFocus={(ev) => ev.target.select()}
                        onChange={(ev) => handleChangeValue(ev, setFirstDigit)}
                        placeholder="17" className={`px-2 w-32 h-18 text-center ${getTextSize(firstDigit.toString())} placeholder:text-gray-300/50`}/>
                    {showPower && <Input 
                        value={secondDigit}
                        onFocus={(ev) => ev.target.select()}
                        onChange={(ev) => handleChangeValue(ev, setSecondDigit)}
                        placeholder="1" className="ml-1 text-xl w-12 h-10 text-center p-0 placeholder:text-gray-300/50" />
                    }
                </div>
                <span className="text-2xl ml-2 mr-4">{separator}</span>
                <Textarea 
                    value={modulo}
                    onFocus={(ev) => ev.target.select()}
                    onChange={(ev) => handleChangeValue(ev, setModulo)} 
                    placeholder="13" className={`px-2 w-32 h-18 text-center ${getTextSize(modulo.toString())} placeholder:text-gray-300/50`} />
            </div>
            <div onClick={getDividersHandler} className="font-bold text-6xl" data-testid="result">{result}</div>
            {dividers && showDividers && <div className="text-sm">{dividers.length === 1 ? "Это простое число" : dividers.join(" × ")}</div>}
        </section>
    )
}