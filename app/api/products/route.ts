import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.SECRET_KEY as string, { apiVersion: "2022-11-15" })

export async function GET (req: NextApiRequest, res: NextApiResponse) {
  try {
    const products = await stripe.products.list({ active: true })

    const productsWithPrice = await Promise.all(
      products.data.map(async (product) => {
        // @ts-ignore
        const price = await stripe.prices.retrieve(product.default_price)
        return {...product , price: price.unit_amount! / 100}
      })
    )

      return NextResponse.json(productsWithPrice)

  } catch (error: any) {
    console.log(error)
    return NextResponse.json(error)
  }
}