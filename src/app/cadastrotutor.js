import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image'


function pagecadastrotutor(){
    return(
        <div>
            <div class="mb-3">
                 <label for="name" class="form-label">Nome Completo</label>
                    <input type="name" class="form-control" id="nameRegister" placeholder="Insira o nome completo"></input>
            </div>
            <div class="mb-3">
                <label for="e-mail" class="form-label">E-mail</label>
                    <input type="email" class="form-control" id="emailRegister" placeholder="Insira o seu e-mail"></input>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Senha</label>
                    <input type="password" class="form-control" id="passwordRegister" placeholder="Insira uma senha"></input>
                    <div class="row">
            <div class="col">
                <label for="CPF" class="form-label">CPF</label>
                    <input type="cpf" class="form-control" placeholder="Ex:123.456.789-00" aria-label="First name"></input>
            </div>
            <div class="col">
                <label for="RG" class="form-label">RG</label>
                    <input type="rg" class="form-control" placeholder="Insira o RG" aria-label="Last name"></input>
            </div>
            <div class="mb-3">
                 <label for="phone" class="form-label">Telefone</label>
                    <input type="phone" class="form-control" id="phoneRegister" placeholder="(xx) xxxxx-xxxx"></input>
            </div>
            <div>
            <button type="button" class="btn btn-success">Continuar</button>
            </div>
</div>
            </div>
        </div>
    )
}

export default pagecadastrotutor