import 'twin.macro'
import NavLinks from './NavLinks'

const navigationItems = [
  { text: 'Home', url: '/' },
  { text: 'About', url: '/home' },
  { text: 'Contact', url: '#' },
]

export default function Layout({ children }) {
  return (
    <div tw="flex min-h-screen font-sans">
      <div tw="w-64 border border-r border-solid border-gray-100 mr-12">
        <p tw="container mx-auto px-4 py-6 text-6 font-bold  flex items-center">
          <span tw="w-10 h-10 rounded-full bg-zinc-900 mr-4"></span>Logo here
        </p>
        <NavLinks items={navigationItems} column />
      </div>
      <div tw="flex-1 pl-4 block">{children}</div>
    </div>
  )
}
