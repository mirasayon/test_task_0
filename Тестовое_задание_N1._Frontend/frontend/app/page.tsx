// import Image from "next/image";

import Search_Component from "@/components/search";
import Card from "@/components/card";
import IPerson from "@/types/data";
import Modal from "@/components/modal";
import Not_Found from "@/components/not_found";

export default async function Home({
  searchParams,
}: {
  searchParams: { [x: string]: string | undefined };
}) {
  const s_query = searchParams.name;
  const _url = s_query
    ? `http://127.0.0.1:3000/?term=${s_query}`
    : "http://127.0.0.1:3000/";
  const fetch_url = new URL(_url);
  const options: RequestInit = {
    method: "GET",
    cache: "force-cache",
  };
  const res: Response = await fetch(fetch_url, options);
  const data: IPerson[] = await res.json();
  const Cards: JSX.Element[] = data.map((item, index) => (
    <Card key={item.phone} item={item} ind={index} />
  ));
  return (
    <>
      <div className="m-10">
        <Search_Component />

        <div className=" flex flex-wrap justify-evenly ">
          {Cards.length > 0 ? Cards : <Not_Found />}
        </div>
      </div>
    </>
  );
}
