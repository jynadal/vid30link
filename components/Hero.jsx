import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-center bg-white pb-10">
      <div className="w-60 mx-auto">
        <Image src={"/home_cinema.png"} width={400} height={400} layout="responsive" alt="home cinema" />
      </div>
      <h1 className="text-2xl text-gray-700 uppercase font-bold">Welcome to Vid30</h1>
      <p className="text-gray-500">You can play streaming movie here. WE HAVE TO VERRIFY SOME LAW AND BACKUP BY A LAWYER BEFORE PLAYING MOVIES.</p>
      <Link href="/contact" passHref>
        <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4">Play movie</button>
      </Link>
    </div>
  );
};

export default Hero;