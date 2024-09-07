import Lottie from "react-lottie";
import schoolLogo from "./assets/school logo.svg";
import schoolName from "./assets/school name.svg";
import animationData from "./assets/animation.json";
import facebook from "./assets/facebook.svg";
import twitter from "./assets/twitter.svg";
import instagram from "./assets/instagram.svg";
import whastapp from "./assets/whatsapp.svg";

function App() {
  const animationOption = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="min-h-[100vh] flex flex-col">
      <header className="bg-[#001533]">
        <div className="container">
          <div className="flex gap-2 py-8">
            <img src={schoolLogo} className="h-[37px] md:h-[61px]" />
            <img src={schoolName} className="h-[37px] md:h-[61px]" />
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col justify-center items-center gap-20">
        <div className="">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={400}
            width={400}
          />
        </div>
        <div className="flex justify-between gap-8">
          <img src={instagram} className="h-[50px] w-[50px]" />
          <img src={twitter} className="h-[50px] w-[50px]" />
          <img src={whastapp} className="h-[50px] w-[50px]" />
          <img src={facebook} className="h-[50px] w-[50px]" />
        </div>
      </main>
      <footer className="bg-[#001533] text-white">
        <div className="container">
          <div className="py-12 flex gap-6 md:gap-20">
            <div className="">
              <p className="font-[700] text-[11px] md:text-[16px]">Address</p>
              <p className="text-[11px] md:text-[16px]">
                130 Intercontinental Road Kano, Nigeria.
              </p>
            </div>
            <div className="mr-8 ">
              <p className="font-[700] text-[11px] md:text-[16px]">Email</p>
              <p className="text-[11px] md:text-[16px]">
                info@intercontinentalshls.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
