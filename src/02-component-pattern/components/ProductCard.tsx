import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      <img className={styles.productImg} src='./coffee-mug.png' alt='Coffe Mug' />
      {/*<img className={styles.productImg} src={noImage} alt='Coffe Mug' />*/}
    </div>

  )
}

export default ProductCard