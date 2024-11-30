function ProductCard({ desconto, imagem, tipo, nome, precoNormal, precoDescontado }) {
    return (
      <article className="product-card"> {/* Tag semântica */}
        <div className="product-card__content">
          {desconto && <p className="product-card__discount">{desconto}% OFF</p>}
          <div className="product-card__image-container">
            <img className="product-card__image" src={imagem} alt={nome} /> {/* Atributo alt */}
          </div>
        </div>
        <div className="product-card__info">
          <p className="product-card__type">{tipo}</p>
          <p className="product-card__name">{nome}</p>
          <div className="product-card__price">
            {precoDescontado ? (
              <>
                <p className="product-card__price--original">$ {precoNormal}</p>
                <p className="product-card__price--discount">$ {precoDescontado}</p>
              </>
            ) : (
              <p className="product-card__price--normal">$ {precoNormal}</p>
            )}
          </div>
        </div>
      </article>
    );
  }
  
  export default ProductCard;