import Button from "./Button";

function Principal() {
    return (  
        <div className="w-full h-[900px] flex justify-center">
            <div className="w-2/3 flex items-center">
                <div className="w-2/3">
                    <h1 className="text-5xl">
                        SOLUÇÕES CUSTOMIZADAS DE TECNOLOGIA E TELECOMUNICAÇÕES
                    </h1>
                    
                    <p className="text-2xl pt-8 pb-12">
                        Através de parcerias com empresas especialistas e com tecnologia de ponta, 
                        fornecemos serviços de Comunicação, Dados, Infraestrutura e Segurança, 
                        buscando sempre inovação, alta disponibilidade e o melhor custo benefício.
                    </p>

                    <Button link="#" label="SAIBA MAIS" />
                </div>                
            </div>

        </div>
    );
}

export default Principal;