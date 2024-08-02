import DownArrowSVG from "@/components/shared/header/DownArrowSVG";
import { SET_EXPAND } from "@/Redux/Features/rootModyfier/Modyfier";
import { RootState } from "@/Redux/store";
import { countryData } from "@/components/Layout/InviteFreeLancers";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
type Country = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: any;
  };
};

type SortedCountry = {
  name: string;
  flag: string;
};
const Location = () => {
  const dispatch = useDispatch();
  const ACTIVE_KEY = "JOB_POST_REVIEW_ADVANCED_PREFERENCES_COUNTRY_DROP_DOWN";
  // =============== Initial states ========
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);
  const [selected, setSelected] = useState<SortedCountry | null>(null);
  const [countries, setCountries] = useState<SortedCountry[]>(countryData);
  const [allCountries, setAllCountries] =
    useState<SortedCountry[]>(countryData);
  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags"
        );
        if (res.status !== 200) {
          throw new Error("Resource not found");
        }
        const result: Country[] | null = await res.json();

        if (result?.length) {
          const sortedCountries: SortedCountry[] = result
            .map((country) => ({
              name: country?.name?.common,
              flag: country.flags.svg ? country.flags.svg : country.flags.png,
            }))
            .sort((a, b) => a.name.localeCompare(b.name));
          setCountries(sortedCountries);
          setAllCountries(sortedCountries);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCountries();
  }, []);

  //   ======== Change handler =======
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    if (!allCountries?.length) return;
    const filtered = allCountries.filter((country) =>
      country.name.toLowerCase().includes(searchValue)
    );
    setCountries(filtered);
  };

  return (
    <div className="w-full max-w-[465px]">
      <h4 className="jobpost-details-label">Add regions or countries</h4>
      <div
        onClick={(event) => {
          event.stopPropagation();
          dispatch(SET_EXPAND(EXPAND !== ACTIVE_KEY ? ACTIVE_KEY : null));
        }}
        className={`bg-white border rounded-[8px] py-2 px-2 border-[#0000001a] cursor-pointer flex items-center gap-4 justify-between ${
          EXPAND === ACTIVE_KEY && "pointer-events-none"
        }`}
      >
        {
          <h5 className="text-base w-[80%] flex items-center gap-[11px]">
            {selected?.name ? (
              <>
                <Image
                  width={24}
                  height={15}
                  className="w-full max-w-[24px] h-auto"
                  src={selected?.flag ? selected.flag : ""}
                  alt={`${selected && selected.name} flag image`}
                />
                <span>{selected?.name}</span>
              </>
            ) : (
              "Select"
            )}
          </h5>
        }
        <DownArrowSVG
          className={`duration-300 !w-[24px] ${
            EXPAND === ACTIVE_KEY && "rotate-180"
          }`}
        />
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          dispatch(SET_EXPAND(ACTIVE_KEY));
        }}
        className={`bg-white rounded-[10px] overflow-hidden  mt-0 h-auto max-h-0 ${
          EXPAND === ACTIVE_KEY &&
          "!max-h-[9999px] overflow-y-auto border border-[#0000001a]  mt-2 shadow"
        }`}
      >
        <div className="cursor-pointer rounded-[20px] px-5 my-5 mx-5  border border-[#0000001a]  flex items-center gap-[11.8px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.60482 19.0319C4.42382 19.0319 0.208984 14.8171 0.208984 9.63607C0.208984 4.45507 4.42382 0.240234 9.60482 0.240234C14.7858 0.240234 19.0007 4.45507 19.0007 9.63607C19.0007 14.8171 14.7858 19.0319 9.60482 19.0319ZM9.60482 1.61523C5.1819 1.61523 1.58398 5.21223 1.58398 9.63607C1.58398 14.0599 5.1819 17.6569 9.60482 17.6569C14.0277 17.6569 17.6257 14.059 17.6257 9.63607C17.6257 5.21315 14.0287 1.61523 9.60482 1.61523Z"
              fill="#525966"
            />
            <path
              d="M19.2296 19.9492C19.1393 19.9495 19.0498 19.9318 18.9664 19.8971C18.883 19.8625 18.8073 19.8117 18.7437 19.7476L16.9104 17.9142C16.7814 17.7853 16.709 17.6103 16.709 17.428C16.709 17.2456 16.7814 17.0706 16.9104 16.9417C17.0394 16.8127 17.2143 16.7402 17.3967 16.7402C17.5791 16.7402 17.754 16.8127 17.883 16.9417L19.7163 18.775C19.8127 18.8711 19.8783 18.9936 19.905 19.1271C19.9316 19.2605 19.9181 19.3988 19.8661 19.5246C19.8141 19.6503 19.7259 19.7578 19.6127 19.8334C19.4996 19.909 19.3657 19.9493 19.2296 19.9492Z"
              fill="#525966"
            />
          </svg>
          <input
            onClick={(event) => {
              event.stopPropagation();
              dispatch(SET_EXPAND(ACTIVE_KEY));
            }}
            onChange={handleChange}
            className="py-[10px] focus:outline-none outline-none w-full"
            type="text"
            placeholder="Search Country"
          />
        </div>
        <ul className="!max-h-[350px] overflow-y-auto">
          {countries?.length ? (
            countries.map((item: SortedCountry) => (
              <li
                className={`flex items-center cursor-pointer py-1.5 px-5 my-0.5 gap-[11px] ${
                  selected?.name === item?.name && ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(item);
                  dispatch(SET_EXPAND(null));
                }}
                key={item.name}
              >
                <Image
                  width={24}
                  height={15}
                  className="w-full max-w-[24px] h-auto"
                  src={item?.flag ? item.flag : ""}
                  alt={`${item && item.name} flag image`}
                />
                <span>{item.name}</span>
              </li>
            ))
          ) : (
            <li
              className={`flex items-center cursor-pointer py-1.5 px-5 my-0.5 gap-[11px]`}
            >
              No country found.
            </li>
          )}
        </ul>
      </div>
      <p className="text-[12px] tracking-[0.24px] mt-3 ">
        These location preferences will be displayed to all candidates, but
        anyone can submit proposals.
      </p>
    </div>
  );
};

export default Location;
