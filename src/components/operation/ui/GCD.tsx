import { useState } from "react";
import { OperationWrapper } from "../OperationWrapper";
import { gcd } from "../utils/gcd";


export const GCD = () => {
    const [firstDigit, setFirstDigit] = useState<number | string>("")
    const secondDigit = -1;
    const [modulo, setModulo] = useState<number | string>("")
    const [result, setResult] = useState<number | string>("")

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
            calculate={(firstDigit, _ , secondDigit) => gcd(firstDigit, secondDigit)}

            showPower={false}
            separator=" ; "
        />
    )
}