import { type ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  date: string;
};

export default function SmallCard({ title, children, date }: Props) {
  return (
    <div className="relative p-2 rounded-xl bg-card shadow-md border">
      <h2 className="absolute backdrop-blur-[2px] px-2 font-semibold -top-2">
        {title}, {date}
      </h2>
      <div className="flex flex-row justify-between items-center gap-1">
        {children}
      </div>
    </div>
  );
}
