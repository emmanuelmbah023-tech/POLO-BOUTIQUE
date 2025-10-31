import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export function Footer () {
  
    return (
           <footer className="grid grid-cols-1 py-5 px-5 bg-gray-100 md:grid-cols-2 md:px-16 md:py-5 lg:grid-cols-4 lg:px-20 lg:py-5">
             <div className="">
                <p className="text-2xl font-bold text-black-500">polo boutique</p>
              <Link href="/dashboard/message"><p className="font-thin">About us</p></Link>
                <Link href="/dashboard/about-us"><p className="font-thin">Contact us</p></Link>
               <Link href="https://maps.app.goo.gl/tEMxpqKqosdEC3mG7"> <p className="font-thin">Location</p></Link>
             </div>
             <div>
                <p className="text-2xl font-bold text-black-500">Legal</p>
                <p className="font-thin">Privacy Policy</p>
                <p className="font-thin">Disclaimer</p>
                <p className="font-thin">Term of use</p>
             </div>
             <div>
                <p className="text-2xl font-bold text-black-500">Customer</p>
                <p className="font-thin">Customer Tracking </p>
                <p className="font-thin">Order Management</p>
             </div>
             <div>
                <p className="text-2xl font-bold text-black-500">Socials</p>
                <div className="flex gap-4 mt-2">
                  <Link href="https://www.facebook.com/profile.php?id=61579072534734"><FaFacebookF  className="text-xl text-blue-500 "/></Link>  
                  <Link href="https://www.instagram.com/mbah_emmy?igsh=bWtvbDJpdDZidTly"><FaInstagram className="text-xl text-purple-500 " /></Link> 
                  <Link href="https://vm.tiktok.com/ZSHcJCY63yJN3-saxmM/"><AiFillTikTok  className="text-xl "/></Link>
                  <Link href="https://wa.me/2349110567714"><FaWhatsapp className="text-xl text-green-500"/></Link>

                </div> 
                
                <p className=" mt-5  text-m">call us on</p>
                <div className="flex justify-align hover:text-blue-300">
                <FaPhone /><span className="font-thin phone-number">+2349110567714</span>
                </div>

          
             </div>
           </footer>
    )
}