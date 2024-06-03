"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Search_Component(): React.JSX.Element {
  const router = useRouter();
  const [s_string, set_s_string] = useState("");
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const _name: string = event.currentTarget.rname.value;
    set_s_string(_name);
    return router.replace("/?name=" + _name);
  }
  return (
    <form
      onSubmit={onSubmit}
      className="flex justify-between bg-transparent border-2 border-slate-500 rounded-full p-4 w-full flex-row relative"
    >
      <input
        name="rname"
        value={s_string}
        onChange={(e) => {
          set_s_string(e.currentTarget.value);
        }}
        id="rname"
        className="text-2xl w-full bg-transparent px-4 outline-none"
        placeholder=""
      />
      {s_string.length > 0 && (
        <button
          onClick={(e) => {
            set_s_string("");
            e.preventDefault();
            router.push("/");
          }}
          type="button"
          className="px-4"
        >
          <Image alt="" width={40} height={40} src={"/assets/x.svg"} />
        </button>
      )}
      <button type="submit" className="px-4">
        <Image alt="" width={40} height={40} src={"/assets/search.svg"} />
      </button>{" "}
    </form>
  );
}
