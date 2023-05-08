import axios from "axios"
import { IProduct } from "./interface"
import ProductList from "./components/ProductList/ProductList"

import styles from './page.module.scss'

export default async function Home() {
  const { data } = await axios.get('http://localhost:3000/api/products')
  const products: IProduct[] = data

  return (
    <main 
      className={styles.container}
    >
      <h1>Prueba implementación de Stripe</h1>
      <ProductList 
        products={products}
      />
    </main>
  )
}
