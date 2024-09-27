import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Head from 'next/head'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import PhotoBooth from '@/components/photoBooth'
import SinglePhotoBooth from '@/components/singlePhoto'
import FooterBar from '@/components/footer.component'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white isolate mb-5">
      <Head>
        <title>Aruna Printers</title>
        <link rel="icon" href="https://icons.iconarchive.com/icons/twitter/twemoji-alphabet/256/Letter-A-icon.png" />
      </Head>
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1100FF" />
              <stop offset={1} stopColor="#FF0000" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Aruna Offset Printers</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-0 z-10 px-6 py-6 overflow-y-auto bg-white lg:hidden">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Aruna Offset Printers</span>
                <img className="h-14" src="https://media.discordapp.net/attachments/673195908850253834/1074732767214043166/logo.png" alt="arunaprinters" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="max-w-2xl py-10 mx-auto sm:py-20 ">
            {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative px-3 py-1 text-sm leading-6 text-gray-600 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our Website is Under devlopment.{' '}
                <a href="https://media.discordapp.net/attachments/673195908850253834/1074732767214043166/logo.png" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div> */}
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 drop-shadow-lg topic sm:text-6xl">
                Aruna Offset Printers</h1>
              <p className="mt-6 leading-8 text-gray-600 uppercase text-lg font-extrabold">
                Welcome to Aruna Offset Printers Bandaragama. <hr />
              </p>
              <p>
                <span className='text-lg font-extrabold uppercase'>Call us</span> <br /> <span className='text-lg font-extrabold uppercase'> Aruna Rathnayake : 071-800 26 31</span> <br />
                <span className='text-lg font-extrabold uppercase'>Kalana Rathnayake : 077-15 56 157</span> <br />
                Email us - arunaprint@yahoo.com / kalanagayanga8@gmail.com</p>
              <div className="flex items-center justify-center mt-10 gap-x-6">
                <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/U46gJeQAg7kgdKzB7"
                  className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Office Location
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/U46gJeQAg7kgdKzB7" className="text-base font-semibold leading-7 text-gray-900 topic">
                  Click here<span aria-hidden="true">→</span>

                </a>
              </div>
              <div className="flex items-center justify-center mt-10 gap-x-6">
                <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/nxWjxiYLeCALTDXx8"
                  className=" rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Press Location
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/nxWjxiYLeCALTDXx8" className="text-base font-semibold leading-7 text-gray-900 topic">
                  Click here<span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1056EE" />
                  <stop offset={1} stopColor="#FF0000E9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
      <div className='pb-20'>
        <SinglePhotoBooth />
        <PhotoBooth />
      </div>
      <FooterBar />

    </div>
  )
}