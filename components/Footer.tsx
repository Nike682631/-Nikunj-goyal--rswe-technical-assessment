import Image from "next/image";
import TitleBarLogo from "../public/icons/titlebar-logo.png";
import LanguageDropdown from "./LanguageDropdown";

export default function Footer() {
  const languageOptions = [
    {
      label: (
        <Image
          width={28}
          height={18}
          alt="United States"
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/SG.svg"
        />
      ),
      value: "",
    },
    {
      label: (
        <Image
          width={28}
          height={18}
          alt="United States"
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
        />
      ),
      value: "",
    },
  ];

  return (
    <div className="px-[120px] pt-[113px] pb-16 flex flex-col">
      <Image src={TitleBarLogo} alt="TitleBar Logo" className="w-[153px] h-7" />
      <div role="footer-body" className="py-14 grid grid-cols-8">
        <div className="col-span-2 flex flex-col gap-4 mr-[38px]">
          <h5 className="text-2xl leading-9">
            Stay up to date on the latest EVFY news
          </h5>
          <p className="text-[#0000008A] leading-6">
            Our newsletters are a concentrated blast of all the latest from
            EVFY: news, events, product information and more.
          </p>
        </div>
        <div className="col-span-6 grid grid-cols-5">
          <div className="col-span flex flex-col gap-7 pl-10">
            <div role="footer-link-header" className="font-semibold leading-5">
              EVFY
            </div>
            <div role="footer-link-body" className="grid grid-rows-4 gap-4">
              <div className="text-sm text-[#000000DE] cursor-pointer hover:underline">
                Home
              </div>
              <div className="text-sm text-[#000000DE] cursor-pointer hover:underline">
                About EVFY
              </div>
              <div className="text-sm text-[#000000DE] cursor-pointer hover:underline">
                Contact Us
              </div>
              <div className="text-sm text-[#000000DE] cursor-pointer hover:underline">
                FAQ
              </div>
            </div>
          </div>
          <div className="col-span flex flex-col gap-7 pl-10">
            <div role="footer-link-header" className="font-semibold leading-5">
              EV Cars
            </div>
            <div role="footer-link-body" className="grid grid-rows-4 gap-4">
              <div className="text-sm text-[#000000DE] cursor-pointer hover:underline">
                EV Brands
              </div>
              <div className="text-sm text-[#000000DE] cursor-pointer hover:underline">
                Car Types
              </div>
              <div className="text-sm text-[#000000DE] cursor-pointer hover:underline">
                EV Types
              </div>
            </div>
          </div>
          <div className="col-span flex flex-col gap-7 pl-10">
            <div role="footer-link-header" className="font-semibold leading-5">
              News & Guides
            </div>
            <div role="footer-link-body" className="grid grid-rows-4 gap-4">
              <div className="text-sm text-[#000000DE] cursor-pointer hover:underline">
                Top News
              </div>
              <div className="text-sm text-[#000000DE] cursor-pointer hover:underline">
                EV Guides
              </div>
            </div>
          </div>
          <div className="col-span flex flex-col gap-7 pl-10">
            <div role="footer-link-header" className="font-semibold leading-5">
              Terms
            </div>
            <div role="footer-link-body" className="grid grid-rows-4 gap-4">
              <div className="text-sm text-[#000000DE] cursor-pointer hover:underline">
                Cookies
              </div>
              <div className="text-sm text-[#000000DE] cursor-pointer hover:underline">
                Privacy
              </div>
              <div className="text-sm text-[#000000DE] cursor-pointer hover:underline">
                Legal
              </div>
            </div>
          </div>
          <div className="col-span flex flex-col gap-7 pl-10">
            <div role="footer-link-header" className="font-semibold leading-5">
              Social
            </div>
            <div role="footer-link-body" className="grid grid-rows-4 gap-4">
              <div className="text-sm text-[#000000DE] cursor-pointer hover:underline">
                Facebook
              </div>
              <div className="text-sm text-[#000000DE] cursor-pointer hover:underline">
                LinkedIn
              </div>
              <div className="text-sm text-[#000000DE] cursor-pointer hover:underline">
                Instagram
              </div>
              <div className="text-sm text-[#000000DE] cursor-pointer hover:underline">
                Twitter
              </div>
            </div>
          </div>
        </div>
      </div>
      <div role="footer-bottom" className="flex flex-col gap-8">
        <hr className="border-t-0 border-[#BDBDBD] border-[0.5px]" />
        <div className="flex justify-between items-center">
          <span className="text-xs text-[#000000DE] cursor-pointer hover:underline leading-[13px]">
            © Copyright 2021 EVFY Pte Ltd. All Rights Reserved.
          </span>
          <LanguageDropdown label="EV Guides" options={languageOptions} />
        </div>
      </div>
    </div>
  );
}
