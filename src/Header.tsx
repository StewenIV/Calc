import { Info, Moon, Sun } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "./shared/toggle-group"
import { Operation } from "./types/Operation"
import { useTheme } from "./components/theme-provider/theme-provider"


export const Header = ({value, setValue} : {value: Operation, setValue: (value: Operation) => void}) => {
    const {setTheme, theme} = useTheme()

    return (
        <header className="header flex flex-row justify-between items-center w-screen px-4 py-2">
            <div>
                {theme === "dark" ? 
                <Sun size={24} data-testid="sun" className="cursor-pointer" onClick={() => setTheme("light")} /> : 
                <Moon size={24} data-testid="moon" className="cursor-pointer" onClick={() => setTheme("dark")} />}
            </div>
            <div>
                <ToggleGroup onValueChange={v => v && setValue(v as Operation)} type="single" variant="outline" value={value}>
                    <ToggleGroupItem value={Operation.ModExponentiation} aria-label="module Exponentiation">
                        <span className="text-foreground">x <sup>y</sup> % z</span>
                    </ToggleGroupItem>
                    {/* <ToggleGroupItem value={Operation.ModInverse} aria-label="module Inverse">
                        <span className="text-foreground">x <sup>-1</sup> % z</span>
                    </ToggleGroupItem> */}
                    <ToggleGroupItem value={Operation.GCD} aria-label="GCD">
                        <span className="text-foreground">НОД(x,y)</span>
                    </ToggleGroupItem>                    
                </ToggleGroup>
            </div>
            <div>
                <Info />
            </div>
        </header>
    )
}