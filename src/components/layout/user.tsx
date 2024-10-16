import close_circle from "assets/icons/close-circle.svg";
import Typography from "components/typography";
import { useEffect, useState } from "react";
import back_left from "assets/icons/arrow-left.svg";
import { InputPassword } from "components/input/InputPassword";
const User = ({ onClose }: { onClose: () => void }) => {
  const [name, setName] = useState(localStorage.getItem("name"));
  const [email] = useState(localStorage.getItem("email"));

  const [isEditingName, setIsEditingName] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [showName, setShowName] = useState(true);
  const [changePass, setChangePass] = useState(true);
  const [back, setBack] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordsMatchError, setPasswordsMatchError] = useState("");

  const handlePasswordChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setPasswordError("");
    if (newPassword.length < 6) {
      setPasswordError("Password should be more than 6 characters.");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (event: {
    target: { value: string };
  }) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
    checkPasswordMatch(newConfirmPassword);
  };

  const checkPasswordMatch = (newConfirmPassword: string) => {
    if (password && password !== newConfirmPassword) {
      if (newConfirmPassword !== "") {
        setPasswordsMatchError("Passwords do not match. Please try again.");
      }
    } else {
      setPasswordsMatchError("");
    }
  };

  useEffect(() => {
    checkPasswordMatch(confirmPassword);
  }, [password]);
  const handleEditName = () => {
    setIsEditingName(true);
    setEditedName(name || "");
    setShowName(false);
  };
  const handleSaveName = () => {
    setName(editedName);
    localStorage.setItem("name", editedName);
    setIsEditingName(false);
    setShowName(true);
  };

  const handleCancelEditName = () => {
    setIsEditingName(false);
    setShowName(true);
  };

  const handleChangePass = () => {
    setChangePass(!changePass);
    setBack(!back);
  };
  console.log(back);
  console.log(localStorage);

  const handleEditedNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEditedName(event.target.value);
  };
  return (
    <div className="flex h-auto w-[500px] flex-col gap-[24px] rounded-lg bg-white p-[32px]">
      <div className=" flex  justify-between ">
        <img
          onClick={() => handleChangePass()}
          src={back_left}
          className={` cursor-pointer ${
            back ? "text-black" : "text-white w-0"
          } `}
          alt={""}
        />

        <p className=" text-[20px] font-bold leading-[24px] text-[#000]  ">
          Account
        </p>
        <div>
          <img
            src={close_circle}
            onClick={onClose}
            className="  cursor-pointer "
            alt={""}
          />
        </div>
      </div>
      {changePass ? (
        <div className="flex flex-col gap-[24px]">
          <div className="flex justify-between">
            <Typography>Username</Typography>
            {showName && (
              <p className="text-[#000] text-[19px] font-bold leading-[20px] ">
                {name ? name : "No Name"}
              </p>
            )}

            {isEditingName ? (
              <div className="flex gap-[20px]">
                <input
                  type="text"
                  value={editedName}
                  onChange={handleEditedNameChange}
                />
                <button
                  className="hover:text-[#1C6839]"
                  onClick={handleSaveName}
                >
                  Save
                </button>
                <button
                  className="hover:text-[#1C6839]"
                  onClick={handleCancelEditName}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                className="text-[#1C6839] hover:opacity-50"
                onClick={handleEditName}
              >
                Edit Name
              </button>
            )}
          </div>
          <div className="flex justify-between">
            <Typography>Email</Typography>
            <Typography className="text-[#BEBFC5]">{email}</Typography>
            <div className="text-white"></div>
          </div>
          <div className="flex justify-between">
            <Typography>Password</Typography>
            <Typography className="text-[#BEBFC5] w-[120px] ">
              ••••••
            </Typography>
            <Typography
              onClick={() => handleChangePass()}
              className="text-[#1C6839] cursor-pointer hover:opacity-60"
            >
              Change
            </Typography>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col  items-center gap-[10px]">
          <div className=" flex w-[60%] gap-[80px] items-center ">
            <p className=" rounded-[8px] text-[#1C6839]leading-[17px] text-[14px] font-bold  ">
              Email
            </p>
            <Typography className="text-[#BEBFC5]">{email}</Typography>
          </div>

          <div className=" mt-[16px] ">
            <p className=" text-[#1C6839] leading-[17px] text-[14px] font-bold  ">
              Password
            </p>

            <InputPassword
              isPassword={true}
              width={272}
              className={`bg-[#d8eed6] ${
                passwordsMatchError
                  ? "border-x-red-32 focus:border-red"
                  : "focus:border-[#1C6839]"
              }`}
              onChange={handlePasswordChange}
            />
          </div>
          <p className=" text-bg_button_authen text-[11px] ">{passwordError}</p>
          <div className=" mt-[16px] ">
            <p className=" text-[#1C6839] leading-[17px] text-[14px] font-bold  ">
              Confirm Password
            </p>

            <InputPassword
              isPassword={true}
              width={272}
              className={`bg-[#d8eed6]  ${
                passwordsMatchError
                  ? "border-red focus:border-red-32"
                  : "focus:border-[#1C6839]"
              }`}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <p className=" text-[#D22121] text-[11px] leading-[13px]">
            {passwordsMatchError}
          </p>
          <div>
            <button
              className={` w-[200px] rounded-lg font-bold  text-[16px] h-[48px] bg-[#1C6839] text-white `}

              // onClick={() => {
              //     handleUpload();
              // }}
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
