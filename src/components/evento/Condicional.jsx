import { useState } from "react";

function Condicional(){

    const[email, setEmail] = useState();
    const[userEmail, setUserEmail] = useState();

    function enviarEmail(event){
        event.preventDefault(email)
        console.log(userEmail)
    }

    return(
        <div>
            <h2>Cadastro um E-mail:</h2>
            <form>
                <input type="email" placeholder="Digite seu e-mail"
                onChange={() => setUserEmail(event.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>Enviar E-mail</button>
                {userEmail}
            </form>
        </div>
    )
}
export default Condicional