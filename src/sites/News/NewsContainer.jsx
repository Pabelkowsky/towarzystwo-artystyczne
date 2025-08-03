

export default function NewsContainer({children}){
    return(
        <div className="flex gap-[5vw] px-[5vw] py-[10px] justify-center flex-wrap">
            {children}
        </div>
    )
}