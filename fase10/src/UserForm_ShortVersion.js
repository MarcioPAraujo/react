import React from 'react'

const fields = [
  {
    label: 'Nome',
    tipo:'text',
    id: 'nome',
  },
  {
    label: 'Email',
    tipo:'email',
    id: 'email',
  },
  {
    label: 'Senha',
    tipo:'password',
    id: 'senha',
  },
  {
    label: 'Cep',
    tipo:'text',
    id: 'cep',
  },
  {
    label: 'Rua',
    tipo:'text',
    id: 'rua',
  },
  {
    label: 'Número',
    tipo:'text',
    id: 'numero',
  },
  {
    label: 'Bairro',
    tipo:'text',
    id: 'bairro',
  },
  {
    label: 'Cidade',
    tipo:'text',
    id: 'cidade',
  },
  {
    label: 'Estado',
    tipo:'text',
    id: 'estado',
  },
]

function UserForm_ShortVersion() {
  const [form, setForm] = React.useState(fields.reduce((previous, current) => {
    return {...previous, [current.id]: '' } // este retorno vai ser o valor de previous na próxima iteração
  },
  {},
))
  const [submitStatus, setSubmitStatus] = React.useState(false);

  const handleInputChanges = ({ target }) => {
    const {id, value} = target
    setForm({...form, [id]: value})
  }

  const handleSubmit = (Event) => {
    Event.preventDefault()
    fetch('https://ranekapi.origamid.dev/json/api/usuario',
      {
        method: 'POST',
        headers: { 'Content-Type':'application/json', },
        body: JSON.stringify(form),
      }
    ).then(Response => {
      if(Response.ok){
        setSubmitStatus(true);
      }
      console.log(Response)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {
        fields.map(field => (
          <div key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>
            <input type={field.tipo} id={field.id} value={form[field.id]} onChange={handleInputChanges} />
          </div>
        ))
      }
      { submitStatus && <p>Sucesso</p>}
      <button>Salvar</button>
    </form>
  )
}

export default UserForm_ShortVersion