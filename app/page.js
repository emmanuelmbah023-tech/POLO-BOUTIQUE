import Image from "next/image"


export default function Home() {
  return (
    <main className="bg-black text-gray-300 min-h-screen font-sans ">
      <div className="flex flex-cols-3 justify-center items-center bg-gray-300">
        <ul className="gap-6 flex text-gray-600">
          <li className="cursor-pointer hover:text-blue-500">SHOES</li>
          <li className="cursor-pointer hover:text-blue-500">CLOTHES</li>
          <li className="cursor-pointer hover:text-blue-500">BAGS</li>
        </ul>
      </div>

      <div>
        <Image
        src="/photo.jpg"
        alt="my-icon"
        width={500}
        height={500}
        className="w-full h-[500px] bg-blue-500  bg-no-repeat min-h-screen cursor-pointer"
        />
        <div>
          <marquee className="text-bold text-2xl" behaviour="" direction="bg-gray">welcome to polo boutique, home of luxuary. At affordable prices at your door step, we do delivery at home, offices,schools etc. At the best rate that no store can beat locations:Abuja,lagos,Enugu. you can visit us on www.polo boutique.com or contact us on mobile:whatsapp number:08100833816 Tel phone:08066273740 or 08030680976</marquee>
        </div>
      </div>
      
        <h1 className="text-4xl text-bold text-white">SHOES</h1>
        <div className="grid grid-cols-4 gap-10">
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
      <h1 className="text-4xl text-gray-700 text-bold">clothes</h1>

      <div className="grid grid-cols-4 gap-10">
        <div className="">
          <Image
          src="/shirt 1.webp"
          alt="my-icon"
          width={300}
          height={300}
          className="w-[300] h-[300] hover:text-blue-300"
          />
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
