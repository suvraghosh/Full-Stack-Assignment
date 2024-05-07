"use client";

import { useState, useEffect } from "react";
import app from "../config.js";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Dashboard from "./dashboard/page.js"
import Image from "next/image.js";
import backgroundImage from "../public/bg.jpg";

const Home = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [])

  // Signup using Google
  const signInWithGoogle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (error) {
      console.error("Error Signing in with Google", error.message);
    }
  }

  return (
    <>
      {user ? (
        <Dashboard />
      ) : (
        <div className="h-full w-full bg-[#071829]">
          <div className="flex items-center h-screen gap-10">
            <div className="w-1/2 h-full">
              <Image src={backgroundImage} alt="background-img" className="object-cover h-full" />
            </div>

            <div class="relative py-3 w-1/2 h-[341px]">
              <div className="p-3">
                <h2 className="text-xl text-center">Sign Up</h2>
                <p className="text-[14px] text-center mt-2">Choose a signup method</p>
              </div>
              <div
                class="relative px-4 py-10 mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
              >
                <div class="max-w-md mx-auto text-white">
                  <div class="flex justify-center items-center">
                    <div>
                      <button
                        onClick={signInWithGoogle}
                        class="flex mt-3 items-center justify-center py-2 px-20 bg-[#192734] text-white w-[320px] h-[48px] border-2 border-[#425568] transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg"
                      >
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.3126 10.5415H21.5071V10.5H12.5071V14.5H18.1586C17.3341 16.8285 15.1186 18.5 12.5071 18.5C9.19358 18.5 6.50708 15.8135 6.50708 12.5C6.50708 9.1865 9.19358 6.5 12.5071 6.5C14.0366 6.5 15.4281 7.077 16.4876 8.0195L19.3161 5.191C17.5301 3.5265 15.1411 2.5 12.5071 2.5C6.98458 2.5 2.50708 6.9775 2.50708 12.5C2.50708 18.0225 6.98458 22.5 12.5071 22.5C18.0296 22.5 22.5071 18.0225 22.5071 12.5C22.5071 11.8295 22.4381 11.175 22.3126 10.5415Z" fill="#FFC107" />
                          <path d="M3.6601 7.8455L6.9456 10.255C7.8346 8.054 9.9876 6.5 12.5071 6.5C14.0366 6.5 15.4281 7.077 16.4876 8.0195L19.3161 5.191C17.5301 3.5265 15.1411 2.5 12.5071 2.5C8.6661 2.5 5.3351 4.6685 3.6601 7.8455Z" fill="#FF3D00" />
                          <path d="M12.5071 22.5C15.0901 22.5 17.4371 21.5115 19.2116 19.904L16.1166 17.285C15.1126 18.0455 13.8646 18.5 12.5071 18.5C9.90605 18.5 7.69755 16.8415 6.86555 14.527L3.60455 17.0395C5.25955 20.278 8.62055 22.5 12.5071 22.5Z" fill="#4CAF50" />
                          <path d="M22.3126 10.5415H21.5071V10.5H12.5071V14.5H18.1586C17.7626 15.6185 17.0431 16.583 16.1151 17.2855L16.1166 17.2845L19.2116 19.9035C18.9926 20.1025 22.5071 17.5 22.5071 12.5C22.5071 11.8295 22.4381 11.175 22.3126 10.5415Z" fill="#1976D2" />
                        </svg>

                        <span class="text-[13px] w-full">Sign up with Google</span>
                      </button>
                      <button
                        class="flex mt-3 items-center justify-center py-2 px-20 bg-[#192734] text-white w-[320px] h-[48px] border-2 border-[#425568] transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg"
                      >
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_dd_4_19)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4465 3.5C20.7875 3.5 22.0775 4.03 23.0265 4.981C23.9765 5.93 24.5075 7.21 24.5075 8.55V16.45C24.5075 19.24 22.2375 21.5 19.4465 21.5H9.56751C6.77651 21.5 4.50751 19.24 4.50751 16.45V8.55C4.50751 5.76 6.76651 3.5 9.56751 3.5H19.4465ZM21.0375 10.04L21.1175 9.96C21.3565 9.67 21.3565 9.25 21.1065 8.96C20.9675 8.811 20.7765 8.72 20.5775 8.7C20.3675 8.689 20.1675 8.76 20.0165 8.9L15.5075 12.5C14.9275 12.981 14.0965 12.981 13.5075 12.5L9.00751 8.9C8.69651 8.67 8.26651 8.7 8.00751 8.97C7.73751 9.24 7.70751 9.67 7.93651 9.97L8.06751 10.1L12.6175 13.65C13.1775 14.09 13.8565 14.33 14.5675 14.33C15.2765 14.33 15.9675 14.09 16.5265 13.65L21.0375 10.04Z" fill="white" />
                          </g>
                          <defs>
                            <filter id="filter0_dd_4_19" x="-1.49292" y="0.5" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dy="4" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_19" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dy="4" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend mode="normal" in2="effect1_dropShadow_4_19" result="effect2_dropShadow_4_19" />
                              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_4_19" result="shape" />
                            </filter>
                          </defs>
                        </svg>
                        <span class="text-[13px] w-full">Sign up with Email</span>
                      </button>
                    </div>

                  </div>
                </div>
                    <p className="mt-6 text-center text-[12px]">Already a user? <span className="text-[#00B2FF]">Log in</span></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
