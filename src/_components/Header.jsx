import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex flex-col gap-2">
      <Image src="./pineLogo.svg" alt="logo" width={30} height={30} />
      <h1 className="text-xl font-bold">Join Us! 😎</h1>
      <p className="text-gray-300">
        Please provide all current information accurately.
      </p>
    </div>
  );
};
