"use client"
import { useEffect, useState } from "react"
;


export default function Enlaces() {

    const data = [
        {
            image: "/blog-1.jpg",
            title: "",
            category: "BODA DE",
            description: "Para hacer este tipo de decoración....  ",
            url: "https://943060409.blogspot.com/2024/07/por-que-tu-negocio-necesita-una-pagina.html"
        },
        {
            image: "/blog-1.jpg",
            title: "",
            category: "BODA DE",
            description: "Para hacer este tipo de decoración....  ",
            url: "https://943060409.blogspot.com/2024/07/por-que-tu-negocio-necesita-una-pagina.html"
        },
        {
            image: "/blog-1.jpg",
            title: "",
            category: "BODA DE",
            description: "Para hacer este tipo de decoración....  ",
            url: "https://943060409.blogspot.com/2024/07/por-que-tu-negocio-necesita-una-pagina.html"
        },
        {
            image: "/blog-1.jpg",
            title: "",
            category: "BODA DE",
            description: "Para hacer este tipo de decoración....  ",
            url: "https://943060409.blogspot.com/2024/07/por-que-tu-negocio-necesita-una-pagina.html"
        },
        {
            image: "/blog-1.jpg",
            title: "",
            category: "BODA DE",
            description: "Para hacer este tipo de decoración....  ",
            url: "https://943060409.blogspot.com/2024/07/por-que-tu-negocio-necesita-una-pagina.html"
        },
        {
            image: "/blog-1.jpg",
            title: "",
            category: "BODA DE",
            description: "Para hacer este tipo de decoración....  ",
            url: "https://943060409.blogspot.com/2024/07/por-que-tu-negocio-necesita-una-pagina.html"
        },
        {
            image: "/blog-1.jpg",
            title: "",
            category: "BODA DE",
            description: "Para hacer este tipo de decoración....  ",
            url: "https://943060409.blogspot.com/2024/07/por-que-tu-negocio-necesita-una-pagina.html"
        },
        {
            image: "/blog-1.jpg",
            title: "",
            category: "BODA DE",
            description: "Para hacer este tipo de decoración....  ",
            url: "https://943060409.blogspot.com/2024/07/por-que-tu-negocio-necesita-una-pagina.html"
        },
        {
            image: "/blog-1.jpg",
            title: "",
            category: "BODA DE",
            description: "Para hacer este tipo de decoración....  ",
            url: "https://943060409.blogspot.com/2024/07/por-que-tu-negocio-necesita-una-pagina.html"
        },
        {
            image: "/blog-1.jpg",
            title: "",
            category: "BODA DE",
            description: "Para hacer este tipo de decoración....  ",
            url: "https://943060409.blogspot.com/2024/07/por-que-tu-negocio-necesita-una-pagina.html"
        },
        {
            image: "/blog-1.jpg",
            title: "",
            category: "BODA DE",
            description: "Para hacer este tipo de decoración....  ",
            url: "https://943060409.blogspot.com/2024/07/por-que-tu-negocio-necesita-una-pagina.html"
        },
        {
            image: "/blog-1.jpg",
            title: "",
            category: "BODA DE",
            description: "Para hacer este tipo de decoración....  ",
            url: "https://943060409.blogspot.com/2024/07/por-que-tu-negocio-necesita-una-pagina.html"
        },
        {
            image: "/blog-1.jpg",
            title: "",
            category: "BODA DE",
            description: "Para hacer este tipo de decoración....  ",
            url: "https://943060409.blogspot.com/2024/07/por-que-tu-negocio-necesita-una-pagina.html"
        },
    ]
    let [page, setPage] = useState(1)
    let [datashow, setData] = useState([])
    let [searchTerm, setSearchTerm] = useState("");
    let [dataLt, setDataLt] = useState(data.length)
    let [noResults, setNoResults] = useState(false); // Estado para manejar si no hay resultados


    useEffect(() => {
        const filteredData = searchTerm !== "" ? articlesView(page, data.filter(
            (article) =>
                article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                article.description.toLowerCase().includes(searchTerm.toLowerCase())
        )) : articlesView(page);

        setNoResults(filteredData.length === 0); // Si no hay resultados, cambiar estado a true
        setData(filteredData);

    }, [searchTerm, page]);

    useEffect(() => {
        setPage(1);
    }, [searchTerm]);

    function buttonNext() {
        if (page * 4 < dataLt) {
            setPage(page + 1);
        }
    }

    function buttonBack() {
        if (page > 1) {
            setPage(page - 1);
        }
    }


    function articlesView(currentPage, dataOld = data) {
        setDataLt(dataOld.length)

        const start = (currentPage - 1) * 4;
        const end = start + 4;
        return dataOld.slice(start, end);
    }

    return (
        <>

            <section className=" bg-[#eeeeee] p-8">

                <div className="flex flex-col-reverse lg:flex-row gap-6 justify-between">
                    <div className="flex-[0.7] grid gap-6 grid-cols-1 md:grid-cols-2 ">

                    {noResults ? (
                            <div className="col-span-2 flex justify-center items-center text-center text-lg text-red-500 h-full">No se han encontrado resultados</div>
                        ) : (

                        datashow.map(({ image, title, category, description, url }, index) => (
                            <article key={index} className="rounded-bl-2xl rounded-br-2xl shadow-xl bg-white overflow-hidden flex flex-col">

                                <img src={`/blog/${image}`} className="w-full h-[150px] object-cover" />

                                <div className="lg:h-20 px-4 my-4 flex flex-col justify-center items-center">
                                    <h3 className="text-lg  text-center">{title}</h3>
                                </div>

                                <p className="text-sm  ml-4 bg-[#ea9d2f] rounded-xl text-white py-2 font-bold px-4 w-max">{category}</p>

                                <div className="flex flex-col mt-4 justify-between gap-6 flex-1">
                                    <p className="px-4">{description}</p>

                                    <a href={url} target="_blank" className="text-white font-bold py-3 text-center bg-[#ea9d2f]">
                                        Leer más
                                    </a>
                                </div>
                            </article>
                        ))
                        )}
                        

                    </div>

                    <aside className="flex-[0.3] w-full flex flex-col gap-5 rounded-xl shadow-lg bg-[#ea9d2f] h-[350px] p-6 mx-auto ">

                        <input
                            type="text" placeholder="Buscar ...."
                            className="w-full px-4 py-3 outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        <a className="text-white hover:font-medium transition-all duration-300" href="https://943060409.blogspot.com/search/label/Marketing%20y%20gesti%C3%B3n%20digital" target="_blank">Guía paso a paso para planificar la boda perfecta</a>
                        <a className="text-white hover:font-medium transition-all duration-300" href="https://943060409.blogspot.com/search/label/Dise%C3%B1o%20y%20Desarrollo%20web" target="_blank">5 Consejos para organizar un evento corporativo exitoso</a>
                        <a className="text-white hover:font-medium transition-all duration-300" href="https://943060409.blogspot.com/search/label/Gestion%20de%20redes%20sociales" target="_blank">Cómo calcular la cantidad de mesas y sillas para tu evento</a>
                        <a className="text-white hover:font-medium transition-all duration-300" href="https://943060409.blogspot.com/search/label/Branding%20y%20dise%C3%B1o" target="_blank">Tendencias en decoración de eventos para este año</a>

                    </aside>
                </div>

                <div className="flex gap-8 justify-center items-center my-6 mt-12">
                    <button className="p-2 px-6 bg-[#ea9d2f] text-white font-bold rounded-xl hover:bg-[#3a1750] transition-all duration-300" onClick={buttonBack}>&lt;&lt; Regresar</button>
                    <button className="p-2 px-6 bg-[#ea9d2f] text-white font-bold rounded-xl hover:bg-[#3a1750] transition-all duration-300" onClick={buttonNext}>Siquiente &gt;&gt;</button>
                </div>

            </section>



        </>
    )
}

