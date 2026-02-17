import { ClockFading, Info } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "./shared/toggle-group"
import { Operation } from "./types/Operation"


export const Header = ({value, setValue} : {value: Operation, setValue: (value: Operation) => void}) => {
    return (
        <header className="header flex flex-row justify-between items-center w-screen px-4 py-2">
            <div>
                <ClockFading />
            </div>
            <div>
                <ToggleGroup onValueChange={v => v && setValue(v as Operation)} type="single" variant="outline" value={value}>
                    <ToggleGroupItem value={Operation.ModExponentiation} aria-label="module Exponentiation">
                        <span className="text-foreground">x <sup>y</sup> % z</span>
                    </ToggleGroupItem>
                    <ToggleGroupItem value={Operation.ModInverse} aria-label="module Inverse">
                        <span className="text-foreground">x <sup>-1</sup> % z</span>
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>
            <div>
                <Info />
            </div>
        </header>
    )
}