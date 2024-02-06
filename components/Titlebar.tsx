import Image from "next/image";
import TitleBarLogo from "../public/icons/titlebar-logo.png";
import Dropdown from "./Dropdown";
import LanguageDropdown from "./LanguageDropdown";

export default function Titlebar() {
  const carOptions = ["Car 1", "Car 2", "Car 3"];
  const guideOptions = ["Guide 1", "Guide 2", "Guide 3"];
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
    <div className="flex px-[120px] h-16 items-center justify-between">
      <div className="flex gap-8 items-center">
        <Image
          src={TitleBarLogo}
          alt="TitleBar Logo"
          className="w-[153px] h-7"
        />
        <div>
          <Dropdown label="Find EV Cars" options={carOptions} />
          <Dropdown label="EV Guides" options={guideOptions} />
        </div>
      </div>
      <div className="flex items-center">
        <LanguageDropdown label="EV Guides" options={languageOptions} />
        <button
          type="button"
          className="inline-flex justify-center items-center w-full rounded-md mx-4 gap-[7px] text-sm font-semibold hover:bg-cyan-50 hover:scale p-1 hover:underline"
        >
          Log In/Sign Up
        </button>
      </div>
    </div>
  );
}
