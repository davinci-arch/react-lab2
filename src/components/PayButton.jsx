
export default function PayButton({url}) {
    return (
        <div className="flex cursor-pointer h-12 my-0 mx-auto w-[340px] rounded-[8px] bg-black overflow-hidden mb-4 select-none hover:opacity-80">
            <img src={url} alt="payment" className="cursor-pointer select-none h-[26px] m-auto bg-cover border-none" />
        </div>
    )
}