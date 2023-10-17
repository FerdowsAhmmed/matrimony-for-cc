import { AiFillProfile } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { TbDeviceMobileMessage } from "react-icons/tb";
const Features = () => {
  return (
    <div className="grid md:grid-cols-3 gap-10 py-4 md:px-20">
      <div className="flex flex-col justify-evenly items-center">
        <h1 className="text-5xl text-green-900">
          {" "}
          <AiFillProfile />
        </h1>
        <h1 className="text-2xl py-4">Create Your Profile</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nam,
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl text-red-700">
          {" "}
          <GiSelfLove />
        </h1>
        <h1 className="text-2xl py-4">Search Your Partner</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nam,
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl text-purple-700">
          {" "}
          <TbDeviceMobileMessage />
        </h1>
        <h1 className="text-2xl py-4">Start Communication</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nam,
        </p>
      </div>
    </div>
  );
};

export default Features;
