import { ContainerHeader } from "./styled"

function Header() {

    return (
        // <header>
        <ContainerHeader>
            <h1>Olá, este é o Header</h1>
            <input type="teste" placeholder="Busca" id="CampoDeBusca"></input>
        {/* // </header > */}
        </ContainerHeader>
    )

}

export default Header