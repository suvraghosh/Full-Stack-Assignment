"use client";

import React, { useEffect, useState } from 'react'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import ai from "../../public/ai.png";
import atom from "../../public/atom.png";
import Rocket from "../../public/Rocket.png";
import Image from 'next/image.js';

function Dashboard() {
    const auth = getAuth();
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                router.push("/")
            }
        });
        return () => unsubscribe();
    }, [auth, router]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push("/")
        } catch (error) {
            console.log("Error While Signing out", error.message);
        }
    }

    return (
        <div className='bg-[#192734] h-screen'>
            <div className='flex justify-between p-4 border-b-2 border-[#96999c]'>
                <div className='mx-6'>
                    <h1 className='text-[24px] font-bold'>Lo<span className='bg-[#00B2FF] ml-2 p-1 rounded-md'>Go</span></h1>
                </div>
                <button onClick={handleLogout} className='text-[#00B2FF] mx-6 font-bold font-sans tracking-widest text-[20px]'>
                    Sign Out
                </button>
            </div>

            <div>
                <div className='flex justify-between mx-10 my-5'>
                    <p className='font-sans font-semibold tracking-wider'>Popular Topics 🔥</p>

                    <div className='hidden gap-3 md:flex md:d-block'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-outside-1_4_214" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32" fill="black">
                                <rect fill="white" width="32" height="32" />
                                <path d="M1 7C1 3.68629 3.68629 1 7 1H25C28.3137 1 31 3.68629 31 7V25C31 28.3137 28.3137 31 25 31H7C3.68629 31 1 28.3137 1 25V7Z" />
                            </mask>
                            <path d="M1 7C1 3.68629 3.68629 1 7 1H25C28.3137 1 31 3.68629 31 7V25C31 28.3137 28.3137 31 25 31H7C3.68629 31 1 28.3137 1 25V7Z" fill="#192734" />
                            <path d="M7 2H25V0H7V2ZM30 7V25H32V7H30ZM25 30H7V32H25V30ZM2 25V7H0V25H2ZM7 30C4.23858 30 2 27.7614 2 25H0C0 28.866 3.13401 32 7 32V30ZM30 25C30 27.7614 27.7614 30 25 30V32C28.866 32 32 28.866 32 25H30ZM25 2C27.7614 2 30 4.23858 30 7H32C32 3.13401 28.866 0 25 0V2ZM7 0C3.13401 0 0 3.13401 0 7H2C2 4.23858 4.23858 2 7 2V0Z" fill="#425568" mask="url(#path-1-outside-1_4_214)" />
                            <rect width="18" height="3.2" rx="1" transform="matrix(-1 0 0 1 25 14.4004)" fill="#425568" />
                            <path d="M14 10L8 16L14 22" stroke="#425568" stroke-width="3.2" stroke-linecap="round" />
                        </svg>

                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-outside-1_4_221" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32" fill="black">
                                <rect fill="white" width="32" height="32" />
                                <path d="M1 7C1 3.68629 3.68629 1 7 1H25C28.3137 1 31 3.68629 31 7V25C31 28.3137 28.3137 31 25 31H7C3.68629 31 1 28.3137 1 25V7Z" />
                            </mask>
                            <path d="M1 7C1 3.68629 3.68629 1 7 1H25C28.3137 1 31 3.68629 31 7V25C31 28.3137 28.3137 31 25 31H7C3.68629 31 1 28.3137 1 25V7Z" fill="#192734" />
                            <path d="M7 2H25V0H7V2ZM30 7V25H32V7H30ZM25 30H7V32H25V30ZM2 25V7H0V25H2ZM7 30C4.23858 30 2 27.7614 2 25H0C0 28.866 3.13401 32 7 32V30ZM30 25C30 27.7614 27.7614 30 25 30V32C28.866 32 32 28.866 32 25H30ZM25 2C27.7614 2 30 4.23858 30 7H32C32 3.13401 28.866 0 25 0V2ZM7 0C3.13401 0 0 3.13401 0 7H2C2 4.23858 4.23858 2 7 2V0Z" fill="#425568" mask="url(#path-1-outside-1_4_221)" />
                            <rect x="7" y="14.4004" width="18" height="3.2" rx="1" fill="white" />
                            <path d="M18 10L24 16L18 22" stroke="white" stroke-width="3.2" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>

                <div className='flex gap-4 mx-10'>
                    <div className='w-[360px] h-[222px] border-2 border-[#425568]  flex items-center flex-col rounded-md'>
                        <div className='flex items-center justify-center p-3'>
                            <div className='w-[30%]'>
                                <Image src={Rocket} alt="Rocket" />
                            </div>
                            <div className='w-[208px] h-[137px]'>
                                <h5 className='font-sans font-semibold text-[16px] tracking-wider'>Introduction to Rocket Science</h5>
                                <p className='text-[12px] tracking-wide font-sans mt-2'>Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and </p>
                            </div>
                        </div>
                        <button className='w-[336px] h-[48px] font-sans border-2 border-[#425568] rounded-md font-bold text-[16px] tracking-wide my-1 hidden md:items-center justify-center md:flex'>Read</button>
                    </div>

                    <div className='w-[360px] h-[222px] border-2 border-[#425568]  flex items-center flex-col rounded-md'>
                        <div className='flex items-center justify-center p-3'>
                            <div className='w-[30%]'>
                                <Image src={atom} alt="Atom" />
                            </div>
                            <div className='w-[208px] h-[137px]'>
                                <h5 className='font-sans font-semibold text-[16px] tracking-wider'>Astro Physics</h5>
                                <p className='text-[12px] tracking-wide font-sans mt-2'>Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and </p>
                            </div>
                        </div>
                        <button className='w-[336px] h-[48px] font-sans border-2 border-[#425568] rounded-md font-bold text-[16px] tracking-wide my-1 hidden md:items-center justify-center md:flex'>Read</button>
                    </div>
                    
                    <div className='w-[360px] h-[222px] border-2 border-[#425568]  flex items-center flex-col rounded-md'>
                        <div className='flex items-center justify-center p-3'>
                            <div className='w-[30%]'>
                                <Image src={ai} alt="AI" />
                            </div>
                            <div className='w-[208px] h-[137px]'>
                                <h5 className='font-sans font-semibold text-[16px] tracking-wider'>Artificial Intelligence</h5>
                                <p className='text-[12px] tracking-wide font-sans mt-2'>Covers fundamentals, design, construction, operation and programming of robots.</p>
                            </div>
                        </div>
                        <button className='w-[336px] h-[48px] font-sans border-2 border-[#425568] rounded-md font-bold text-[16px] tracking-wide my-1 hidden md:items-center justify-center md:flex'>Read</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;

// export default page;