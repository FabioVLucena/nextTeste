import Logo from "./Logo";
import Tag from "./Tag";



function Footer() {
    return ( 
        <div className="w-full h-[240px] flex justify-center bg-white">
            <div className="w-2/3 h-full flex flex-row justify-center items-center">
                <div className="w-1/4 h-2/3 flex justify-center">
                    <Logo />
                </div>
                <div className="w-1/4 h-2/3 flex flex-col justify-start">
                    <Tag label="Serviços"></Tag>
                    <a href="/#" className="text-gray-700 py-0.5 hover:text-orange-600">Comunicação</a>
                    <a href="/#" className="text-gray-700 py-0.5 hover:text-orange-600">Conectividade</a>
                    <a href="/#" className="text-gray-700 py-0.5 hover:text-orange-600">Segurança e Monitoramento</a>
                    <a href="/#" className="text-gray-700 py-0.5 hover:text-orange-600">Infraestrutura</a>
                </div>
                <div className="w-1/4 h-2/3 text-gray-700">
                    <Tag label="Contatos"></Tag>
                    <div className="flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <p>(11) 5555-3161</p>
                    </div>

                    <div className="flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                        </svg>
                        <p>comercial@gigacorp.com.br</p>
                    </div>                    

                    <div className="flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-10 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p>Av. Paulista, 777 - 15° andar, Cerqueira Cesar, CEP 01311-100 São Paulo / SP</p>
                    </div>
                </div>
                <div className="w-1/4 h-2/3 flex flex-col">
                    <Tag label="Obtenha Ofertas Exclusivas!"></Tag>
                    <div className="w-full h-1/2">
                        <input className="shadow appearance-none border border-gray-400 rounded w-5/6 py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Seu e-mail" />
                    </div>

                    <div className="w-full h-1/2 flex flex-col justify-start items-start">
                        <div className="form-check">
                            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-orange-600 checked:border-orange-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label inline-block text-gray-800" >
                                Aceito os termos da LGPD.
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Footer;