import { useState } from 'react'
import './Contato.css'

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    contato: '',
    motivo: 'Selecione',
    newsletter: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const alertMessage = `
Nome: ${formData.nome}
Email: ${formData.email}
Telefone: ${formData.telefone}
Mensagem: ${formData.mensagem}
Preferência de Contato: ${formData.contato || 'Não especificado'}
Motivo: ${formData.motivo}
Receber Newsletter: ${formData.newsletter ? 'Sim' : 'Não'}
    `
    
    alert(alertMessage)
    
    // Reset form
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      mensagem: '',
      contato: '',
      motivo: 'Selecione',
      newsletter: false
    })
  }

  return (
    <div className="contato-page">
      <main>
        <h1>📞 Fale Conosco</h1>
        <p className="subtitle">Será uma alegria te atender!</p>
        
        <form id="frmContato" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados Pessoais</legend>
            
            <label>* Nome e sobrenome</label>
            <input
              type="text"
              name="nome"
              className="input-padrao"
              value={formData.nome}
              onChange={handleChange}
              required
            />

            <label>E-mail</label>
            <input
              type="email"
              name="email"
              className="input-padrao"
              placeholder="seuemail@dominio.com"
              value={formData.email}
              onChange={handleChange}
            />

            <label>Telefone</label>
            <input
              type="tel"
              name="telefone"
              className="input-padrao"
              placeholder="(XX) XXXXX-XXXX"
              value={formData.telefone}
              onChange={handleChange}
            />

            <label>* Mensagem</label>
            <textarea
              cols="70"
              rows="10"
              name="mensagem"
              className="input-padrao"
              value={formData.mensagem}
              onChange={handleChange}
              required
            />

            <label className="radio-label">
              Como prefere o nosso contato?
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="contato"
                    value="E-mail"
                    checked={formData.contato === 'E-mail'}
                    onChange={handleChange}
                  />
                  E-mail
                </label>
                <label>
                  <input
                    type="radio"
                    name="contato"
                    value="Telefone"
                    checked={formData.contato === 'Telefone'}
                    onChange={handleChange}
                  />
                  Telefone
                </label>
                <label>
                  <input
                    type="radio"
                    name="contato"
                    value="Whatsapp"
                    checked={formData.contato === 'Whatsapp'}
                    onChange={handleChange}
                  />
                  Whatsapp
                </label>
              </div>
            </label>

            <label>
              Qual o motivo do seu contato?
              <select
                name="motivo"
                value={formData.motivo}
                onChange={handleChange}
              >
                <option>Selecione</option>
                <option>Dúvida</option>
                <option>Sugestão</option>
                <option>Elogio</option>
                <option>Reclamação</option>
              </select>
            </label>
          </fieldset>

          <div className="checkbox-container">
            <label>
              <input
                type="checkbox"
                name="newsletter"
                className="chk"
                checked={formData.newsletter}
                onChange={handleChange}
              />
              Gostaria de receber nossas novidades por e-mail?
            </label>
          </div>

          <div className="button-container">
            <input type="submit" value="Enviar Mensagem" className="enviar" />
          </div>
        </form>
      </main>
    </div>
  )
}

export default Contato

