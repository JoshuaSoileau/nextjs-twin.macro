import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import tw from 'twin.macro'
import Rounded from '../components/Rounded'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main tw=" block h-full">
        <div tw="flex gap-4 h-full">
          <div tw="flex-1 gap-4">
            <div tw="prose prose-xl">
              <p tw="font-bold text-zinc-500">Upper subtitle</p>
              <h1>Hello there 👋</h1>
            </div>
            <div tw="w-full flex-1 mb-4">
              <Rounded xl2>
                <div tw="bg-indigo-900 aspect-w-16 aspect-h-9">
                  <div>16x9</div>
                </div>
              </Rounded>
            </div>
            <div tw="flex gap-4">
              <div tw="w-1/3">
                <Rounded xl2>
                  <div tw="bg-pink-200 aspect-w-1 aspect-h-1">
                    <div>1x1</div>
                  </div>
                </Rounded>
              </div>
              <div tw="w-1/3">
                <Rounded xl2>
                  <div tw="bg-pink-200 aspect-w-1 aspect-h-1">
                    <div>1x1</div>
                  </div>
                </Rounded>
              </div>
              <div tw="w-1/3 flex flex-col gap-4">
                <Rounded xl2 border>
                  <div tw="aspect-w-2 aspect-h-1">
                    <div>2x1</div>
                  </div>
                </Rounded>
                <Rounded xl2 border>
                  <div tw="aspect-w-2 aspect-h-1">
                    <div>2x1</div>
                  </div>
                </Rounded>
              </div>
            </div>
          </div>
          <div tw="w-1/3 h-full">
            <Rounded xl twProp={tw`h-full`}>
              <div tw="bg-gray-100 h-full">Right sidebar</div>
            </Rounded>
          </div>
        </div>
      </main>
    </Layout>
  )
}
