import { Poppins } from 'next/font/google'
import '../globals.css'
import { Components } from '@/components'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Puslitbang | BMKG',
  description: 'Pusat Penelitian dan Pengembangan BMKG',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex h-screen">
          <Components.SidebarDashboard />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Components.NavbarDashboard />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
              {children}
            </main>
            <Components.FooterDashboard />
          </div>
        </div>
      </body>
    </html>
  )
}
