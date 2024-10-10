import { useState, useEffect } from "react";
import { menus, Menu } from "components/layout/menus";
import Typography from "components/typography/index";
import Logo from "assets/images/Logo.png";
import menu from "assets/icons/Menu.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [token, setToken] = useState<string | null>(null);

const [name, setName] = useState<string | null>(null);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login")
    
    
}

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        window.location.hash = sectionId;
      }, 800);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const token = localStorage.getItem("token");
      setToken(token);
      const name= localStorage.getItem("name");
      setName(name)
    }
  }, []);
  console.log(token);

  const handleMenuClick = (slug: string) => {
    if (slug === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        window.location.hash = "";
      }, 1);
    } else if (slug === "/services") {
      setIsServicesDropdownOpen(!isServicesDropdownOpen);
    } else {
      const sectionId = slug.replace("/", "");
      handleScrollToSection(sectionId);
      setIsServicesDropdownOpen(false);
    }
    setIsOpen(false);
  };

  const handleServiceClick = (slug: string) => {
    window.location.href = slug;
    setIsServicesDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    hash &&
      setTimeout(() => {
        handleScrollToSection(hash);
      }, 1);
  }, []);

  return (
    <header className="w-full sticky top-0 px-[45px] flex justify-between items-center bg-white h-[130px] phone:h-[48px] phone:px-[15px] tablet:px-[30px] z-[100]">
      <div className="flex items-end justify-between gap-2">
        <a href="/">
          <img src={Logo} alt="Logo" className="h-[130px] w-[150px]" />
        </a>
      </div>
      <div className="hidden desktop:flex items-center gap-7 space-x-10">
        {menus.map((item: Menu, key) => (
          <div
            key={key}
            className="relative"
            onMouseEnter={() =>
              item.slug === "/services" && setIsServicesDropdownOpen(true)
            }
            onMouseLeave={() =>
              item.slug === "/services" && setIsServicesDropdownOpen(false)
            }
          >
            <Typography
              className="cursor-pointer font-bold hover:text-pink-second_02 text-[24px]"
              onClick={() => handleMenuClick(item.slug)}
            >
              {item.title}
            </Typography>
            {item.slug === "/services" && isServicesDropdownOpen && (
              <div className="absolute w-[200px] bg-red-32 shadow-lg rounded-md p-2 z-50">
                <div
                  className="cursor-pointer  hover:bg-gray-200 px-4 py-2 hover:bg-gray-A0"
                  onClick={() => handleServiceClick("/pond-construction")}
                >
                  <Typography>Pond-construction</Typography>
                </div>
                <div
                  className="cursor-pointer hover:bg-gray-200 px-4 py-2 hover:bg-gray-A0"
                  onClick={() => handleServiceClick("/pond-cleaning")}
                >
                  <Typography>Pond-Cleaning</Typography>
                </div>
              </div>
            )}
          </div>
        ))}
        <div>
          <a href="/contact">
            <button className="bg-[#1C6839] p-3 rounded-lg text-white font-bold">
              Get A Quote
            </button>
          </a>
        </div>
      </div>
      {token ? (
        <div>
          <Typography>{name}</Typography>
          <Typography onClick={handleLogout} className="flex gap-[10px] w-full min-w-[273px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-[#C8EDFF] active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
            Log out
          </Typography>
        </div>
      ) : (
        <a className="  " href={`/login`}>
          <button className=" mt-[10px] text-black w-[120px] h-[40px] bg-transparent rounded-md  border-black border-[1px] ">
            {" "}
            Log in
          </button>
        </a>
      )}

      <div className="relative desktop:hidden">
        <button
          className="flex desktop:hidden justify-center items-center w-10 h-10 z-50 bg-red"
          onClick={toggleDropdown}
        >
          <img src={menu} alt="Menu" width="24" height="19" />
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-A0 rounded-md shadow-lg z-50">
            <div className="py-1">
              {menus.map((item: Menu, key) => (
                <div key={key} className="relative">
                  <div
                    className="cursor-pointer px-4 py-2 text-gray-800 hover:bg-gray-200 font-montserrat-normal"
                    onClick={() => handleMenuClick(item.slug)}
                  >
                    {item.title}
                  </div>
                  {item.slug === "/services" && isServicesDropdownOpen && (
                    <div className="absolute bg-white shadow-lg rounded-md mt-2 p-2 z-50">
                      <div
                        className="cursor-pointer hover:bg-gray-200 px-4 py-2"
                        onClick={() => handleServiceClick("/pond-construction")}
                      >
                        pond-construction1
                      </div>
                      <div
                        className="cursor-pointer hover:bg-gray-200 px-4 py-2"
                        onClick={() => handleServiceClick("/pond-cleaning")}
                      >
                        pond-cleaning
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
