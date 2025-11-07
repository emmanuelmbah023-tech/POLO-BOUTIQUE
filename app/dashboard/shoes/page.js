import Image from "next/image"

export default function shoes() {
    return(
    <main className="bg-gray-700">
        <h1 className="text black text-2xl">SHOES</h1>
        <div className="grid grid-cols-1 mb-5 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:mb-10">
                <div>
                <Image
                src="/nike blue shoe.webp"
                alt="my-icon"
                width={300}
                height={300}
                className="w-[300] h-[300]   "
                
                />
                <p className="text-gray-400 text-bold text-3xl">nike air</p>
                </div>
                <div>
                  <Image
                  src="/dave.jpg"
                  alt="my-icon"
                  width={300}
                  height={300}
                  className="w-[300] h-[300]"
                  />
                  <p className="text-gray-400 text-bold text-3xl">claks</p>
                </div>
                <div className="">
                  <Image
                  src="/shoes.webp"
                  alt="my-icon"
                  width={300}
                  height={300}
                  className="w-[300] h-[300]"
                  />
                  <p className="text-gray-400 text-bold text-3xl">Berlin</p>
                </div>
                
                <div className="">
                  <Image
                  src="/nike canvas.jpg"
                  alt="my-icon"
                  width={300}
                  height={300}
                  className="w-[300] h-[300]"
                  />
                  <p className="text-gray-400 text-bold text-3xl">nike snickers  </p>
        
                </div>
                <div className="">
                  <Image
                  src="/aunty.webp"
                  alt="my-icon"
                  width={300}
                  height={300}
                  className="w-[300] h-[300]"
                  />
                  <p className="text-gray-400 text-bold text-3xl">nike </p>
        
                </div>
                <div className="">
                  <Image
                  src="/sunny.webp"
                  alt="my-icon"
                  width={300}
                  height={300}
                  className="w-[300] h-[300]"
                  />
                  <p className="text-gray-400 text-bold text-3xl">aiforce 1</p>
        
                </div>
                <div className="">
                  <Image
                  src="/fire.webp"
                  alt="my-icon"
                  width={300}
                  height={300}
                  className="w-[300] h-[300]"
                  />
                  <p className="text-gray-400 text-bold text-3xl">nike jordan</p>
        
                </div>
                <div className="">
                  <Image
                  src="/good.webp"
                  alt="my-icon"
                  width={300}
                  height={300}
                  className="w-[300] h-[300]"
                  />
                  <p className="text-gray-400 text-bold text-3xl">  Naked wolf</p>
        
                </div>
                <div className="">
                  <Image
                  src="/jude.webp"
                  alt="my-icon"
                  width={300}
                  height={300}
                  className="w-[300] h-[300]"
                  />
                  <p className="text-gray-400 text-bold text-3xl">  Naked wolf</p>
        
                </div>
                <div className="">
                  <Image
                  src="/kate.webp"
                  alt="my-icon"
                  width={300}
                  height={300}
                  className="w-[300] h-[300]"
                  />
                  <p className="text-gray-400 text-bold text-3xl">versace</p>
        
                </div>
                <div className="">
                  <Image
                  src="/shoe 6.webp"
                  alt="my-icon"
                  width={300}
                  height={300}
                  className="w-[300] h-[300]"
                  />
                  <p className="text-gray-400 text-bold text-3xl">versace</p>
        
                </div>
                <div className="">
                  <Image
                  src="/shoe 3.webp"
                  alt="my-icon"
                  width={300}
                  height={300}
                  className="w-[300] h-[300]"
                  />
                  <p className="text-gray-400 text-bold text-3xl">versace</p>
        
                </div>
              
                
                
        
              </div>
    </main>
    )
}