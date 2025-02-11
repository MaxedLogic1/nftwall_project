import { useState, useEffect } from 'react'
import Logo from '../../assets/img/logo.png'
import LogoWhite from '../../assets/img/logo_white.png'
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
const Header = () => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Add or remove the 'dark' class on the body element
        if (darkMode) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
      }, [darkMode]);
    
    const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("Failed to connect wallet", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };


    const address = "0x7a86c0b064171007716bbd6af96676935799a63e";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
  };

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50); // Adjust the scroll value as needed
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <>
            <header className={`js-page-header fixed  top-0 z-20 w-full backdrop-blur transition-colors
             ${
        isScrolled ? "js-page-header--is-sticky " : "bg-transparent"} ${isMenuOpen ? 'height-100' : ''}`}>
                <div className="flex items-center px-4 py-3 xl:px-20">
                    {/* Logo  */}
                    <Link to={"/"} className="shrink-0">
                       {/* <h1 style={{fontSize: '30px', fontWeight: 'bold'}}>NFTWall</h1> */}
                        <img src={Logo} className="dark:hidden" alt="NFTWall | NFT Marketplace" width={70}/>
                        <img src={LogoWhite} className="hidden  dark:block" alt="NFTWall | NFT Marketplace" width={70} />
                    </Link>

                    {/* Search */}
                    <form className="relative ml-12 mr-8 hidden basis-3/12 lg:block xl:ml-[8%]">
                        <input
                            type="search"
                            className="w-full rounded-2xl border border-jacarta-100 py-[0.6875rem] px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                            placeholder="Search"
                        />
                        <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="h-4 w-4 fill-jacarta-500 dark:fill-white"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                                />
                            </svg>
                        </span>
                    </form>

                    {/* Menu / Actions  */}
                    <div
                        className={`js-mobile-menu  invisible lg:visible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 dark:bg-jacarta-800 lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent ${
                        isMenuOpen ? "nav-menu--is-open" : ""
                        }`}
                    >
                        {/* Mobile Logo / Menu Close  */}
                        <div
                            className="t-0 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 dark:bg-jacarta-800 lg:hidden"
                        >
                            {/* Mobile Logo  */}
                            <Link to={"/"} className="shrink-0">
                                <img src={Logo} className="max-h-7 dark:hidden logo" alt="NFTWall | NFT Marketplace" />
                                <img src={LogoWhite} className="hidden max-h-7 dark:block logo" alt="NFTWall | NFT Marketplace" />
                            </Link>

                            {/* Mobile Menu Close  */}
                            <button onClick={toggleMenu}
                                className="js-mobile-close group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
                                aria-label="close mobile menu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Mobile Search  */}
                        <form action="search" className="relative mt-24 mb-8 w-full lg:hidden">
                            <input
                                type="search"
                                className="w-full rounded-2xl border border-jacarta-100 py-3 px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                                placeholder="Search"
                            />
                            <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="h-4 w-4 fill-jacarta-500 dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                                    />
                                </svg>
                            </span>
                        </form>

                        {/* Primary Nav  */}
                        <nav className="navbar w-full ">
                            <ul className="flex flex-col lg:flex-row">
                                <li className="js-nav-dropdown group relative">
                                    <a href='#home'
                                        className=" flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5"
                                    >Home </a>
                                </li>
                                <li className="js-nav-dropdown group relative">
                                    <a href="#tranding"
                                        className=" flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5"
                                    >Trandings </a>
                                </li>
                                <li className="js-nav-dropdown group relative">
                                    <a href="#collection"
                                        className=" flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5"
                                    >Collections </a>
                                </li>
                                <li className="js-nav-dropdown group relative">
                                    <a href="#buy" 
                                        className=" flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5"
                                    >Buy </a>
                                </li>
                            </ul>
                        </nav>

                        {/* Mobile Connect Wallet / Socials  */}
                        <div className="mt-10 w-full lg:hidden">
                            <a href="#"  onClick={connectWallet}
                                className="js-wallet block w-full rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                data-bs-toggle="modal"
                                data-bs-target="#walletModal"
                            >
                                Connect Wallet
                            </a>

                            <hr className="my-5 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />

                            {/* Socials  */}
                            <div className="flex items-center justify-center space-x-5">
                                <a href="#" className="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="facebook"
                                        className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" className="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="twitter"
                                        className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" className="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="discord"
                                        className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                    >
                                        <path
                                            d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" className="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="instagram"
                                        className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" className="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="tiktok"
                                        className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Actions  */}
                        <div className="ml-8 hidden lg:flex xl:ml-12">
                            {/* Wallet  */}
                            <a href="#"   onClick={connectWallet}
                                className="js-wallet wallet-btn group flex h-10 px-2.5  
                                items-center justify-center rounded-full border
                                 border-jacarta-100 bg-white transition-colors 
                                 hover:border-transparent hover:bg-accent focus:border-transparent 
                                 focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="h-4 w-4 me-2 fill-jacarta-700 transition-colors
                                     group-hover:fill-white group-focus:fill-white dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"
                                    />
                                </svg>
                                <span className='dark:fill-text'>Connect</span>
                            </a>

                            {/* Profile  */}
                            <div className="js-nav-dropdown group-dropdown relative">
                                <button
                                    className="dropdown-toggle group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
                                    id="profileDropdown"
                                    aria-expanded="false"
                                    data-bs-toggle="dropdown"
                                    aria-label="profile"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                            d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    className="dropdown-menu group-dropdown-hover:visible lg:invisible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full group-dropdown-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl"
                                    aria-labelledby="profileDropdown"
                                >
                                    <Tippy content="Copy" placement="top">
                                    <button
                                        className="js-copy-clipboard my-4 flex select-none items-center whitespace-nowrap px-5 font-display leading-none text-jacarta-700 dark:text-white"
                                        data-tippy-content="Copy"
                                        onClick={copyToClipboard}
                                    >
                                        <span className="max-w-[10rem] overflow-hidden text-ellipsis"
                                        > {address}</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="ml-1 mb-px h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z"
                                            />
                                        </svg>
                                    </button>
                                    </Tippy>
                                    <div className="mx-5 mb-6 rounded-lg border border-jacarta-100 p-4 dark:border-jacarta-600">
                                        <span className="text-sm font-medium tracking-tight dark:text-jacarta-200">Balance</span>
                                        <div className="flex items-center">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0"
                                                y="0"
                                                viewBox="0 0 1920 1920"
                                                xml:space="preserve"
                                                className="-ml-1 mr-1 h-[1.125rem] w-[1.125rem]"
                                            >
                                                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                                                <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path>
                                                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                                                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                                                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                                            </svg>
                                            <span className="text-lg font-bold text-green">10 OZONE</span>
                                        </div>
                                    </div>
                                    <Link to={"/profile"}
                                        className="flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="h-4 w-4 fill-jacarta-700 transition-colors dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path
                                                d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                                            ></path>
                                        </svg>
                                        <span className="mt-1 font-display text-sm text-jacarta-700 dark:text-white">My Profile</span>
                                    </Link>
                                  
                                    <a
                                        href="#"
                                        className="flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="h-4 w-4 fill-jacarta-700 transition-colors dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z"
                                            />
                                        </svg>
                                        <span className="mt-1 font-display text-sm text-jacarta-700 dark:text-white">Sign out</span>
                                    </a>
                                </div>
                            </div>

                            {/* Dark Mode  */}
                            <a href="#" className="js-dark-mode-trigger group ml-2  flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
                             onClick={() => {
                                setDarkMode(!darkMode);
                              }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className={`dark-mode-light h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white ${
                                     darkMode ? "hidden" : "block"
                                    }`}
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className={`dark-mode-dark hidden h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white ${
                                    darkMode ? "block dark:fill-white" : "hidden"
                                    }`}
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Actions  */}
                    <div className="ml-auto flex lg:hidden">
                        {/* Profile  */}
                        <a href="#"
                            className="group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
                            aria-label="profile"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                                />
                            </svg>
                        </a>

                        {/* Dark Mode  */}
                        <a href="#" className="js-dark-mode-trigger group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
                          onClick={() => {
                            setDarkMode(!darkMode);
                          }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className={`dark-mode-light h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white ${
                                    darkMode ? "hidden" : "block"
                                   }`}
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"
                                />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className={`dark-mode-dark hidden h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white${
                                    darkMode ? "block" : "hidden"
                                    }`}
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
                                />
                            </svg>
                        </a>

                        {/* Mobile Menu Toggle  */}
                        <button  onClick={toggleMenu}
                            className="js-mobile-toggle group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
                            aria-label="open mobile menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header