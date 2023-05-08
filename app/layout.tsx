import './globals.scss'

export const metadata = {
  title: 'Prueba implementación de Stripe',
  description: 'Aprendiendo a usar Next y Stripe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
