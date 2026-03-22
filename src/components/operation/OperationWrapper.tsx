import { useEffect, useMemo, useState, type ChangeEvent } from "react"
import { Input } from "../../shared/input"
import { getDividers } from "./utils/get-dividers"
import { Textarea } from "@/shared/textarea"
import { Parser } from "expr-eval"


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

const parser = new Parser();


export const OperationWrapper = (props: OperationWrapperProps) => {
    const [dividers, setDividers] = useState<number[] | null>(null);
    const [parsedFirstDigit, setParsedFirstDigit] = useState<number | null>(null);
    const [parsedSecondDigit, setParsedSecondDigit] = useState<number | null>(null);
    const [parsedModulo, setParsedModulo] = useState<number | null>(null);
    const { firstDigit, secondDigit, modulo, setFirstDigit, setSecondDigit, setModulo, result, setResult, calculate, showDividers = true, showPower = true, separator = " % " } = props;
    const textSizes = useMemo(() => ({
        normal: "text-5xl",
        small: "text-4xl px-1",
        smaller: "text-3xl px-1",
        very_small: "text-2xl px-1",
        extra_small: "text-xl px-1"
    }), [])

    useEffect(() => {

        try {
            try{ parser.evaluate(firstDigit.toString()); } catch { setParsedFirstDigit(null); return; }
            try{ parser.evaluate(secondDigit.toString().length > 0 ? secondDigit.toString() : "1"); } catch { setParsedSecondDigit(null); return; }
            try{ parser.evaluate(modulo.toString()); } catch { setParsedModulo(null); return; }

            const parsedFirstDigit = parser.evaluate(firstDigit.toString());
            const parsedSecondDigit = parser.evaluate(secondDigit.toString().length > 0 ? secondDigit.toString() : "1");
            const parsedModulo = parser.evaluate(modulo.toString());

            setParsedFirstDigit(parsedFirstDigit);
            setParsedSecondDigit(parsedSecondDigit);
            setParsedModulo(parsedModulo);

            const calculatedResult = calculate(parsedFirstDigit, parsedSecondDigit, parsedModulo) || "";
            setResult(calculatedResult);
        } catch (error) { }
    }, [firstDigit, secondDigit, modulo])

    useEffect(() => {
        setDividers(result ? getDividers(result) : null);
    }, [result])

    const getTextSize = (value: string) => {
        if(value.length <= 3)
            return textSizes.normal;
        else if(value.length <= 6)
            return textSizes.small;
        else if(value.length <= 7)
            return textSizes.smaller;
        else if(value.length <= 9)
            return textSizes.very_small;
    }

    const getDividersHandler = () => {
        setDividers(getDividers(result));
    }

    const handleChangeValue = (value : ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, callback: (value: number | string) => void) => {
        const intValue = (value.target.value.replace(/[^\d\+\-\*]/g, ''));
        callback(intValue);
    }

    return (
        <section className="mx-auto flex max-w-5xl flex-col gap-6 px-0 pt-6 sm:pt-8">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-6">
                <div className="mb-4 flex items-center justify-between gap-4 text-sm text-slate-300/80">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Поддерживаются выражения с +, -, *</span>
                    <span className="hidden rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-cyan-100 sm:inline-flex">Результат обновляется автоматически</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 xl:flex-row xl:gap-5">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <div className="flex min-w-[10rem] flex-col items-center gap-2 rounded-3xl border border-white/10 bg-slate-950/35 px-4 py-4 shadow-inner shadow-black/20">
                            <Textarea
                                value={firstDigit}
                                onFocus={(ev) => ev.target.select()}
                                onChange={(ev) => handleChangeValue(ev, setFirstDigit)}
                                placeholder="17" className={`w-36 rounded-2xl border-white/10 bg-slate-900/60 px-3 text-center text-white shadow-lg shadow-black/10 placeholder:text-slate-400/50 ${getTextSize(firstDigit.toString())}`}/>
                            <span className="min-h-5 text-sm text-cyan-100/80">{+firstDigit !== parsedFirstDigit ? parsedFirstDigit : null}</span>
                        </div>

                        <div className="flex flex-col items-center gap-2 rounded-3xl border border-white/10 bg-slate-950/35 px-4 py-4 shadow-inner shadow-black/20">
                            {showPower && <Input
                                value={secondDigit}
                                onFocus={(ev) => ev.target.select()}
                                onChange={(ev) => handleChangeValue(ev, setSecondDigit)}
                                placeholder="1" className="h-12 w-14 rounded-2xl border-white/10 bg-slate-900/60 px-2 text-center text-white shadow-lg shadow-black/10 placeholder:text-slate-400/50" />
                            }
                            <span className="min-h-5 text-sm text-cyan-100/80">{+secondDigit !== parsedSecondDigit ? parsedSecondDigit : null}</span>
                        </div>
                    </div>

                    <span className="hidden text-2xl font-semibold tracking-[0.35em] text-cyan-200/70 xl:inline-flex">{separator}</span>

                    <div className="flex flex-col items-center gap-2 rounded-3xl border border-white/10 bg-slate-950/35 px-4 py-4 shadow-inner shadow-black/20">
                        <Textarea
                            value={modulo}
                            onFocus={(ev) => ev.target.select()}
                            onChange={(ev) => handleChangeValue(ev, setModulo)}
                            placeholder="13" className={`w-36 rounded-2xl border-white/10 bg-slate-900/60 px-3 text-center text-white shadow-lg shadow-black/10 placeholder:text-slate-400/50 ${getTextSize(modulo.toString())}`} />
                        <span className="min-h-5 text-sm text-cyan-100/80">{+modulo !== parsedModulo ? parsedModulo : null}</span>
                    </div>
                </div>
            </div>

            <button onClick={getDividersHandler} className="group mx-auto flex min-h-24 items-center justify-center rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/15 via-sky-400/10 to-transparent px-6 py-5 text-center shadow-[0_20px_50px_rgba(8,145,178,0.15)] transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:from-cyan-400/20" data-testid="result" type="button">
                <span className="font-mono text-5xl font-semibold tracking-tight text-white sm:text-6xl">{result}</span>
            </button>
            {dividers && showDividers && <div className="mx-auto rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-lg shadow-black/10">{dividers.length === 1 ? "Это простое число" : dividers.join(" × ")}</div>}
        </section>
    )
}