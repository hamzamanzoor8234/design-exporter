import { useRef } from "react";
import DownloadButton from "../components/DownloadButton";
import { gridData } from "../data/gridData";
import patterns from "../assets/images/watercolor-paper-texture.jpg";
export default function TechStackGrid() {
  const designRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-100 to-slate-200 p-10">
      <div className="relative">
        <DownloadButton
          targetRef={designRef}
          fileName="1080x1080.jpg"
          width={1080}
          height={764}
        />

        <div
          ref={designRef}
          className="p-12 rounded-3xl shadow-2xl bg-slate-50 w-270 h-191 "
          style={{
            backgroundImage: `url(${patterns})`,
          }}
        >
          <h1 className="text-6xl font-bold text-center mb-16  text-black">
            Tech Stack
          </h1>

          <div className="grid grid-cols-4 gap-10">
            {gridData.map((column, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                  {column.title}
                </h2>

                <div className="grid grid-rows-2 gap-6">
                  {column.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                    >
                      <img
                        src={item.icon}
                        alt={item.text}
                        className="w-12 h-12 mb-3 filter drop-shadow-md"
                      />
                      <p className="text-base font-medium text-gray-700">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
