import special from "./../assets/spacial.jpg";
import { BsStickiesFill } from "react-icons/bs";
const Spacial = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 px-2 md:py-16 md:px-32 mt-20 bg-slate-300">
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-4xl font-bold pb-4">
          Why choose <span className="text-red-800">React-matrimony</span>
        </h2>
        <div>
          <div className="flex items-center pb-2 gap-2">
            <BsStickiesFill /> <h1>Register for free!</h1>{" "}
          </div>
          <div className="flex items-center pb-2 gap-2">
            <BsStickiesFill /> <h1>100% human verified profiles</h1>{" "}
          </div>
          <div className="flex items-center pb-2 gap-2">
            <BsStickiesFill /> <h1>Chat, Voice & Video calling</h1>{" "}
          </div>
          <div className="flex items-center pb-2 gap-2">
            <BsStickiesFill />{" "}
            <h1>Private, personalized, and highly confidential service</h1>{" "}
          </div>
          <div className="flex items-center gap-2 pb-6">
            <BsStickiesFill />{" "}
            <h1>Halal, safe and secured Matrimony site in Bangladesh</h1>{" "}
          </div>
        </div>
        <button className="btn btn-md w-full mx-auto bg-blue-900 text-white">
          Find Your Partner
        </button>
      </div>
      <figure>
        <img src={special} alt="Album" className="rounded-xl"/>
      </figure>
    </div>
  );
};

export default Spacial;
