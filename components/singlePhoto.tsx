import Image from "next/image";

import image1 from "../public/img1.webp";
import image2 from "../public/img2.jpg";
import image4 from "../public/img4.jpg";
import image3 from "../public/img3.jpg";
import image5 from "../public/img5.jpg";
import image6 from "../public/img6.jpg";

const SinglePhotoBooth = () => {
    return (
        <div className="container mx-auto">
            <div className="object-center px-5 pb-10 duration-300 bg-center hover:scale-105 drop-shadow-2xl lg:max-w-full lg:ml-28 lg:px-32">
                <Image
                    src={image3}
                    alt="Events"
                    width={1005}
                    height={670}
                    className="block object-cover object-center rounded-lg"
                    unoptimized
                />
            </div>
        </div>
    );
};

export default SinglePhotoBooth;
