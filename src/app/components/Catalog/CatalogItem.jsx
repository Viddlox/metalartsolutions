import Image from "next/image"; // Use Next.js Image for automatic optimization
import { Quicksand, Roboto } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const CatalogItem = ({ src = "", label = "", desc = "", price = 0 }) => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-full p-4">
      <div className="w-full flex justify-center">
        <Image
          src={src}
          alt={label}
          width={300}
          height={300}
          className="rounded-sm"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center w-full mt-2">
        <span
          className={`${quicksand.className} text-xs lg:text-lg sm:text-base text-center text-white`}
        >
          {label}
        </span>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center w-full mt-2">
        <span
          className={`${roboto.className} text-xs lg:text-medium sm:text-base text-center text-white`}
        >
          {desc}
        </span>
      </div>
    </div>
  );
};

export default CatalogItem;
