import clsx from "clsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Controller} from 'react-hook-form';
import {useCreateContactForm} from "./useForm.ts";
import Typography from "components/typography/typography.tsx";
import SendIcon from "assets/icons/send.svg"
import {useEffect} from "react";

const ContactComponent: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 400,
      easing: 'ease-in-out',
    });
  }, []);

  const {form, onSubmit} = useCreateContactForm();
  const {handleSubmit, control, formState: {errors}} = form;
  const styleInput = "px-[15px] h-[44px] bg-white rounded-[6px] focus:outline-none border border-solid border-black-27 text-[16px] text-black placeholder:opacity-30";


  return (
    <div className="pt-[70px] min-h-[calc(100vh-336px)] bg-[#EBF8F2] w-full pb-[100px] phone:pb-[30px] relative">
      <div
        className="absolute z-0  -top-[200px] -left-[200px] phone:top-0 phone:-left-[100px] blur-[250px] filter opacity-40 w-[426px] phone:w-[250px] h-[426px] phone:h-[250px] rounded-[426px]"/>
      <div
        className="absolute z-0  -bottom-[300px] left-1/2 transform -translate-x-1/2 phone:top-0 phone:left-0 blur-[250px] filter opacity-30 w-[426px] phone:w-[250px] h-[426px] phone:h-[250px] rounded-[426px]"/>
      <div
        className="w-[51.8%] phone:w-[88%] tablet:w-[80%] flex flex-col justify-center items-center mx-auto gap-5 mt-20 phone:mt-[30px]"
        data-aos="fade-up">
        <Typography variant={"h2"}>Tell Us About Your Project</Typography>
        <Typography variant={"medium"} color={'gray-A0'} className="text-center">
          Fill out the form below so that we can get back to you with a phone consultation to talk more about your pond!
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col justify-center items-center gap-[30px] phone:gap-5 mt-[10px]">
          <div className="flex phone:flex-col justify-center items-center gap-[30px] phone:gap-5 w-full">
            <div className="flex flex-col justify-center gap-[6px] w-full relative">
              <label htmlFor="name" className="text-[12px] uppercase text-gray-A0">Name</label>
              <Controller
                name="name"
                control={control}
                render={({field}) => <input {...field} id="name" className={clsx(styleInput)}
                                            placeholder="Leo"/>}
              />
              {errors.name && <span
                className="text-red-32 text-[13px] phone:text-[12px] absolute -bottom-[35%] phone:-bottom-[30%] desktop:left-0 tablet:left-0 phone:right-0">{errors.name.message}</span>}
            </div>
            <div className="flex flex-col gap-[6px] w-full relative">
              <label htmlFor="phone" className="text-[12px] uppercase text-gray-A0">Phone</label>
              <Controller
                name="phone"
                control={control}
                render={({field}) => <input {...field} id="phone" className={clsx(styleInput)} placeholder="Enter phone number"/>}
              />
              {errors.phone && <span className="text-red-32 text-[13px] phone:text-[12px] absolute -bottom-[35%] phone:-bottom-[30%] desktop:left-0 tablet:left-0 phone:right-0">{errors.phone.message}</span>}
            </div>

            <div className="flex flex-col gap-[6px] w-full relative">
              <label htmlFor="email" className="text-[12px] uppercase text-gray-A0">Email</label>
              <Controller
                name="email"
                control={control}
                render={({field}) => <input {...field} id="email" className={clsx(styleInput)} placeholder="Enter email"/>}
              />
              {errors.email &&
                <span
                  className="text-red-32 phone:text-[12px] text-[13px] absolute -bottom-[35%] phone:-bottom-[30%] desktop:left-0 tablet:left-0 phone:right-0">{errors.email.message}</span>}
            </div>
          </div>

          <div className="flex flex-col gap-[6px] w-full relative">
            <label htmlFor="title" className="text-[12px] uppercase text-gray-A0">Address</label>
            <Controller
              name="address"
              control={control}
              render={({field}) => <input {...field} id="title" className={clsx(styleInput)} placeholder="Address"/>}
            />
            {errors.address && <span
              className="text-red-32 text-[13px] phone:text-[12px] absolute -bottom-[35%] phone:-bottom-[30%] desktop:left-0 tablet:left-0 phone:right-0">{errors.address.message}</span>}
          </div>
          <div className="flex flex-col gap-[6px] w-full relative">
            <label htmlFor="service" className="text-[12px] uppercase text-gray-A0">What can we help with?</label>
            <Controller
              name="service"
              control={control}
              render={({field}) => (
                <div className="flex flex-col gap-[6px]">
                  <label>
                    <input type="radio" {...field} value="Pond Construction" />
                    Pond Construction
                  </label>
                  <label>
                    <input type="radio" {...field} value="Pond Maintenance & Cleaning" />
                    Pond Maintenance & Cleaning
                  </label>
                </div>
              )}
            />
            {errors.service && <span className="text-red-32 text-[13px] absolute -bottom-[35%]">{errors.service.message}</span>}
          </div>

          <div className="flex flex-col gap-[6px] w-full relative">
            <label htmlFor="content" className="text-[12px] uppercase text-gray-A0">Description</label>
            <Controller
              name="content"
              control={control}
              render={({field}) => <textarea {...field} id="content"
                                             className={clsx(styleInput, 'resize-none h-[128px]')}
                                             placeholder="Enter description"/>}
            />
            {errors.content &&
              <span
                className="text-red-32 phone:text-[12px] text-[13px] absolute -bottom-[15%] phone:-bottom-[15%] desktop:left-0 tablet:left-0 phone:right-0">{errors.content.message}</span>}
          </div>
 

          <button type="submit"
                  className="rounded-[12px] mt-[10px] w-[130px] bg-[#1C6839] flex gap-[6px] px-[15px] py-[10px] text-[14px] font-bold text-whit hover:opacity-60">
            Gửi liên hệ <img src={SendIcon} alt="send"/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;
