import Button from "./evento/Button"

function Evento() {
    
    function meuPrimeiro(){
        console.log("`Primeiro Evento Atividade`")
    }
        function meuSegundo(){
        console.log("`Primeiro Evento Atividade`")
    }
    return(
        <>
            <p>Clique para disparar um Evento:</p>
            <Button onClick={meuPrimeiro} text="Primeiro Disparo do Evento"/>
            <Button onClick={meuSegundo} text="Segundo Disparo do Evento"/>
        </>
    )
}

export default Evento;