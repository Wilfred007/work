import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-red-200 sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/*Mobile Menu*/}

              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Image
                  src='/intern-logo.webp'
                  alt="logo"
                  height={80}
                  width={80}
                  />
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}


export default Navbar;