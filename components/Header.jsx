import Link from "next/link";
import React, { useState, useEffect } from "react";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { FaUser, FaSearch } from "react-icons/fa";
import { VscChromeClose } from 'react-icons/vsc';
import { BiMenuAltRight } from 'react-icons/bi';

import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

import SearchPage from "./SearchPage";

const Header = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("-translate-y-[90px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  // backdrop-filter backdrop-blur-lg bg-opacity-5

  return (
    <>
      <header
        // backdrop-filter backdrop-blur-lg bg-opacity-30
        className={`w-full h-[80px] md:h-[100px] px-10 border bg-white flex items-center justify-between z-20 fixed  top-0 transition-transform duration-300 shadow-1xl ${show}`}
      >
        <div className="h-[80%]">
          <Link href="/">
            <img
              src="/kesha-logo.png"
              alt="logo"
              className="h-[100%]"
            />
          </Link>
        </div>

        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
        />

        {
          mobileMenu &&
          <MobileMenu
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        }

        <div className="text-black flex items-center justify-center">
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] hover:bg-blacl/[0.05] cursor-pointer relative">
            <FaSearch onClick={() => setShowSearch(true)} />
          </div>
          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-blacl/[0.05] cursor-pointer relative">
              <IoMdHeartEmpty className="text-[15px] md:text-[20px]" />
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">5</div>
            </div>
          </Link>

          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-blacl/[0.05] cursor-pointer relative" >
              <BsCart className="text-[15px] md:text-[20px]" />
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">5</div>
            </div>
          </Link>

          <Link href={`/signup`}>
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-blacl/[0.05] cursor-pointer relative">
              <FaUser />
            </div>
          </Link>

          {/* mobileMenu */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] corsor-pointer relative -mr-2 md:hidden">
            {mobileMenu ? (
              <VscChromeClose className="text-[16px]" onClick={() => setMobileMenu(false)} />
            ) : (
              <BiMenuAltRight className="text-[20px]" onClick={() => setMobileMenu(true)} />
            )}
          </div>

        </div>
      </header >
      {showSearch && <SearchPage setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
