
import { TextField } from "@mui/material"



export default function login () {


    return (
        <main className="min-h-screen flex justify-center px-2 md:px-12 md:py-6 lg:py-12 lg:px-16">
          <div className="w-full md:w-[350px]  max-h-auto flex flex-col gap-8 rounded md:shadow-md md:px-3 md:py-4">
            <div >
              <h1 className="text-3xl font-semibold text-center">CONTACT US</h1>
              <p className="text-black-300 text-center">Please complete the form below to contact us.</p>
            </div>
            <form className="justify-items-center">
               <div className="w-full mb-2">
                  <TextField
                  placeholder="Your name"
                  type="Name"
                  className="w-full"/>
                  </div>
                  <div className="w-full mb-2">
                  <TextField
                  placeholder="Your Email"
                  type="email"
                  className="w-full"/>
                  </div>
                  <div className="w-full mb-2">
                  <TextField
                  placeholder="Your phone"
                  type="phone"
                  className="w-full"/>
                  </div>
                   <div className="w-full mb-2">
                  <TextField
                  placeholder="Your messages"
                  type="text"
                    multiline
                    rows={4}
                  className="w-full "/>
                  </div>
                  <button type="submit" className="text-white bg-gray-800 rounded-md w-full hover:opacity-40 p-3 mt-2">Continue</button>
               
            </form>
            
           
    
   
             

          </div>
           
        </main>           
    )
}
