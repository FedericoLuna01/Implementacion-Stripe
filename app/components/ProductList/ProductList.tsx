'use client'

import { IProduct } from "@/app/interface";
import Product from "../Product/Product";

import styles from './styles.module.scss'
import { useState } from "react";

interface ProductListProps {
  products: IProduct[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [selected, setSelected] = useState<IProduct | null>(null)

  const handleSelected = (product: IProduct) => {
    return product === selected ? setSelected(null) : setSelected(product)
  }

  return ( 
    <div className={styles.products}>
      {
        products && products.map(product => (
          <Product 
            key={product.id}
            product={product}
            onSelect={handleSelected}
            selected={product.id === selected?.id}
          />
        ))
      }
    </div>
   );
}
 
export default ProductList ;