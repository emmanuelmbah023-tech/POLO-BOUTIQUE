import Image from "next/image"
import Link from "next/link"
import React from "react"




export default function Home() {
  return (
    <main className="bg-black text-gray-300 min-h-screen font-sans ">
      <div className="flex flex-cols-3 justify-center items-center bg-gray-300">
        <ul className="gap-6 flex text-gray-600">
         <Link href="/dashboard/shoes"> <li className="cursor-pointer hover:text-blue-500">SHOES</li></Link>
          <Link href="/dashboard/clothes"><li className="cursor-pointer hover:text-blue-500">CLOTHES</li></Link>
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
      
    
          <h1 className="text-2xl  text-bold text-center">New arrivals</h1>
          <div className="grid grid-cols-2 mb-5 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:mb-10">
      


      
        
          
           <div className="">
           <Image
            src="/tiv.webp"
             alt="my-icon"
             width={300}
              height={300}
             className="w-[300] h-[300]"
           />
           <p className="text-gray-400 text-bold text-3xl">nike jordan</p>
                        
         </div>
       <div className="gap-10">
          <Image
           src="/had.webp"
           alt="my-icon"
           width={300}
           height={300}
           className="w-[300] h-[300]"
             />
              <p className="text-gray-400 text-bold text-3xl">nike jordan</p>
            
           </div>
           <div className="gap-10">
          <Image
           src="/ted.webp"
           alt="my-icon"
           width={300}
           height={300}
           className="w-[300] h-[300]"
             />
              <p className="text-gray-400 text-bold text-3xl">nike jordan</p>
            
           </div>
           <div className="gap-10">
          <Image
           src="/keg 2.webp"
           alt="my-icon"
           width={300}
           height={300}
           className="w-[300] h-[300]"
             />
              <p className="text-gray-400 text-bold text-3xl">nike jordan</p>
            
           </div>
           <div className="gap-10">
          <Image
           src="/cac.webp"
           alt="my-icon"
           width={300}
           height={300}
           className="w-[300] h-[300]"
             />
              <p className="text-gray-400 text-bold text-3xl">nike jordan</p>
            
           </div>
           <div className="gap-10">
          <Image
           src="/fac.webp"
           alt="my-icon"
           width={300}
           height={300}
           className="w-[300] h-[300]"
             />
              <p className="text-gray-400 text-bold text-3xl">nike jordan</p>
            
           </div>
           
           <div className="gap-10">
          <Image
           src="/key.webp"
           alt="my-icon"
           width={300}
           height={300}
           className="w-[300] h-[300]"
             />
              <p className="text-gray-400 text-bold text-3xl">nike jordan</p>
            
           </div>
           <div className="gap-10">
          <Image
           src="/lim.webp"
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
