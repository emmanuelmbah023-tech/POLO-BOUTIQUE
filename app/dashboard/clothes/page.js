import Image from "next/image"

export default function shirt () {
    return(
        <main className="bg-gray-700">
            <h1 className="text-4xl text-gray-700 text-bold">clothes</h1>
            
                  <div className="grid grid-cols-2 mb-5 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:mb-10">
                    <div className="">
                      <Image
                      src="/shirt 1.webp"
                      alt="my-icon"
                      width={300}
                      height={300}
                      className="w-[300] h-[300] hover:text-blue-300"
                      />
                      <div></div>
                      <p className="text-gray-400 text-bold text-3xl">nike jordan</p>
            
                    </div>
                    <div className="">
                      <Image
                      src="/shirt 4.webp"
                      alt="my-icon"
                      width={300}
                      height={300}
                      className="w-[300] h-[300]"
                      />
                      <p className="text-gray-400 text-bold text-3xl">nike jordan</p>
            
                    </div>
                    <div className="">
                      <Image
                      src="/shirt 5.webp"
                      alt="my-icon"
                      width={300}
                      height={300}
                      className="w-[300] h-[300]"
                      />
                      <p className="text-gray-400 text-bold text-3xl">nike jordan</p>
            
                    </div>
                    <div className="">
                      <Image
                      src="/shirt 6.webp"
                      alt="my-icon"
                      width={300}
                      height={300}
                      className="w-[300] h-[300]"
                      />
                      <p className="text-gray-400 text-bold text-3xl">nike jordan</p>
            
                    </div>
                    <div className="">
                      <Image
                      src="/shirt 7.webp"
                      alt="my-icon"
                      width={300}
                      height={300}
                      className="w-[300] h-[300]"
                      />
                      <p className="text-gray-400 text-bold text-3xl">nike jordan</p>
            
                    </div>
                    <div className="">
                      <Image
                      src="/shirt 8.webp"
                      alt="my-icon"
                      width={300}
                      height={300}
                      className="w-[300] h-[300]"
                      />
                      <p className="text-gray-400 text-bold text-3xl">nike jordan</p>
            
                    </div>
                    <div className="">
                      <Image
                      src="/shirt 2.webp"
                      alt="my-icon"
                      width={300}
                      height={300}
                      className="w-[300] h-[300]"
                      />
                      <p className="text-gray-400 text-bold text-3xl">nike jordan</p>
            
                    </div>
                    <div className="">
                      <Image
                      src="/shirt 3.webp"
                      alt="my-icon"
                      width={300}
                      height={300}
                      className="w-[300] h-[300]"
                      />
                      <p className="text-gray-400 text-bold text-3xl">nike jordan</p>
            
                    </div>
                    </div>
            
        </main>
    )
}