import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="mt-16 items-center gap-8 p-8  bg-[url('/pink-cloud.png')] bg-cover bg-top bg-no-repeat">
        <div className="flex w-full items-start py-6 flex-col justify-center md:flex-row lg:flex-row md:justify-between lg:justify-between sm:max-w-xl md:max-w-3xl lg:max-w-7xl lg:px-6">
            <div className="flex flex-col gap-4 items-center md:items-start">
                <Link href="" className="flex items-center">
                    <Image src="/logo.png" alt="GiggleGear" width={36} height={36} />
                    {/* <p className="hidden md:block text-md font-medium tracking-wider text-white">GiggleGear</p> */}
                    <div className="items-center hidden md:flex text-md font-medium tracking-wider">
                    <p className="text-teal-400">Giggle</p>
                    <p className="text-pink-400">Gear</p>
                    </div>
                </Link>
                <p className="text-sm ">© 2025 GiggleGear</p>
                <p className="text-sm">All right reserved.</p>
            </div>
            <div className="flex flex-col text-nowrap gap-4 text-sm items-center md:items-start">
                <span className="uppercase block text-sm text-pink-400 font-bold">link</span>
                <ul className="mt-2 space-y-2">
                    <li><Link className="text-sm hover:underline" href="/">Home</Link></li>
                    <li><Link className="text-sm hover:underline" href="/">Shop</Link></li>
                    <li><Link className="text-sm hover:underline" href="/">About us</Link></li>
                    <li><Link className="text-sm hover:underline" href="/">Blog</Link></li>
                    <li><Link className="text-sm hover:underline" href="/">Login/Sign up</Link></li>
                </ul>
            </div>
            <div className="flex flex-col text-nowrap gap-4 text-sm items-center md:items-start">
                <span className="uppercase block text-sm text-pink-400 font-bold">Social Media</span>
                <ul className="mt-2 space-y-2">
                    <li><Link className="text-sm hover:underline" href="/">Facebook</Link></li>
                    <li><Link className="text-sm hover:underline" href="/">Instagram</Link></li>
                    <li><Link className="text-sm hover:underline" href="/">Youtube</Link></li>
                    <li><Link className="text-sm hover:underline" href="/">X</Link></li>
                </ul>
            </div>
            <div className="flex flex-col text-nowrap gap-4 text-sm items-center md:items-start">
                <span className="uppercase block text-sm text-pink-400 font-bold">Contact Information</span>
                <ul className="mt-2 space-y-2">
                    <li><Link className="text-sm hover:underline" href="/">support@kidswebshop.com</Link></li>
                    <li><Link className="text-sm hover:underline" href="/">+123-456-7890</Link></li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer