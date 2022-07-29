function Atendimento() {
    return (  
        <div className="w-full h-[470px] bg-gray-true flex justify-center">
            <div className="w-2/3 h-full flex flex-row justify-center">
                <div className="w-1/2 h-full flex flex-col justify-center items-start">
                    <h1 className="text-orange-600 font-bold text-5xl pb-6">Nossos canais de atendimento</h1>
                    <p>Nós da Giga Corp temos uma equipe de atendimento especializada para ajudar a sua empresa. Acesse nossa central de atendimento ou solicite um orçamento.</p>
                </div>
                
                <div className="w-2/3 h-full flex flex-col justify-center items-center">
                    <div className="w-[540px] h-[125px] rounded-xl bg-white my-5 flex flex-row">
                        <div className="w-1/4 h-full flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 stroke-orange-500 hover:stroke-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                        </div>
                        <div className="w-3/4 h-full text-black flex flex-col justify-center items-start">
                            <h1 className="text-3xl font-bold">Atendimento ao cliente</h1>
                            <p className="text-xl">Fale a qualquer hora pelo WhatsApp.</p>
                        </div>
                    </div>
                    
                    <div className="w-[540px] h-[125px] rounded-xl bg-white my-5 flex flex-row">
                        <div className="w-1/4 h-full flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 stroke-orange-500 hover:stroke-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                        </div>
                        <div className="w-3/4 h-full text-black flex flex-col justify-center items-start">
                            <h1 className="text-3xl font-bold">Orçamentos</h1>
                            <p className="text-xl">Solicite informações sobre nossas soluções.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Atendimento;