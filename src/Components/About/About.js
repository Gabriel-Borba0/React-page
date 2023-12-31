import objetivo1 from '../../Assets/objetivo1.png'
import publicoalvo from '../../Assets/publicoalvo.png'
import demographics from '../../Assets/demographics.png'
import CardHorizontal from '../CardHorizontal/CardHorizontal'
import './About.css'

const About = () =>{

    return (
        <div className="about">
            <CardHorizontal
                path={objetivo1}
                text={"Nosso objetivo é oferecer uma ampla gama de serviços financeiros, como contas bancárias, empréstimos, hipotecas, investimentos, cartões de crédito e serviços de pagamento para atender às necessidades financeiras dos clientes de forma eficiente e conveniente."}
            />
            <CardHorizontal
                path={publicoalvo}
                text={"Voltado especialmente para clientes pessoas físicas, famílias e empresas que desejam controle e comodidade em suas operações bancárias. É ideal para quem busca serviços bancários modernos, flexíveis e acessíveis sem a necessidade de se deslocar fisicamente a uma agência bancária."}
                orientation={true}
            />
            <CardHorizontal
                path={demographics}
                text={"Nós nos esforçamos ao maximimo para aumentar sua lucratividade de maneira sustentável, gerenciando cuidadosamente seus recursos e investimentos. Isso inclui tomar decisões comerciais prudentes, equilibrar risco e retorno, controlar custos, desenvolver produtos e mais."}
            />
        </div>
    )

}
export default About;