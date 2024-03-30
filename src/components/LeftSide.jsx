
export default function LeftSide() {
    return (
        // pt-0 pr-[20px] pb-0 pl-[20px]
        <header className="flex flex-col">
            <img src="https://send.monobank.ua/img/logo_short.png" alt="Monobank" className="block mt-[42px] mr-auto mb-6 ml-auto bg-cover border-0" />
            <div className="w-auto mt-[20px] mr-[120px] mb-[20px] ml-[120px] p-field mt-auto">
                <div className="relative text-center">
                    <img src="https://send.monobank.ua/img/jar_bg.png" alt="background" className="w-[215px] h-[215px] bg-cover border-0" />
                    <div className="bg-avatar absolute mt-[-70px] ml-32 h-14 w-14 rounded-[32px] z-[1] bg-cover bg-center"></div>
                    <div className="absolute top-[5%] left-[18%]">
                        <img className="h-[203px] w-[155px] bg-cover border-0 max-w-full" alt="glass" src="https://send.monobank.ua/img/jar/uah_100.png" />
                        <div className="absolute top-[26px] left-[13px]">
                            <img src="https://send.monobank.ua/img/jar/grid.png" alt="range" className="w-[42px] h-[168px] bg-cover border-0" />
                            <div className="relative bottom-[169px] left-[14px] font-extrabold text-[10px] text-[#8e5b5b]">25000</div>
                            <div className="relative bottom-[106px] left-px font-extrabold text-[10px] text-[#8e5b5b]">12500</div>
                            <div className="relative bottom-[45px] left-[-10px] font-extrabold text-[10px] text-[#8e5b5b]">0</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-black text-desc mt-0 mb-0 ml-[56px] mr-[56px] p-field text-center">
                <span>Аретем К. збирає</span>
            </div>
            <div className="mt-0 mb-0 ml-[56px] mr-[56px] p-field text-center">
                <h2 className="text-[1.5rem] font-bold">На ремонт медеваку</h2>
            </div>
            <div className="min-w-[340px] mt-0 mr-[57px] mb-0 ml-[57px] p-field">
                <div>
                    <p className="mt-[15px] text-[14px] p-field text-center">Збираємо на ремонт медеваку для 4ОТБР танкова бригада</p>
                    <p className="mt-[15px] text-[14px] p-field text-center">Ремонтуємо 2 автівки - Тойоту та Нісан.</p>
                    <p className="mt-[15px] text-[14px] p-field text-center">У бригаді є наші земляки з Черкащини!</p>
                    <p className="mt-[15px] text-[14px] p-field text-center">Ремонт авто треба на вчора! Прохання підтримати!</p>
                </div>
                <div className="flex justify-center mt-4 rounded-2xl bg-white mt-0 mr-auto mb-0 ml-auto text-center">
                    <div className="relative flex flex-row items-center pt-0 pr-[20px] pb-0 pl-[20px] mt-[12px] mr-0 mb-[12px] ml-0 border-r-[0.5px] border-e-gray-300">
                        <img src="https://send.monobank.ua/img/collected.svg" alt="icon" className="mr-4 w-6 h-6 min-w-6 bg-cover border-0" />
                        <div className="flex flex-col">
                            <div className="text-th text-[#808080]">Накопичено</div>
                            <div className="text-t text-black">30500 ₴</div>
                        </div>
                    </div>
                    <div className="relative flex flex-row items-center pt-0 pr-[20px] pb-0 pl-[20px] mt-[12px] mr-0 mb-[12px] ml-0">
                        <img src="https://send.monobank.ua/img/target.svg" alt="icon" className="mr-4 w-6 h-6 min-w-6 bg-cover border-0" />
                        <div className="flex flex-col">
                            <div className="text-th text-[#808080]">Ціль</div>
                            <div className="text-t text-black">25 000 ₴</div>
                        </div>
                    </div>
                </div>
            </div>

        </header>

    )
}