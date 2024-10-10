import Mountain from "assets/images/Moms-pond.png";
import Typography from "components/typography";
const Favorite_pond = () => {
  return (
    <div className="max-w-[1440px] w-[90%] flex gap-4 mx-auto mt-[150px] phone:flex-col phone:w-[95%] ">
      <div className="w-[50%] phone:w-full">
        <div className="flex flex-col gap-6">
          <Typography className="text-[38px] font-bold leading-12">
            The New Favorite Gathering Place In Ann Arbor
          </Typography>
          <div className="w-[200px] h-[1px] bg-gray-A0"></div>
          <div className="flex flex-col gap-4">
            <Typography className="text-[#2B2825] text-[16px]">
              A backyard pond is more than just a place to sit and relax. It’s a
              gathering place for the people you love. Whether you’re hosting a
              barbecue or just enjoying a quiet evening at your Ann Arbor home,
              your pond will be the new favorite spot.
            </Typography>
            <Typography className="text-[#2B2825] text-[16px]">
              The sounds of the water, the beauty of the plants, and the
              welcoming environment that a garden pond brings will provide an
              escape from the rest of the world.
            </Typography>
            <Typography className="text-[#2B2825] text-[16px]">
              At Grass Roots Pond & Garden Center, we prioritize listening to
              your desires and requirements when starting your backyard garden
              pond construction project. This allows us to design a pond that
              meets all your expectations and provides you with all the benefits
              you’re seeking.
            </Typography>
            <Typography className="text-[#2B2825] text-[16px]">
              Turn that unused space in your yard into the space you need to
              spend time with the people you love.
            </Typography>
          </div>
        </div>
      </div>
      <div className="w-[50%] phone:w-full">
        <img src={Mountain} alt="" className="w-full" />
      </div>
    </div>
  );
};
export default Favorite_pond;
