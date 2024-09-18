
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Whether you're looking for a full yard transformation or ongoing lawn
          care, we’re here to help.
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <Link
              className="text-gray-700 transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              Home{" "}
            </Link>
          </li>

          <li>
            <Link
              className="text-gray-700 transition hover:text-gray-700/75"
              href="/#features"
            >
              {" "}
              Services{" "}
            </Link>
          </li>

          <li>
            <Link
              className="text-gray-700 transition hover:text-gray-700/75"
              href="/projects"
            >
              {" "}
              Projects{" "}
            </Link>
          </li>

          <li>
            <Link
              className="text-gray-700 transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              Contact{" "}
            </Link>
          </li>


        </ul>

     
        <p className="mt-12 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} 2AutomateAnything. All rights reserved.
        </p>
      </div>
    </footer>
  );
}



export default Footer