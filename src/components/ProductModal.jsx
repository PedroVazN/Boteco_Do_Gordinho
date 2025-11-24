import { useState } from 'react'
import './ProductModal.css'

function ProductModal({ product, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.sliderImagens.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.sliderImagens.length - 1 : prev - 1
    )
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-slider">
          {product.sliderImagens.length > 1 && (
            <button className="slider-btn prev" onClick={prevImage}>‹</button>
          )}
          
          <img 
            src={product.sliderImagens[currentImageIndex]} 
            alt={product.nome}
            className="modal-image"
          />
          
          {product.sliderImagens.length > 1 && (
            <button className="slider-btn next" onClick={nextImage}>›</button>
          )}
        </div>

        <div className="modal-info">
          <h2>{product.nome}</h2>
          <p className="modal-description">{product.descricaoCompleta}</p>
          <p className="modal-price">{product.preco}</p>
        </div>

        {product.sliderImagens.length > 1 && (
          <div className="slider-dots">
            {product.sliderImagens.map((_, index) => (
              <span 
                key={index}
                className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductModal

