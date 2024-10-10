import Logo from "assets/images/Aquascapes-Badge.webp";
import titleLogo from "assets/images/White-Logo.webp";
import facebookIcon from "assets/icons/facebookIcon.svg";
import instagramIcon from "assets/icons/instagramIcon.svg";
import Typography from "components/typography";
import location from "assets/icons/location.svg";
import phone from "assets/icons/call.svg";



const sections = [
  {
    title: "About Us",
    items: [
      {href: "/", text: "Home"},
      {href: "/", text: "Services"},
      {href: "/", text: "About"},
      {href: "/", text: "Contact"},
    ],
  },
  {
    title: "Our Services",
    items: [
      {href: "/", text: "Pond-construction"},
      {href: "/", text: "Pond-maintenance-and-cleaning"},
      {href: "/", text: "Pond-repair"},
      {href: "/", text: "Pondless-waterfall-construction"},
    ],
  }
];
const contact = {
  title: "Contact",
  items: [
    {icon: location, text: "Address: FPT University HCM"},
    {icon: phone, text: "Hotline: 0707.65.7777"},
  ],
}
const Footer = () => {

  return (
    <div className="w-full min-h-[336px] phone:min-h-[329px] flex-shrink-0 z-50 bg-[#056839] pt-[5vw]">
      <div
        className="w-[79.17%] tablet:w-[90%] phone:w-[90%] flex phone:flex-col justify-start items-start gap-[100px] phone:gap-[15px] mx-auto relative" >
        <div className="flex flex-col justify-start items-start gap-12 w-[17.2%]">
          <div className="flex gap-[10px]">
            <img src={Logo}  alt="BodyUp logo" width="130" height="100"/>
            <img src={titleLogo} className="max-w-xs" alt="BodyUp text" width="135" height="30"/>
          </div>
          <div className="flex flex-col gap-5 phone:hidden">
            <div className="flex gap-[10px]">
              <a href="/"><img src={facebookIcon} alt="facebook" width="20" height="20"/></a>
              <a href="/"><img src={instagramIcon} alt="instagram" width="20" height="20"/></a>
            </div>
            <Typography className="opacity-50" variant={"small"} color={"gray-A0"}>© 2024</Typography>
          </div>
        </div>
        <div className="flex justify-start items-start gap-20 w-[74.5%] phone:w-full">
          {sections.map((section, index) => (
            <div className="flex gap-[15px] w-full flex-col phone:hidden" key={index}>
              <Typography variant={"medium"} fontWeight={"bold"}
                          className="uppercase phone:!text-[16px]">{section.title}</Typography>
              <div className="flex flex-col gap-[10px]">
                {section.items.map((item, key) => (
                  <div className="flex gap-[10px] cursor-pointer" key={`item-${key}`}>
                    
                    <Typography variant={"medium"}>{item.text}</Typography>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="flex gap-[15px] w-full flex-col">
            <Typography variant={"medium"} fontWeight={"bold"}
                        className="uppercase !text-[16px]">{contact.title}</Typography>
            <div className="flex flex-col gap-[10px]">
              {contact.items.map((item, index) => (
                <div className="flex gap-[10px] cursor-pointer items-start" key={index}>
                  <img src={item.icon} alt="" className="mt-1" width="17" height="17"/>
                  <Typography variant={"medium"}>{item.text}</Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 desktop:hidden tablet:hidden mt-[15px]">
          <div className="flex gap-[10px]">
            <img src={facebookIcon} alt="facebook"/>
            <img src={instagramIcon} alt="instagram"/>
          </div>
          <Typography className="opacity-50" variant={"medium"} color={"gray-A0"}>© 2024</Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
