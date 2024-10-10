import Slider from "react-slick";
import Typography from "components/typography/typography";
import EventImg_1 from "assets/images/penhouse.jpg";
import EventImg_2 from "assets/images/nhatban.jpg";
import EventImg_3 from "assets/images/nhatban.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./pond_slide.css";
import { useState, useEffect } from "react";
import axios from "axios";
interface PondConfig {
  constructionTypeId: number;
  minSize: number;
  maxSize: number;
  waterVolume: number;
  minDepth: number;
  maxDepth: number;
  shape: string;
  filtrationSystem: string;
  phLevel: number;
  waterTemperature: number;
  pondLiner: string;
  pondBottom: string;
  decoration: string;
  minEstimatedCost: number;
  maxEstimatedCost: number;
  imageUrl: string;
  description: string;
  note: string;
  createDate: string; // You might want to use Date instead if working directly with Date objects
  createBy: string;
  updateDate: string; // Same as above, Date can be used directly here
  updateBy: string;
}
const Pond_slide = () => {
  const [data, setData] = useState<PondConfig | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<PondConfig>(
          "http://localhost:8080/api/template"
        );
        setData(response.data);
      } catch (error) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  console.log(data);

  const events = [
    {
      title: "Base*",
      price: "$6K",
      description: `Includes: 5×7 Pond, 15×13 and 5×7 Liner, 18’ Underlayment,
          Signature Series Skimmer, Signature Series Biofalls, Aquasurge Pump 2000,
          Rock Lid, 25’ 1.5’ Flex PVC, Dual Union Check Valve, 2 Tons Of Granite,
          Boulders, Washed Riverstone, Up To 2’ Stream`,
      image: EventImg_1,
      completion: "Complete in 1-2 days",
    },
    {
      title: "Base*",
      price: "$6K",
      description: `Includes: 5×7 Pond, 15×13 and 5×7 Liner, 18’ Underlayment,
          Signature Series Skimmer, Signature Series Biofalls, Aquasurge Pump 2000,
          Rock Lid, 25’ 1.5’ Flex PVC, Dual Union Check Valve, 2 Tons Of Granite,
          Boulders, Washed Riverstone, Up To 2’ Stream`,
      image: EventImg_2,
      completion: "Complete in 1-2 days",
    },
    {
      title: "Base*",
      price: "$6K",
      description: `Includes: 5×7 Pond, 15×13 and 5×7 Liner, 18’ Underlayment,
          Signature Series Skimmer, Signature Series Biofalls, Aquasurge Pump 2000,
          Rock Lid, 25’ 1.5’ Flex PVC, Dual Union Check Valve, 2 Tons Of Granite,
          Boulders, Washed Riverstone, Up To 2’ Stream`,
      image: EventImg_3,
      completion: "Complete in 1-2 days",
    },
    {
      title: "Base*",
      price: "$6K",
      description: `Includes: 5×7 Pond, 15×13 and 5×7 Liner, 18’ Underlayment,
          Signature Series Skimmer, Signature Series Biofalls, Aquasurge Pump 2000,
          Rock Lid, 25’ 1.5’ Flex PVC, Dual Union Check Valve, 2 Tons Of Granite,
          Boulders, Washed Riverstone, Up To 2’ Stream`,
      image: EventImg_2,
      completion: "Complete in 1-2 days",
    },
    {
      title: "Base*",
      price: "$6K",
      description: `Includes: 5×7 Pond, 15×13 and 5×7 Liner, 18’ Underlayment,
          Signature Series Skimmer, Signature Series Biofalls, Aquasurge Pump 2000,
          Rock Lid, 25’ 1.5’ Flex PVC, Dual Union Check Valve, 2 Tons Of Granite,
          Boulders, Washed Riverstone, Up To 2’ Stream`,
      image: EventImg_1,
      completion: "Complete in 1-2 days",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="event" className="w-full h-auto bg-white z-50">
      <div className="w-full h-auto flex flex-col items-center gap-20 phone:gap-[30px] pb-7 phone:pb-6">
        <div className="flex gap-3 mt-[100px] phone:mt-[30px]">
          <Typography
            variant={"h1"}
            color={"black-06"}
            fontWeight={"bold"}
            className="text-black-06 phone:!text-[24px]"
          >
            Pond Pricing
          </Typography>
        </div>

        <Slider {...settings} className="w-full mx-auto mt-[50px]">
          {events.map((event, index) => (
            <a
              href="/contact"
              key={index}
              className="bg-white flex flex-col items-center gap-10 w-full rounded-3xl shadow-md hover:opacity-60"
            >
              <div className="w-full">
                <img
                  src={event.image}
                  alt=""
                  className="w-full h-[300px] object-cover rounded-t-3xl"
                />
              </div>

              {/* Phần hiển thị giá */}
              <div className="flex justify-center -mt-16">
                <div className="bg-[#EBF8F2] text-[#076839] text-[24px] font-bold rounded-full w-[80px] h-[80px] flex items-center justify-center">
                  {event.price}
                </div>
              </div>

              {/* Phần mô tả */}
              <div className="text-center px-5">
                <Typography
                  variant={"medium"}
                  fontWeight={"bold"}
                  className="text-[24px]"
                >
                  {event.title}
                </Typography>
                <Typography
                  variant={"small"}
                  className="text-gray-600 mt-2 text-sm"
                >
                  {event.description}
                </Typography>
                <Typography
                  variant={"small"}
                  fontWeight={"bold"}
                  className="text-gray-800 mt-4"
                >
                  {event.completion}
                </Typography>
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Pond_slide;
