"use client";
import React, { useState, useEffect, useRef, ReactNode } from "react";
import { MdArrowDropDown } from "react-icons/md";

interface DropdownOption {
  value: string;
  label: ReactNode;
}

interface DropdownProps {
  label: string;
  options: DropdownOption[];
  defaultOption?: DropdownOption;
  onSelect?: (value: string) => void; // Callback function to handle option selection
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  defaultOption,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<
    DropdownOption | undefined
  >(defaultOption || options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleOptionSelect = (option: DropdownOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option.value);
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex w-[60px] w-max justify-center items-center w-full rounded-md gap-[7px] bg-white text-sm font-semibold hover:bg-gray-50"
        id="options-menu"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {selectedOption?.label}
        <MdArrowDropDown size={24} className="text-black" />
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="languages-menu"
        >
          <div className="flex flex-col items-center" role="none">
            {options.map((option, index) => (
              <React.Fragment key={index}>
                {index !== 0 && (
                  <hr className="w-full border-t border-gray-200" />
                )}{" "}
                <button
                  key={index}
                  className={`block py-2 text-sm text-center w-full flex justify-center ${
                    option === selectedOption
                      ? "text-gray-900 font-semibold"
                      : "text-gray-700"
                  } hover:bg-gray-100 hover:text-gray-900`}
                  role="language"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option.label}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
