import Link from 'next/link';


const Login = () => {
  return (
    //main screen
    <div className="h-screen flex ">
      {/* //purple div */}
      <div className="bg-gradient-to-b from-lightPurple via-mediumPurple to-darkPurple h-screen w-7/12 relative">

        <img src="/spiral-login.png" alt="spiral" 
        className="absolute pl-[1000px]"/>
        <img src="/dots.png" alt="dots" 
        className="absolute" />
        <img src="/outerEllipse.png" alt="out ellipse" 
        className="absolute pt-[36px] h-[100%] " />
        <img src="/innerEllipse.png" alt="in ellipse" 
        className="absolute pt-[176px] " />
        <img src="/blurEllipse.png" alt="blur img" 
        className="absolute pl-[972px] pt-[760px]" />
        
        <h1 className="absolute pl-[300px] pt-[170px] w-[800px] z-10  font-RobotoSerif font-semibold text-[48px] text-white">
          Embark on Your Learning Adventure with 
          <span className="font-Syne font-bold text-[56px]">{" "}Mocsha</span>
        </h1>
        <img className="absolute z-10 pt-[446px] pl-[250px]" src="/girlImage.png" alt="girl"/>
        <img className="absolute z-10 pt-[596px] pl-[250px]" src="/imageEllipse.png" alt="ellipse"/>

        <div className="flex flex-col absolute mt-[70px] ml-[150px] h-[805px] w-[842px] rounded-xl bg-white shadow-lg  opacity-25">

        </div>
      </div>

      {/* //white div */}
      <div className="flex flex-col w-5/12 bg-white ">
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <h2 className=" font-semibold font-Roboto text-3xl text-textPurple ">
            Login to your account
          </h2>
          <div className="flex flex-col  items-start">
            <label className="pl-3 text-textColor text-[16px] font-medium font-Roboto">
              Email
            </label>
            <input
              className="bg-emailButton rounded-[12px] w-[482px] p-3 placeholder:text-textColor text-black font-normal font-Roboto "
              type="email"
              placeholder="xyz@gmail.com"
              required
            />
          </div>
          <button className=" bg-OTPButton rounded-[12px] w-[482px] text-white p-3 font-semibold font-Roboto">
            Send OTP
          </button>
          <div className="flex justify-end w-[55%]">
            <h4 className="text-textColor  text-[14px] font-regular font-Roboto">
              Dont have an account?{" "}
              <Link href="/signup">
                <span className="text-OTPButton text-[16px] font-Roboto font-semibold cursor-pointer">
                  Sign Up
                </span>
              </Link>
            </h4>
          </div>

          <div className="flex justify-center  items-center space-x-2">

            <div className="h-[1px] bg-gray-300 w-[100px]"></div>
            <h1 className="text-textColor font-Roboto">Or</h1>
            <div className="h-[1px] bg-gray-300 w-[100px]"></div>
            
          </div>
          
          <button className="flex gap-4 justify-center border-2 border-borderColor w-[482px] rounded-[12px] p-3 text-textColor text-[16px] font-medium font-Roboto">
            <img src="/GoogleIcon.png" alt="google icon" />
            Continue with Google
          </button>
          <button className="flex gap-4 justify-center border-2 border-borderColor w-[482px] rounded-[12px] p-3 text-textColor text-[16px] font-medium font-Roboto">
            <img src="/GithubIcon.png" alt="github icon"/>
            Continue with Github
          </button>
          
        </div>
      </div>
    </div>
  )
};

export default Login;
