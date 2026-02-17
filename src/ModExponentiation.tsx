import { Input } from "./shared/input"


export const ModExponentiation = () => {
    return (
        <section className="p-4 flex flex-col items-center gap-4">
            <div className="flex items-center content-center">
                <div className="flex content-center">
                    <Input placeholder="17" className="px-2 w-32 h-18 text-center text-5xl"/>
                    <Input placeholder="21" className="ml-1 text-xl w-12 h-10 text-center p-0" />
                </div>
                <span className="text-2xl ml-2 mr-4">%</span>
                <Input placeholder="13" className="px-2 w-32 h-18 text-center text-5xl" />
            </div>
            <div className="font-bold text-6xl">4</div>
        </section>
    )
}