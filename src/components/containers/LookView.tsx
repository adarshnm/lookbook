"use client";
import Image from "next/image";
import { Look } from "@/types/looks";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useRouter } from "next/navigation";
import ProductCard from "./ProductCard";
import { useRef, useState } from "react";
import { SpeakerOffIcon, SpeakerLoudIcon } from "@radix-ui/react-icons";
type Props = {
  look: Look;
};

function LookView({ look }: Props) {
  const { media } = look;
  //   const [api, setApi] = useState<CarouselApi>();
  const router = useRouter();

  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    setIsMuted((prevMuted) => {
      const newMuted = !prevMuted;
      if (videoRef.current) {
        videoRef.current.muted = newMuted;
      }
      return newMuted;
    });
  };

  return (
    <div className="relative overflow-hidden min-h-full flex-1">
      <Carousel opts={{ watchDrag: false }}>
        <CarouselContent>
          {media.map((media) => (
            <CarouselItem key={media.src}>
              <div className="relative w-full h-full overflow-hidden">
                {media.type === "image" ? (
                  <Image
                    src={media.src}
                    alt={media.alt}
                    className="w-full h-screen object-cover"
                    object-fit="cover"
                    height={100}
                    width={100}
                    sizes="100vw"
                  />
                ) : (
                  <>
                    <video
                      ref={videoRef}
                      loop
                      playsInline
                      muted
                      autoPlay
                      className="w-full h-screen object-cover"
                    >
                      <source src={media.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div
                      className="absolute top-5 right-10 bg-slate-400 bg-opacity-50 p-3 rounded-full z-40"
                      onClick={toggleMute}
                    >
                      {isMuted ? (
                        <SpeakerLoudIcon className="h-4 w-4 text-red-600" />
                      ) : (
                        <SpeakerOffIcon className="h-4 w-4 text-red-600" />
                      )}
                    </div>
                  </>
                )}
              </div>

              {media.type === "image" && (
                <>
                  {media.imageInfo.map((imageInfo) => (
                    <div
                      className={cn(
                        "absolute flex space-x-4 z-20 ",
                        imageInfo.position
                      )}
                      key={imageInfo.productId}
                    >
                      <div
                        className="bg-slate-400 w-8 h-8 rounded-full shadow-lg  shadow-slate-400 border-2 border-blue-600 cursor-pointer"
                        onClick={() =>
                          router.push(`/products/${imageInfo.productId}`)
                        }
                      ></div>
                    </div>
                  ))}
                </>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext className="absolute right-0 top-1/2 transform h-[80%] w-20 -translate-y-1/2 bg-transparent border-none  text-black px-4 py-2 focus:bg-transparent focus-visible:bg-transparent disabled:bg-transparent disabled:text-transparent dark:bg-transparent dark:disabled:bg-transparent dark:focus-visible:bg-transparent dark:focus:bg-transparent dark:hover:bg-transparent " />
        <CarouselPrevious className="absolute left-0 top-1/2 transform h-[80%] w-20 -translate-y-1/2 bg-transparent border-none  text-black px-4 py-2 focus:bg-transparent focus-visible:bg-transparent disabled:bg-transparent disabled:text-transparent dark:bg-transparent dark:disabled:bg-transparent dark:focus-visible:bg-transparent dark:focus:bg-transparent dark:hover:bg-transparent" />
      </Carousel>

      <div className="absolute bottom-0 left-10">
        <Carousel>
          <CarouselContent>
            {look.products.map((product) => (
              <CarouselItem key={product.slug}>
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default LookView;
