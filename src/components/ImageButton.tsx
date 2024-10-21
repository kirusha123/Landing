import { FC } from "react";

interface ImageButtonProps {
  image: string;
  url: string;
}

export const ImageButton: FC<ImageButtonProps> = ({ image, url }) => {
  return (
    <button
      onClick={() => (document.location.href = url)}
      className="w-16 h-16 hover:opacity-80 hover:scale-95"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    />
  );
};
