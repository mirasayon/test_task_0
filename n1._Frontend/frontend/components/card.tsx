"use client";
import IPerson from "@/types/data";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "@/components/modal";
export default function Card({
  item,
  ind,
}: {
  item: IPerson;
  ind: number;
}): React.JSX.Element {
  const [show, set] = useState<boolean>(false);
  function clickH(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    set((e) => !e);
  }
  return (
    <>
      <button type="button" onClick={clickH}>
        <div className="rounded-3xl shadow-lg shadow-slate-400 p-4 bg-white/20 m-4 w-[400px] h-[400px]">
          <div className="grid m-4 gap-4 justify-start">
            <span className="font-black text-xl"> {item.name}</span>
            <span className="flex ">
              <Image
                src={"/assets/smartphone.svg"}
                alt=""
                width={30}
                height={30}
              />
              <span className="m-2">{item.phone}</span>
            </span>

            <span className="flex ">
              <Image src={"/assets/mail.svg"} alt="" width={30} height={30} />
              <span className="m-2">{item.email}</span>
            </span>
          </div>
        </div>
      </button>
      <Modal item={item} show={show} setter={set} />
    </>
  );
}
