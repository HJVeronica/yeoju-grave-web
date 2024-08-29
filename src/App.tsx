import { useState } from 'react';
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
// } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogPanel } from '@headlessui/react';

import './App.css';

const MENU_ITEMS = [
  { name: 'Home', href: '#', url: '/home', current: true },
  { name: '인사말', href: '#', url: '/about', current: false },
  { name: '서비스', href: '#', url: '/service', current: false },
  { name: '연락처', href: '#', url: '/contact', current: false },
  { name: '오시는 길', href: '#', url: '/location', current: false },
];

// function classNames(...classes: (string | boolean)[]) {
//   return classes.filter(Boolean).join(' ');
// }

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // <Disclosure as="nav" className="bg-gray-800">
    //   <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
    //     <div className="relative flex h-16 items-center justify-between">
    //       <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //         {/* Mobile menu button*/}
    //         <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    //           <span className="absolute -inset-0.5" />
    //           <span className="sr-only">Open main menu</span>
    //           <Bars3Icon
    //             aria-hidden="true"
    //             className="block h-6 w-6 group-data-[open]:hidden"
    //           />
    //           <XMarkIcon
    //             aria-hidden="true"
    //             className="hidden h-6 w-6 group-data-[open]:block"
    //           />
    //         </DisclosureButton>
    //       </div>
    //       <div className="flex flex-1 items-center justify-center sm:items-stretch ">
    //         <div className="logo flex-shrink-0 items-center">
    //           <a href="/" className="text-white text-xl">
    //             여주장묘개발
    //           </a>
    //           {/* <img
    //             alt="여주장묘개발"
    //             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
    //             className="h-8 w-auto"
    //           /> */}
    //         </div>
    //         <div className="hidden sm:ml-6 sm:block">
    //           <div className="flex space-x-4">
    //             {MENU_ITEMS.map((item) => (
    //               <a
    //                 key={item.name}
    //                 href={item.href}
    //                 aria-current={item.current ? 'page' : undefined}
    //                 className={classNames(
    //                   item.current
    //                     ? 'bg-gray-900 text-white'
    //                     : 'text-gray-300 hover:bg-gray-700 hover:text-white',
    //                   'rounded-md px-3 py-2 text-sm font-medium'
    //                 )}
    //               >
    //                 {item.name}
    //               </a>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <DisclosurePanel className="sm:hidden">
    //     <div className="space-y-1 px-2 pb-3 pt-2">
    //       {MENU_ITEMS.map((item) => (
    //         <DisclosureButton
    //           key={item.name}
    //           as="a"
    //           href={item.href}
    //           aria-current={item.current ? 'page' : undefined}
    //           className={classNames(
    //             item.current
    //               ? 'bg-gray-900 text-white'
    //               : 'text-gray-300 hover:bg-gray-700 hover:text-white',
    //             'block rounded-md px-3 py-2 text-base font-medium'
    //           )}
    //         >
    //           {item.name}
    //         </DisclosureButton>
    //       ))}
    //     </div>
    //   </DisclosurePanel>
    // </Disclosure>

    <div className="bg-white">
      <header className="absolute right-0 top-0 z-50 w-full navbar">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8 lg:justify-center bg-fixed"
        >
          <div className="logo">
            <a href="#" className="-m-1.5 p-1.5 ">
              여주장묘개발
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                여주장묘개발
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {MENU_ITEMS.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* first section / home */}
      <div className="first-section relative isolate px-6 pt-14 lg:px-8 h-screen">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h2 className="mb-6 text-3xl text-white">
              올바른 장묘문화를 선도합니다
            </h2>
            <h1 className="text-6xl font-bold tracking-tight text-white sm:text-8xl">
              여주장묘개발
            </h1>

            <p className="mt-10 text-2xl leading-8 text-white">
              장례토탈 / 유골함 / 묘이장 / 굴삭기 임대
            </p>
            <p className="mt-3 text-2xl leading-8 text-white">
              TEL.031-884-4114
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950"
              >
                더 알아보기
              </a>
              {/* <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* about 인사말 */}
      <div className="second-section px-6 pt-14 lg:px-8 h-screen">
        <div className="wrapper mx-auto">
          <img
            src="https://yeoju-grave-web.s3.ap-northeast-2.amazonaws.com/public/yeoju-grave-web/about.jpg"
            alt="인사말"
            className="w-full object-cover"
          />

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            여주장묘개발 소개
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
