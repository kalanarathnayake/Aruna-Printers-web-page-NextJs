import Image from "next/image";

import image1 from "../public/img1.webp";
import image2 from "../public/img2.jpg";
import image3 from "../public/img3.jpg";
import image4 from "../public/img4.jpg";
import image5 from "../public/img5.jpg";
import image6 from "../public/img6.jpg";

const SinglePhotoBooth = () => {
    return (
        <div className="mb-28">
            <div className="mx-auto text-3xl font-semibold text-center lg:pt-1 lg:px-32 md:pb-4">
                <p>Gallary</p>
            </div>
            <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                <div className="flex flex-wrap -m-1 md:-m-2">
                    <div className="">
                        <p className=""></p>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block object-cover object-center w-full h-full rounded-lg"
                                src={image1}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block object-cover rounded-lg object-centfw-full"
                                src={image2}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block object-cover object-center w-full h-full rounded-lg"
                                src={image3}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="w-full p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block object-cover object-center w-full h-full rounded-lg"
                                src={image4}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block object-cover object-center w-full h-full rounded-lg"
                                src={image5}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block object-cover object-center w-full h-full rounded-lg"
                                src={image6}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePhotoBooth;
