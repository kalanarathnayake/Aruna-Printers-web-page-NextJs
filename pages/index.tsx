/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  // { name: 'Product', href: '#' },
  // { name: 'Features', href: '#' },
  // { name: 'Marketplace', href: '#' },
  // { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true)

  return (
    <div className="isolate bg-white">
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
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Aruna Offset Printers</span>
              <img className="h-14" src="https://media.discordapp.net/attachments/939514100361351208/1074618548191772703/logo.png" alt="arunaprinters" />
            </a>
          </div>
        </nav>
      </div>

      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Aruna Offset Printers
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to Aruna Offset Printers Bandaragama.
              </p>
            </div>
          </div>
          
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
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
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
  )
}


// import Image from "next/image"
// import cat1 from "../public/images/cat1.gif"
// import cat2 from "../public/images/cat2.gif"
// import cat3 from "../public/images/cat3.gif"

// export default function Home() {
//   return (
//     <div className='flex flex-col items-center justify-center w-full h-screen space-y-8 lg-flex-row '>
//       <h1 className='text-3xl'>The Cat App</h1>
//       <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
//         <Image
//           objectFit="cover"
//           src={cat1}
//           alt='Picture of Cat1'
//           layout='fill'
//           priority
//         />
//       </div>
//       <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
//         <Image
//           objectFit="cover"
//           src={cat2}
//           alt='Picture of Cat1'
//           layout='fill'
//           priority
//         />
//       </div>
//       <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
//         <Image
//           objectFit="cover"
//           src={cat3}
//           alt='Picture of Cat1'
//           layout='fill'
//           priority
//         />
//       </div>
//     </div>
//   )
// }
// <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:text-center">
//           <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Deploy faster</h2>
//           <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             Everything you need to deploy your app
//           </p>
//           <p className="mt-6 text-lg leading-8 text-gray-600">
//             Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
//             pulvinar et feugiat blandit at. In mi viverra elit nunc.
//           </p>
//         </div>
//         <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
//           <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
//             {features.map((feature) => (
//               <div key={feature.name} className="relative pl-16">
//                 <dt className="text-base font-semibold leading-7 text-gray-900">
//                   <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
//                     <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
//                   </div>
//                   {feature.name}
//                 </dt>
//                 <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </div>
//     </div>

