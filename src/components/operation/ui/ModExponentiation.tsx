import { useEffect, useState } from "react"
import { calculate } from "../utils/mod-exponentiation"
import { OperationWrapper } from "../OperationWrapper"


export const ModExponentiation = () => {
    const [firstDigit, setFirstDigit] = useState<number | string>("")
    const [secondDigit, setSecondDigit] = useState<number | string>("")
    const [modulo, setModulo] = useState<number | string>("")
    const [result, setResult] = useState<number | string>("")

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