import { RefObject } from "react";
import { toJpeg } from "html-to-image";

interface Props {
  targetRef: RefObject<HTMLDivElement>;
  fileName?: string;
  width?: number;
  height?: number;
}

export default function DownloadButton({
  targetRef,
  fileName,
  width = 1080,
  height = 764,
}: Props) {
  const handleDownload = async () => {
    if (!targetRef.current) return;

    const dataUrl = await toJpeg(targetRef.current, {
      quality: 0.95,
      width,
      height,
    });

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = fileName || "design.jpg";
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-lg shadow-lg"
    >
      Download JPG
    </button>
  );
}
