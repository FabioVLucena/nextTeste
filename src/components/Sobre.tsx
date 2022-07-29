import Button from "./Button";


function Sobre() {
    return (  
        <div className="w-full h-[817px] flex justify-center items-center bg-gray-300">
            <div className="w-2/3 h-3/4 rounded-3xl bg-people bg-cover bg-no-repeat bg-center flex flex-row">
                <div className="w-1/2 h-full">

                </div>
                
                <div className="w-1/2 h-full flex justify-center items-center">
                    <div className="w-3/4 h-4/6 bg-white rounded-2xl mt-24 flex justify-center items-center">
                        <div className="w-3/4 h-3/4 text-black">
                            <h1 className="text-xl font-bold">O que fazemos, como e para que</h1>
                            
                            <ul className="my-6 list-outside">    
                                <li><strong className="text-orange-600">Entregamos</strong> Redução de Custos e Otimização de Recursos.</li>
                                <li><strong className="text-orange-600">Através</strong> de inovação, automação, gestão e estudo constante de mercado e de novas tendências.</li>
                                <li><strong className="text-orange-600">Para que</strong> o nosso cliente possa focar no seu core business, enquanto cuidamos das suas necessidades de TI e Telecom.</li>
                            </ul>

                            <Button link="#" label="Saiba Mais" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sobre;