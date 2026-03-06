import { useEffect, useState } from "react"
import { calculate } from "../utils/mod-exponentiation"
import { OperationWrapper } from "../OperationWrapper"


export const ModExponentiation = () => {
    const [firstDigit, setFirstDigit] = useState<number | "">("")
    const [secondDigit, setSecondDigit] = useState<number | "">("")
    const [modulo, setModulo] = useState<number | "">("")
    const [result, setResult] = useState<number | "">("")

    useEffect(() => {
        setResult(calculate(firstDigit, secondDigit || 1, modulo) || "")
    }, [firstDigit, secondDigit, modulo])

    return (
        <OperationWrapper 
            firstDigit={firstDigit}
            secondDigit={secondDigit}
            modulo={modulo}
            setFirstDigit={setFirstDigit}
            setSecondDigit={setSecondDigit}
            setModulo={setModulo}
            result={result}
            setResult={setResult}
            calculate={calculate}
        />
    )
}