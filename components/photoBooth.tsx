import Image from "next/image";

import image1 from "../public/img1.webp";
import image2 from "../public/img2.jpg";
import image4 from "../public/img4.jpg";
import image5 from "../public/img5.jpg";
import image6 from "../public/img6.jpg";

const PhotoBooth = () => {
    return (
        <div className="container mx-auto">
            <div className="mx-auto font-serif text-3xl font-semibold text-center lg:pt-1 lg:px-32 md:pb-1">
                <p>Gallary</p>
            </div>
            <div className="">
                <hr className="py-2" />
            </div>
            <div className="container px-5 mx-auto lg:px-32">
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
                            <img
                                alt="gallery"
                                className="block object-cover object-center w-full h-full rounded-lg"
                                src={"https://d1wbcovc1jzt1a.cloudfront.net/printable/images/product_icon/Lunch_Box_150_x_100_x_45_Gnereic_Food_Design_0178.gif"}
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

export default PhotoBooth;
