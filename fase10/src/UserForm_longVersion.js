import React from 'react'



const UserForm = () => {
    const [form, setForm] = React.useState({
        nome: '',
        email: '',
        cep: '',
        rua: '',
        numero: '',
        senha: '',
        bairro: '',
        cidade: '',
        estado: '',
    })

    const handleInputChanges = (Event) => {
        const { value, id } = Event.target
        setForm({...form, [id]: value} )
    }

    const handleSubmit = (Event) => {
        Event.preventDefault()
        fetch('https://ranekapi.origamid.dev/json/api/usuario',
            {
                method: 'POST',
                headers: { 'Content-Type':'application/json',},
                body: JSON.stringify(form)
            },
        )
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='nome'>Nome</label>
            <input type='text' id='nome' value={form.nome} onChange={handleInputChanges} />
        </div>
        <div>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' value={form.email} onChange={handleInputChanges}/>
        </div>
        <div>
            <label htmlFor='senha' >Senha</label>
            <input type='password' id='senha' value={form.senha} onChange={handleInputChanges} />
        </div>
        <div>
            <label htmlFor='cep'>CEP</label>
            <input type='text' id='cep' value={form.cep} onChange={handleInputChanges} />
        </div>
        <div>
            <label htmlFor='rua' >Rua</label>
            <input type='text' id='rua' value={form.rua} onChange={handleInputChanges} />
        </div>
        <div>
            <label htmlFor='numero' >Número</label>
            <input type='text' id='numero' value={form.numero} onChange={handleInputChanges} />
        </div>
        <div>
            <label htmlFor='bairro'>Bairro</label>
            <input type='text' id='bairro' value={form.bairro} onChange={handleInputChanges}  />
        </div>
        <div>
            <label htmlFor='cidade'>Cidade</label>
            <input type='text' id='cidade' value={form.cidade} onChange={handleInputChanges}  />
        </div>
        <div>
            <label htmlFor='estado'>Estado</label>
            <input type='text' id='estado' value={form.estado} onChange={handleInputChanges} />
        </div>
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default UserForm