import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://play-lh.googleusercontent.com/Ka2B-YaLBrAIW_4otSEaNcX8P1Qwj7vzjqOsNxe241MLJPF2A3nB70sVf6Tpu4-CH5Q=w1052-h592-rw)] h-screen w-full flex flex-col justify-between pt-8  ">
        <img
          className="w-20 ml-6"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt=""
        />
        <div className="bg-white/60 py-5 px-4 pb-5">
          <img src="" alt="" />
          <h2 className="text-3xl font-bold">Get started with Uber</h2>
          <Link
            to={"/login"}
            className="bg-black rounded-sm flex items-center justify-center text-xl text-white w-full py-3 mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
