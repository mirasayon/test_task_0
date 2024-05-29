import Info from "@/components/info";
import IPerson from "@/types/data";
import Image from "next/image";
import React, { useState } from "react";
export default function Modal({
  item,
  show,
  setter,
}: {
  item: IPerson;
  show: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [is_in, set_in] = useState(false);
  return (
    show && (
      <>
        <dialog
          onClick={(e) => {
            e.preventDefault();
            if (is_in) {
              return;
            }
            setter(false);
          }}
          className="fixed left-0 top-0 w-full h-full bg-black/20 bg-opacity-15 overflow-auto flex justify-center items-center"
        >
          <div
            onMouseEnter={(e) => {
              e.preventDefault();
              set_in(true);
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              set_in(false);
            }}
            className="rounded-3xl   shadow-lg  relative z-50 shadow-slate-400 p-4 bg-white m-4 w-[500px] h-[500px]"
          >
            <div className="grid m-4 gap-4">
              <button
                type="button"
                onClick={(e) => {
                  setter(false);
                }}
                className="absolute right-4"
              >
                <Image src={"/assets/x.svg"} alt={""} width={40} height={40} />
              </button>
              <span className="font-black text-xl"> {item.name}</span>
              <Info item={item} />
            </div>
          </div>
        </dialog>
      </>
    )
  );
}
