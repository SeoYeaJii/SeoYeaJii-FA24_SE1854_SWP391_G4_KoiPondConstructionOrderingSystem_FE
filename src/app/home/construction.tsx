import Koi from "assets/images/koi.png";
import Phone from "assets/images/phone.png";
import Shopping from "assets/images/shopping.png";
import Pond from "assets/images/Pond.png";
import Typography from "components/typography";

const Construction = () => {
  return (
    <div className="max-w-[1440px] w-[90%] flex gap-4 mx-auto mt-[150px] phone:flex-col phone:w-[95%]">
      <div className="w-[45%] px-8 phone:w-full ">
        <div className="flex flex-col w-full items-center justify-center gap-4">
          <img src={Koi} width={150} height={140} />
          <Typography className="text-[45px] font-bold text-[#056839] leading-[49px]">
            How our Pond construction process Works
          </Typography>
          <Typography className="text-[18px] text-[#2B2825]">
            We want to make sure that when you work with Grass Roots Pond &
            Garden, you are getting the best experience. That’s why we have
            crafted a pond construction process that not only keeps you
            informed, but front of mind. Take a look at our seamless process and
            start envisioning our partnership in transforming your Ann Arbor
            backyard.
          </Typography>
        </div>
      </div>
      <div className="w-[1px] h-auto bg-gray"></div>
      <div className="w-[55%] phone:w-full">
        <div className="flex w-full mb-6">
          <div className="p-10">
            <img src={Phone} alt="" width={80} height={80} />
          </div>
          <div className="flex flex-col w-full gap-6">
            <Typography className="text-[25px] font-bold">
              1. Contact Us
            </Typography>
            <Typography>
              Fill out our form on our contact page and provide us with the
              details of your project. From here we will follow up with a phone
              consultation to talk more about your pond and dive into pricing
              and timeline.
            </Typography>
          </div>
        </div>
        <div className="flex w-full mb-6">
          <div className="p-10">
            <img src={Shopping} alt="" width={80} height={80} />
          </div>
          <div className="flex flex-col w-full gap-6">
            <Typography className="text-[25px] font-bold">
              2. Pond Construction Begins
            </Typography>
            <Typography>
              Once we have designed the perfect plan for your backyard, we will
              get to work in bringing your vision to life. During this time, we
              will keep you up to date on our progress and be available to
              answer any questions you may have during buildout.
            </Typography>
          </div>
        </div>
        <div className="flex w-full mb-6">
          <div className="p-10">
            <img src={Pond} alt="" width={100} height={80} />
          </div>
          <div className="flex flex-col w-full gap-6">
            <Typography className="text-[25px] font-bold">
            3. Enjoy Your New Pond
            </Typography>
            <Typography>
            Now is the time to finally enjoy your upgraded space. We will do a final walkthrough of your improved yard and address any concerns you may have. Time to relax and enjoy all the benefits of your water feature.


            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Construction;
