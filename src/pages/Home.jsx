import { useState, useEffect } from 'react'
import './Home.css'

function Home() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('pt-BR'))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="home">
      {/* Banner */}
      <section className="banner-container">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <div className="banner-subtitle">Bem-vindo ao</div>
          <h1 className="banner-title">
            <span className="banner-title-line">Boteco</span>
            <span className="banner-title-line banner-title-main">do Gordinho</span>
          </h1>
          <div className="banner-divider"></div>
          <p className="banner-description">
            Sabores autênticos • Ambiente acolhedor • Experiências inesquecíveis
          </p>
          <div className="button-group">
            <button className="buttombanner buttombanner-primary">
              <span>Ver Cardápio</span>
            </button>
            <button className="buttombanner buttombanner-secondary">
              <span>Fazer Reserva</span>
            </button>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="sobre-container" id="sobre">
        <h1 className="titulo_sobrenos">SOBRE NÓS</h1>
        <div className="sobre-conteudo">
          <img src="/images/banner6.jpg" alt="Sobre o Boteco" className="sobre-img" />
          <div className="sobre-texto">
            <p>
              No coração da cidade, onde o aroma de comida caseira se mistura com a alegria da conversa animada,
              surge o Boteco do Gordinho. Um lugar que te acolhe com a simpatia do dono, um sujeito corpulento e
              de sorriso fácil, que leva a sério a missão de te proporcionar uma experiência gastronomica
            </p>
            <br />
            <p>
              No cardápio, uma explosão de sabores que te transporta para a cozinha da vovó: moqueca de camarão 
              que derrete na boca, feijoada completa que te deixa satisfeito por dias, pastel de carne crocante e 
              suculento, coxinha de frango que te faz querer mais e mais, e por aí vai... Tudo feito com ingredientes 
              frescos e de qualidade, temperado com o amor e a tradição da culinária brasileira.
            </p>
            <br />
            <p>
              Mas o Boteco do Gordinho não é só comida. É um lugar para reunir os amigos, bater papo, assistir aos
              jogos, celebrar a vida. A atmosfera é contagiante, com música ao vivo que te coloca para dançar, e
              um chopp gelado que desce redondo.
            </p>
          </div>
        </div>
      </section>

      <section className="gradientbody">
        {/* Nosso Estabelecimento */}
        <section className="mapaGeral">
          <h1 id="titulo_est">NOSSO ESTABELECIMENTO</h1>
          <p>R. Itapiru, 298 - Vila da Saúde, São Paulo - SP, 13320-030</p>
          <p className="hora">{currentTime}</p>
          <div className="mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.7056699230343!2d-46.6360539!3d-23.614886499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bb060b549c5%3A0x4bdec01f659c2f56!2sBoteco%20do%20Gordinho!5e0!3m2!1sen!2sbr!4v1740786820142!5m2!1sen!2sbr"
              width="900"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Nossos Produtos */}
        <section className="produtos-container">
          <h1 id="titulo_prod">NOSSOS PRODUTOS</h1>
          <div className="produtos-conteudo">
            <div className="produto">
              <div className="listaProdutoTexto">
                <ul>
                  <li>Filé de frango à parmegiana</li>
                  <li>Frango ao Molho</li>
                  <li>Picadinho</li>
                  <li>Calabresa</li>
                  <li>Contra Empanado</li>
                </ul>
              </div>
              <img src="/images/produto1.jpg" alt="Produtos" className="produto-img" />
            </div>
          </div>
        </section>

        {/* Vídeo */}
        <div className="container-video">
          <iframe
            width="900"
            height="500"
            src="https://www.youtube.com/embed/5OeASZGN0iw?si=UVmXaPdlrKqWdIm5&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default Home

