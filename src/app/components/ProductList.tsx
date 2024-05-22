import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap  ">

      <Link
        href={"/test"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/13443771/pexels-photo-13443771.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 "
          />
          <Image
            src="https://images.pexels.com/photos/13443775/pexels-photo-13443775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$59</span>
        </div>
        <div className="text-sm text-gray-500">Product description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-sm hover:bg-lama hover:text-white">
          Add to cart
        </button>
      </Link>
      <Link
        href={"/test"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/3908800/pexels-photo-3908800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 "
          />
          <Image
            src="https://images.pexels.com/photos/8125843/pexels-photo-8125843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$59</span>
        </div>
        <div className="text-sm text-gray-500">Product description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-sm hover:bg-lama hover:text-white">
          Add to cart
        </button>
      </Link>
      <Link
        href={"/test"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/10718100/pexels-photo-10718100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 "
          />
          <Image
            src="https://images.pexels.com/photos/11363305/pexels-photo-11363305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$59</span>
        </div>
        <div className="text-sm text-gray-500">Product description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-sm hover:bg-lama hover:text-white">
          Add to cart
        </button>
      </Link>
  
      <Link
        href={"/test"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1860160/pexels-photo-1860160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 "
          />
          <Image
            src="https://images.pexels.com/photos/37158/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$59</span>
        </div>
        <div className="text-sm text-gray-500">Product description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-sm hover:bg-lama hover:text-white">
          Add to cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
