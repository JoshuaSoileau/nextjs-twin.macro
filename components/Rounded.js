import React from 'react'
import tw from 'twin.macro'

export default function Rounded({
  children,
  md,
  lg,
  xl,
  xl2,
  xl3,
  xl4,
  xl5,
  xl6,
  xl7,
  xl8,
  xl9,
  border,
  twProp,
}) {
  const noSizeSpecified = !(
    !!md ||
    !!lg ||
    !!xl ||
    !!xl2 ||
    !!xl3 ||
    !!xl4 ||
    !!xl5 ||
    !!xl6 ||
    !!xl7 ||
    !!xl8 ||
    !!xl9
  )
  return (
    <div
      css={[
        tw`overflow-hidden`,
        noSizeSpecified && tw`rounded`,
        md && tw`rounded-md`,
        lg && tw`rounded-lg`,
        xl && tw`rounded-xl`,
        xl2 && tw`rounded-2xl`,
        xl3 && tw`rounded-3xl`,
        xl4 && tw`rounded-4xl`,
        xl5 && tw`rounded-5xl`,
        xl6 && tw`rounded-6xl`,
        xl7 && tw`rounded-7xl`,
        xl8 && tw`rounded-8xl`,
        xl9 && tw`rounded-9xl`,
        border && tw`border-2 border-solid border-gray-200`,
        twProp && twProp,
      ]}
    >
      {children}
    </div>
  )
}
