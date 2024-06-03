import IPerson from "@/types/data";

export default function Info({ item }: { item: IPerson }) {
  return (
    <div className="grid">
      <div className="flex justify-between">
        <div className="grid ">
          <span>Телефон:</span>
          <span>Почта:</span>
          <span>Дата приёма:</span>
          <span>Должность:</span>
          <span>Поздравление:</span>
        </div>
        <div className="grid text-slate-500 ">
          <span className="m-2">{item.phone}</span>
          <span className="m-2">{item.email}</span>
          <span className="m-2">{item.hire_date}</span>
          <span className="m-2">{item.department}</span>
          <span className="m-2">{item.position_name}</span>
        </div>
      </div>
      <div className="mt-8">
        <span>Дополнительная информация:</span>
        <br />
        <span className="text-slate-500 ">{item.position_name}</span>
      </div>
    </div>
  );
}
