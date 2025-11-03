"use client"
import Image from "next/image"
import { useState } from "react"
import { FaLocationDot } from "react-icons/fa6";



export default function Contactus () {
    const[showSkillsDetail,setShowSkillsDetail] = useState(false);


    const[showExperienceDetail,setShowExperienceDetail] = useState(false);
    const[showEducationDetail, setShowEducationDetail] = useState(false);
    const handleSkillsClick = () =>{
        setShowSkillsDetail(!showSkillsDetail);
    };
    const handleExperienceClick = () => {
    
        setShowExperienceDetail(!showExperienceDetail);
    };
    const handleEducationClick = () => {
        setShowEducationDetail(!showEducationDetail);
    };
    return(
        <main className="bg-gray-800 min-h-screen ">
            
            <div className="profile-container flex gap-5   ">
                <Image 
                src="/MBAH.jpg"
                alt="my-image"
                width={150}   
                height={150}  
                className="profile-image"

            />
            <div className=" gap-[10px] profile-text container ">
                <h2 className="text-2xl text-bold text-gray-200">About Us</h2>
                <p>Mbah Paul  is the visionary leader behind polo boutique and store,driving innovation and growth in the clothing sector.
                      with over 20 years of experience and a proven track record of success, PAUL MBAH brings a unique blend of srategic vision, fashion expertise, 
                    fostering a culture of excellence and growth, and empowering teams to deliver expecptonal results. passionate about the fashion industry,PAUL MBAH is dedicated to polo boutique.</p>
                    <div  className="text-gray-400 span-group flex gap-10 mt-5 justify-center ">
                        <span onClick={handleSkillsClick} className=" hover:text-blue-300 text-xl cursor-pointer ">skills</span>
                        <span  onClick={handleExperienceClick} className="text-xl hover:text-blue-300 cursor-pointer ">Experience</span>
                        <span onClick={handleEducationClick}  className="text-xl hover:text-blue-300 cursor-pointer ">Location</span>
                    </div>
                    {showSkillsDetail &&(
                        <p className="skills-detail text-3xl text-blue-500">emmanuel</p>
                    )}
                    {showExperienceDetail &&(
                        <p className=" experience-detail text-xl text-blue-500 ">Running a boutique is a labor of love.from sourcing unique pieces to creating a welcoming atmosphere, 
                           every detail matters.I take pride in helping customers find their style and making them feel confident and beautiful.it's a rewarding experience to see customers leave with smile, knowing they have found something special. </p>

                    )}
                    {showEducationDetail &&(
                        <div className="flex">
                        <FaLocationDot  className="text-2xl mb-1" /> <span className="text-xl text-black">Besides vital foam depot,old karu road Fct, Abuja Nigeria</span>
                        </div>
                    )}
            
            </div>
            </div>

            


        </main>


    )
}