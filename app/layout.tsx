
export const metadata = {
  title: 'FOKO LLC',
  description: 'Site oficial da FOKO LLC - Pisos, azulejos e remodelações.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  )
}
