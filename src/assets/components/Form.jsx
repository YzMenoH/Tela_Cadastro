import { useState } from "react"

function Form() {

    function cadastrarUsuario(event) {
        event.preventDefault()
        console.log(`Usuário ${name}, com o sobrenome ${lastName} foi cadastrado com a senha ${password}, com o  e-mail${email}`)
    }

    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [password, setSenha] = useState()
    const [email, setEmail] = useState()

    return (
        <div className="container">
            <form onSubmit={cadastrarUsuario}>
                <fieldset>
                    <legend>Cadastro de Usuário</legend>
                    <h2>Nome completo</h2>
                    <div>
                        <label htmlFor="name">Primeiro nome:</label>
                        <input
                            type="text"
                            id="name" name="name"
                            placeholder="Digite o seu primeiro nome"
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Sobrenome:</label>
                        <input
                            type="text"
                            id="lastName" name="LastName"
                            placeholder="Digite o seu sobrenome"
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </div>
                    <h2>E-mail</h2>
                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input type="text"
                            id="email"
                            name="email"
                            placeholder="Digite o seu e-mail"
                            onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <h2>Senha</h2>
                    <div>
                        <label htmlFor="senha">Senha:</label>
                        <input type="text"
                            id="senha"
                            name="email"
                            placeholder="Digite sua senha"
                            onChange={(event) => setSenha(event.target.value)} />
                    </div>
                    <div>
                        <input type="submit" value="Cadastrar" />
                    </div>
                </fieldset>
            </form>

        </div>
    )
}

export default Form;