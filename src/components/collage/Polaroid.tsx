import Image from "next/image";
import Tape from "./Tape";

type PolaroidProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  priority?: boolean;
  rotate?: number;
  className?: string;
  sizes?: string;
};

export default function Polaroid({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
  rotate = 0,
  className = "",
  sizes,
}: PolaroidProps) {
  return (
    <figure
      className={`relative border-2 border-ink bg-sheet p-3 pb-9 shadow-paper ${className}`}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      <Tape
        tone="yellow"
        rotate={-4}
        className="absolute -top-3 left-1/2 z-10 h-5 w-20 -translate-x-1/2"
      />
      <div className="relative overflow-hidden border border-ink/20 bg-paper">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className="h-auto w-full object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="absolute bottom-2 left-0 right-0 text-center font-hand text-sm text-ink-2">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
