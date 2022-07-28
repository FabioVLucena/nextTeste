import Atendimento from "../components/Atendimento";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hub from "../components/Hub";
import Principal from "../components/Principal";
import Slogan from "../components/Slogan";
import Sobre from "../components/Sobre";
import SubFooter from "../components/SubFooter";
import SubPrincipal from "../components/SubPrincipal";

function Home() {
    return (  
        <div className="flex flex-col">
            <Header numero={"(11) 5555-3161"} email={"comercial@gigacorp.com.br"}/>
            <Hub />
            <Principal />
            <SubPrincipal />
            <Sobre />
            <Atendimento />
            <Slogan />
            <Footer />
            <SubFooter />
        </div>
    );
}

export default Home;