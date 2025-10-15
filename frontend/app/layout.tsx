
export const metadata = { title: 'Edu CRM' }

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className="p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">O'quv markazi CRM</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
