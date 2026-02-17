import { ClockFading, Info } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "./shared/toggle-group"


export const Header = () => {
    return (
        <header className="header flex flex-row justify-between items-center w-screen px-4 py-2">
            <div>
                <ClockFading />
            </div>
            <div>
                <ToggleGroup type="single" variant="outline" defaultValue="modExponentiation">
                    <ToggleGroupItem value="modExponentiation" aria-label="module Exponentiation">
                        <span className="text-foreground">x <sup>y</sup> % z</span>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="modInverse" aria-label="module Inverse">
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