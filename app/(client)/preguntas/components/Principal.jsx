export default function Principal() {


    return (
        <>
            <section className="relative w-full h-[500px]  overflow-hidden">
                <img
                    src="/faq/fondo.jpg"
                    alt="logo de preguntas y respuestas"
                    className="absolute  inset-0 w-full h-full xl:h-auto  object-cover z-0 "
                />
                <div className="absolute inset-0 z-2 flex justify-center items-center  bg-gradient-to-r from-[#ffffff00] to-[#0000006b]">
                    <h1 className="text-white text-[30px] text-center md:text-[50px] font-semibold drop-shadow-lg shadow-black" >PREGUNTAS FRECUENTES</h1>
                </div>
            </section>
        </>
    )
}

