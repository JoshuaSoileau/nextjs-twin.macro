import tw from 'twin.macro'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Rounded from './Rounded'

export default function NavLinks({ items, column }) {
  return (
    <nav tw="container mx-auto px-4 py-6">
      <ul
        css={[
          tw`flex justify-between items-center text-lg font-bold`,
          column && tw`flex-col`,
        ]}
      >
        {items.map(({ text, url }) => {
          const router = useRouter()
          const isActive = url === router.pathname

          return (
            <li css={[tw`mb-4`, column && tw`w-full`]} key={text}>
              <Rounded xl>
                <Link
                  css={[
                    tw`block p-6 py-4`,
                    tw`cursor-pointer`,
                    tw`text-16px font-500 font-700`,
                    !isActive && tw`hover:bg-gray-200 text-blue-500`,
                    isActive && tw`bg-indigo-900 text-white`,
                  ]}
                  href={url}
                >
                  {text}
                </Link>
              </Rounded>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
