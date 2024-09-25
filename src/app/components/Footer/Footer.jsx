import React from "react";
import { SocialIcon } from "react-social-icons";
import { Divider } from "@nextui-org/react";
import { Quicksand, Dancing_Script } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "700"] });
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Footer = () => {
  return (
    <div className="mx-auto w-full max-w-screen shadow-2xl p-4 h-auto bg-gradient-to-t from-black to-stone-900">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Social Icons Section */}
        <div className="flex flex-col items-center flex-grow max-w-xs">
          <h1
            className={`${dancingScript.className} text-xl font-bold mb-4 text-white text-shadow-md text-center`}
          >
            Connect with Us
          </h1>
          <div className="flex items-center justify-center">
            <SocialIcon url="https://twitter.com" className="mx-2 h-8 w-8" />
            <SocialIcon url="https://facebook.com" className="mx-2 h-8 w-8" />
            <SocialIcon url="https://instagram.com" className="mx-2 h-8 w-8" />
          </div>
        </div>
        {/* Divider for larger screens */}
        <Divider
          className="hidden md:block mx-4 h-32 border-primary"
          orientation="vertical"
        />
        <div
          className={`${quicksand.className} flex flex-col max-w-xs mt-4 md:mt-0 text-left`}
        >
          <p className="text-xs mt-2 text-white text-center">
            2024 Metal Art Solutions.
            <span className="block">All rights reserved.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
