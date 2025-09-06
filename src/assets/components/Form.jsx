import styles from "./Form.css"
import { useState } from "react"

function Form(){

    function cadastrarUsuario(event){
        event.preventDefault()
        console.log("Usuário cadastrado.")
    }

    const [name,setName] = useState()
    const [password,setPassword] = useState()
    
    return(
        <div className={styles.formContainer}>
            <h1>Realize seu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <fieldset>
                    <div>
                        <label htmlFor="name">Nome de Usuário</label>
                        <input type="text" id="name" name="name" placeholder=" Insira seu nome" onChange={(event) => setName(event.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" name="password" placeholder=" Insira sua senha" onChange={(event)=>setPassword(event.target.value)}/>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Form