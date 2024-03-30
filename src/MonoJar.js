
import Canvas from "./components/Canvas"
import FooterBlock from "./components/FooterBlock"


export default function MonoJar(){
    return (
        <div className="flex flex-col items-center justify-center align bg-gradient-to-r from-[#8a53b6] to-[#c496d8] w-full h-full">
            <Canvas />
            <FooterBlock />
        </div>
    )
}

