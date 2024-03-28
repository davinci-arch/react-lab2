
import Block from "./Block"
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"

export default function Canvas(){

    return (
        <div className="flex rounded-3xl overflow-hidden max-w-[990px] min-h-[680px] w-full mt-[80px] mb-4">
            <Block bg_color="bg-[#f3f4f6]">
                <LeftSide />
            </Block>
            <Block bg_color="bg-[#fff]">
                <RightSide />
            </Block>
        </div>
        
    )
}