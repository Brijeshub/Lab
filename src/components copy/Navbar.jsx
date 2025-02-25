import React from "react";
import logo from '../img/logo.jpg'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home collection", href: "#", current: true },
  { name: "All type test", href: "#", current: true },
  { name: "discount abailble", href: "#", current: true },
  { name: "Contact Me", href: "#", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const phoneNumber = "+91 8808508885";

const addToContacts = () => {
  alert("Contact Us.");
};

function Navbar() {
  return (
    <>
      <div>
        <Disclosure
          as="nav"
          className="bg-slate-300 shadow-gray-400 shadow-md w-[100vw] md:w-full "
        >
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-3 text-gray-900 hover:bg-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-100">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-5 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <img
                    alt="logo"
                    src={logo}
                    className="size-16 rounded-full"
                  />
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "bg-green-500 text-black"
                            : "text-gray-900 hover:bg-green-500 hover:text-black",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="size-5 cursor-pointer " onClick={addToContacts}>
                  <PhoneIcon />
                </div>
                <span className="text-sm mt-2 md:mr-5">
                  <p>
                    <a
                      href={`tel:${phoneNumber}} style={{ color: "blue", textDecoration: "underline" }`}
                    >
                      {phoneNumber}
                    </a>
                  </p>
                  <button onClick={addToContacts}></button>
                </span>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-green-700 text-white"
                      : "text-gray-800 hover:bg-green-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))} */}
             
              <ul className="bg-green-700 text-white hover:bg-green-700 hover:text-white block rounded-md ">
                <li className="px-3 py-2 text-base font-medium">Home collection</li>
                <li className="px-3 py-2 text-base font-medium">Discount availble</li>
                <li className="px-3 py-2 text-base font-medium">Digital and hard copy report service</li>
                <li className="px-3 py-2 text-base font-medium">More Informetion contact Us</li>
              </ul>
           
            </div>
            
          </DisclosurePanel>
        </Disclosure>
      </div>
    </>
  );
}

export default Navbar;
