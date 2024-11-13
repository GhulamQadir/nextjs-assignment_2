import Link from "next/link";

function Navbar() {
  return (
    <div className="w-11/12 flex justify-center pt-4 mx-auto">
      <div className="w-56">
        <p className="font-montserrat font-bold text-white text-2xl py-2">
          Brand Name
        </p>
      </div>
      <div className="flex justify-between w-1/2">
        <div className="flex gap-8 py-4">
          <Link href="/" className="text-white text-sm font-bold">
            Home
          </Link>
          <Link href="/" className="text-white text-sm font-bold">
            Product
          </Link>
          <Link href="/" className="text-white text-sm font-bold">
            Pricing
          </Link>
          <Link href="/" className="text-white text-sm font-bold">
            Contact
          </Link>
        </div>
        <div>
          <Link href="/" className="text-white text-sm font-bold">
            Login
          </Link>
          <button className="bg-sky-500 text-sm font-bold px-6 py-4 ml-6 text-white rounded-sm">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
