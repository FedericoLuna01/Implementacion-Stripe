import { IProduct } from "@/app/interface";
import Image from "next/image";

import styles from './styles.module.scss'

interface ProductProps {
  product: IProduct
  onSelect: (product: IProduct) => void
  selected: boolean
}

const Product: React.FC<ProductProps> = ({ product, onSelect, selected }) => {
  const { images, name, id, price } = product
  return ( 
    <div 
      className={`${styles.product} ${selected ? styles.isSelected : ''} `}
      onClick={() => onSelect(product)}
    >
      <div className={styles.imgContainer}>
      {
        images && (
          <Image 
            src={images[0]}
            alt={name}
            width={200}
            height={200}
          />
        )
      }
        <div className={styles.priceContainer}>
          <p>${price}</p>  
        </div>
      </div>
      <p>{name}</p>
      {selected && <span>Producto seleccionado</span>}
    </div>
   );
}
 
export default Product ;