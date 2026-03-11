import { useEffect, useState } from "react"
import { calculate as calcModExp } from "../utils/mod-exponentiation"
import { calculate as calcModInverse } from "../utils/mod-inverse"
import { OperationWrapper } from "../OperationWrapper"


export const ModExponentiation = () => {
    const [firstDigit, setFirstDigit] = useState<number | string>("")
    const [secondDigit, setSecondDigit] = useState<number | string>("")
    const [modulo, setModulo] = useState<number | string>("")
    const [result, setResult] = useState<number | string>("")

    const calculate = (first: number | string, second: number | string, mod: number | string) => {
        console.log("Calculating with", first, second, mod)
        if (+second === -1) {
            return calcModInverse(first, mod)
        } else if (+second > -1) {
            return calcModExp(first, second, mod)
        } else {
            return ""
        }
    }

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