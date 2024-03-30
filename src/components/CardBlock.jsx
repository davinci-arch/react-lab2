import React, { useState } from 'react';
import ChooseButton from './ChooseButton';
import MaterialInput from './MaterialButton';
export default function MoneyCard() {
    const [currentValue, setNewValue] = useState(0);

    return (
        <div className="relative p-6 box-border w-[394px] bg-clip-padding border-solid border-[3px] border-transparent bg-white rounded-[24px] mt-[48px] mb-[32px] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:m-[-3px] before:rounded-[24px] before:z-[-1] before:bg-gradient-card">
            <div className='flex justify-center text-center text-[14px] leading-4 mt-0 font-semibold'>
                Сума поповнення
                <img src="https://send.monobank.ua/img/money.png" alt="money-emojy" className='w-4 ml-[0.5em] mb-[-3px] bg-cover border-0' />
            </div>
            <div className="text-center">
                <div className='flex justify-center opacity-40 font-bold text-[48px] px-0 py-[20px]'>
                    <div contentEditable="true" inputMode='decimal' className='pr-[1px] outline-0'>{currentValue}</div>
                    <div className='flex whitespace-pre-wrap items-end'> ₴</div>
                </div>
                <div className="hidden mt-[-18px] mb-[18px] mx-4 font-normal text-[12px] leading-[1px] text-center text-[#808080]">Сума повинна бути від 10 ₴ до 29 999 ₴</div>
            </div>
            <div className="flex m-auto mt-0 w-full justify-evenly">
                <ChooseButton text="+100 ₴" />
                <ChooseButton text="+500 ₴" />
                <ChooseButton text="+1 000 ₴" />
            </div>
        </div>
        
    )
}