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
                <p>Gallery</p>
            </div>
            <div className="">
                <hr className="py-2" />
            </div>
            <div className="container px-5 mx-auto lg:px-32">
                <div className="flex flex-wrap -m-1 md:-m-2">
                    <div className="flex flex-wrap w-1/2">
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="First image description"
                                className="block object-cover object-center w-full h-full rounded-lg"
                                src={image1}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="Second image description"
                                className="block object-cover object-center w-full h-full rounded-lg"
                                src={image2}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image
                                alt="Lunch Box design GIF"
                                className="block object-cover object-center w-full h-full rounded-lg"
                                src={"https://media.istockphoto.com/id/519913201/photo/printing-at-high-speed.jpg?s=612x612&w=0&k=20&c=HTA2-lBM-5AM6YwiCfilUFmqziyYSDNd4MVDYD17Ncw="}
                                unoptimized
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="w-full p-1 md:p-2">
                            <Image
                                alt="Fourth image description"
                                className="block object-cover object-center w-full h-full rounded-lg"
                                src={image4}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="Fifth image description"
                                className="block object-cover object-center w-full h-full rounded-lg"
                                src={image5}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="Sixth image description"
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
