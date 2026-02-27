import { useState } from "react"
import { calculate } from "../utils/mod-inverse";
import { OperationWrapper } from "../OperationWrapper";


export const ModInverse = () => {
    const [firstDigit, setFirstDigit] = useState<number | "">("")
    const secondDigit = -1;
    const [modulo, setModulo] = useState<number | "">("")
    const [result, setResult] = useState<number | "">("")

    return (
        <OperationWrapper 
            firstDigit={firstDigit}
            secondDigit={secondDigit}
            modulo={modulo}
            setFirstDigit={setFirstDigit}
            setSecondDigit={() => {}}
            setModulo={setModulo}
            result={result}
            setResult={setResult}
            calculate={(firstDigit, _, modulo) => calculate(firstDigit, modulo)}
        />
    )
}