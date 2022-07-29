

function SubPrincipal() {
    return (  
        <div className="w-full h-[510px] bg-white flex justify-center">
            <div className="w-2/3 h-full flex flex-col justify-center">
                <div className="w-full h-1/3 mt-20 border-orange-600 flex flex-col justify-center items-center">
                    <h1 className="text-4xl text-black font-bold">Consultoria em TI e Telecomunicação</h1>
                    <p className="text-xl text-gray-700 py-4">Oferecemos alta capacidade e disponibilidade através de soluções customizadas para a sua empresa.</p>
                    <span className="w-16 h-1 bg-orange-600 rounded-full" />
                </div>

                <div className="w-full h-2/3 flex flex-row justify-around items-center">
                    <div className="w-1/3 h-48 flex flex-col items-center">
                        <span className="w-32 h-32 rounded-full bg-orange-600 mb-5 flex items-center justify-center hover:bg-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>

                        <h1 className="text-2xl font-bold text-black">
                            REDUÇÃO DE CUSTOS
                        </h1>

                    </div>
                    <div className="w-1/3 h-48 flex flex-col items-center">
                        <span className="w-32 h-32 rounded-full bg-orange-600 mb-5 flex items-center justify-center hover:bg-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </span>

                        <h1 className="text-2xl font-bold text-black">
                            CONSULTORIA
                        </h1>
                    </div>
                    <div className="w-1/3 h-48 flex flex-col items-center">
                        <span className="w-32 h-32 rounded-full bg-orange-600 mb-5 flex items-center justify-center hover:bg-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                            </svg>
                        </span>

                        <h1 className="text-2xl font-bold text-black">
                            INOVAÇÃO
                        </h1>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SubPrincipal;