import Typography from "components/typography";
import Clean from "assets/images/Clean.png"
import Fountainscape from "assets/images/Fountainscape.png"
import Pond from "assets/images/Pond.png"
import Waterfall from "assets/images/Waterfall.png"

const Statistical = () => {
    const FeatureList = [
      {
        title: "300+",
        content: "Ponds Constructed",
        img: Clean
      },
      {
        title: "1500+",
        content: "Ponds Cleaned",
        img: Fountainscape

      },
      {
        title: "100+",
        content: "Pondless Waterfalls",
        img: Pond

      },
      {
        title: "15+",
        content: "Fountainscapes Installed",
        img: Waterfall
      },
    ];
    return (
      <div className="w-full bg-white relative">
        <div className="w-[72.22%] phone:w-[92%] flex-col flex phone:flex-col phone:mt-[30px] tablet:flex-col gap-[105px] phone:gap-5 mx-auto">
          <div className="flex gap-10 phone:gap-[16px] tablet:gap-[35px] items-center tablet:items-start tablet:justify-center justify-center phone:flex-col tablet:flex-col mt-6">
            {FeatureList.map((feature, index) => (
              <div
                key={index}
                className="bg-transparent items-center justify-center w-full flex relative"
              >
                <div className="flex flex-col items-center gap-3">
                    <img src={feature.img} height={60}  width={60}/>
                  <Typography
                    className="text-[32px] font-[600]"
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                   className="text-[19px] text-[#7D7D7D]"
                  >
                    {feature.content}
                  </Typography>
                </div>
                {index < FeatureList.length - 1 && (
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[1px] h-[67px] bg-gray-05 phone:hidden tablet:hidden"></div>
                )}
              </div>
            ))}
          </div>
  
        
        </div>
      </div>
    );
  };
export default Statistical
