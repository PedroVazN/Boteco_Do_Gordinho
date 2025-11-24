import { useState, useEffect } from 'react'
import ProductModal from '../components/ProductModal'
import './Produtos.css'

function Produtos() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const produtos = [
    {
      nome: 'Fígado Acebolado',
      descricao: 'Fígado grelhado com cebolas caramelizadas',
      descricaoCompleta: 'Fígado grelhado com cebolas caramelizadas, um clássico da culinária brasileira preparado com todo carinho e temperos especiais.',
      preco: 'R$ 28,00',
      imagem: 'https://lh3.googleusercontent.com/p/AF1QipMQlwVcDVkv0aPG2l9MrjWhHaBOb2QnK4-VfyU7=s680-w680-h510',
      sliderImagens: [
        'https://lh3.googleusercontent.com/p/AF1QipMQlwVcDVkv0aPG2l9MrjWhHaBOb2QnK4-VfyU7=s680-w680-h510',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1M0D3oydsDMK3N4OCctIqsbe2oy2vTRAqrw&s'
      ]
    },
    {
      nome: 'Frango ao Molho',
      descricao: 'Peito de frango ao molho especial da casa',
      descricaoCompleta: 'Peito de frango ao molho especial da casa, suculento e saboroso, acompanhado de nossos temperos únicos.',
      preco: 'R$ 28,00',
      imagem: 'https://lh3.googleusercontent.com/p/AF1QipMgwF9jxQDgRHRsdI9pgG3ozL3tfUgf3lLyup3X=s680-w680-h510',
      sliderImagens: [
        'https://lh3.googleusercontent.com/p/AF1QipMgwF9jxQDgRHRsdI9pgG3ozL3tfUgf3lLyup3X=s680-w680-h510',
        'https://i0.wp.com/espetinhodesucesso.com/wp-content/uploads/2025/03/Frango-ao-molho-pardo.jpg?resize=800%2C450&ssl=1'
      ]
    },
    {
      nome: 'Filé de Frango',
      descricao: 'Filé de frango grelhado com temperos especiais',
      descricaoCompleta: 'Filé de frango grelhado com temperos especiais, macio e bem temperado, ideal para quem busca sabor e qualidade.',
      preco: 'R$ 28,00',
      imagem: 'https://receitatodahora.com.br/wp-content/uploads/2023/04/file-de-frango-18-04.jpg',
      sliderImagens: [
        'https://receitatodahora.com.br/wp-content/uploads/2023/04/file-de-frango-18-04.jpg',
        'https://espetinhodesucesso.com/wp-content/uploads/2022/06/como-se-tempera-file-de-frango.jpg'
      ]
    },
    {
      nome: 'Contra Filé',
      descricao: 'Contra filé grelhado no ponto de sua preferência',
      descricaoCompleta: 'Contra filé grelhado no ponto de sua preferência, carne nobre e suculenta preparada com maestria.',
      preco: 'R$ 36,00',
      imagem: 'https://topview.com.br/wp-content/uploads/2017/12/contra-file.jpg',
      sliderImagens: [
        'https://topview.com.br/wp-content/uploads/2017/12/contra-file.jpg',
        'https://minervafoods.com/wp-content/uploads/2022/12/contra_file_horizontal-scaled-1.jpg'
      ]
    },
    {
      nome: 'Filé à Parmegiana de Frango',
      descricao: 'Clássico filé de frango à parmegiana com molho caseiro',
      descricaoCompleta: 'Clássico filé de frango à parmegiana com molho caseiro e queijo gratinado, uma delícia irresistível.',
      preco: 'R$ 40,00',
      imagem: 'https://receitatodahora.com.br/wp-content/uploads/2024/06/frango-a-parmegiana-1906.jpg',
      sliderImagens: [
        'https://receitatodahora.com.br/wp-content/uploads/2024/06/frango-a-parmegiana-1906.jpg',
        'https://www.estadao.com.br/resizer/v2/ZEIMFVFYV5GABH6YH52MAFRN5A.jpg?quality=80&auth=7ba1eec02078d7d35e0d18afc50a6e3de19c9fbf671835fbda5edbe37998a24f&width=720&height=410&focal=406,339'
      ]
    },
    {
      nome: 'Filé à Parmegiana de Carne',
      descricao: 'Tradicional filé à parmegiana com queijo gratinado',
      descricaoCompleta: 'Tradicional filé à parmegiana com queijo gratinado, feito com carne de primeira qualidade e nosso molho especial.',
      preco: 'R$ 53,00',
      imagem: 'https://lh3.googleusercontent.com/p/AF1QipOmHEjwvesYITCYA76s-4pjr0TzoOv163besyji=s680-w680-h510',
      sliderImagens: [
        'https://lh3.googleusercontent.com/p/AF1QipOmHEjwvesYITCYA76s-4pjr0TzoOv163besyji=s680-w680-h510',
        'https://static.itdg.com.br/images/640-440/f050711088de12b04bf3765ce6dfce8f/342842-original.jpg'
      ]
    },
    {
      nome: 'Filé de Tilápia',
      descricao: 'Filé de tilápia grelhado com ervas',
      descricaoCompleta: 'Filé de tilápia grelhado com ervas finas, peixe fresco e saboroso preparado de forma saudável e deliciosa.',
      preco: 'R$ 46,00',
      imagem: 'https://www.seara.com.br/wp-content/uploads/2025/09/file-de-tilapia-grelhada-portal-minha-rceita.jpg',
      sliderImagens: [
        'https://www.seara.com.br/wp-content/uploads/2025/09/file-de-tilapia-grelhada-portal-minha-rceita.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXO1o60DpQVYPLm-BBZvLWBjky12HllCNoCg&s'
      ]
    },
    {
      nome: 'Filé de Tilápia Empanado',
      descricao: 'Filé de tilápia empanado crocante',
      descricaoCompleta: 'Filé de tilápia empanado crocante, douradinho por fora e macio por dentro, uma opção irresistível.',
      preco: 'R$ 38,00',
      imagem: 'https://www.oliberal.com/image/contentid/policy:1.512441:1647872530/peixe-empanado-almoco-21-03.png?f=3x2&$p$f=a7ee74b',
      sliderImagens: [
        'https://www.oliberal.com/image/contentid/policy:1.512441:1647872530/peixe-empanado-almoco-21-03.png?f=3x2&$p$f=a7ee74b',
        'https://swiftbr.vteximg.com.br/arquivos/ids/206329-768-768/618254-file-de-tilapia-empanado_3.jpg.jpg?v=638809328830830000'
      ]
    }
  ]

  useEffect(() => {
    alert('Seja bem-vindo ao Boteco do Gordinho! Aqui você encontra os melhores petiscos e bebidas geladas! Aproveite!')
  }, [])

  const handleOpenModal = (produto) => {
    setSelectedProduct(produto)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedProduct(null)
  }

  return (
    <div className="produtos-page">
      <main>
        <ul className="produtos-titulo">
          <li className="produtos-item">Cardápio</li>
        </ul>
        <p className="texto-produtos">
          No Boteco do Gordinho você encontra os melhores petiscos e bebidas geladas!<br />
          Venha experimentar nossas delícias e aproveite momentos incríveis com os amigos!
        </p>
        
        <div className="container">
          {produtos.map((produto, index) => (
            <div 
              key={index} 
              className="card" 
              onClick={() => handleOpenModal(produto)}
            >
              <img src={produto.imagem} alt={produto.nome} className="card-img" />
              <h3 className="card-title">{produto.nome}</h3>
              <p className="card-text">{produto.descricao}</p>
              <span className="preco">{produto.preco}</span>
            </div>
          ))}
        </div>
      </main>

      {showModal && selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default Produtos

