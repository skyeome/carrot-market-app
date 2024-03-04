"use client";

import { useRouter } from "next/navigation";
import { cls } from "../libs/utils";

interface HeaderProps {
  title?: string;
  canGoBack?: boolean;
}

export default function Header({ title, canGoBack }: HeaderProps) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <div className="fixed border-b top-0 bg-white w-full h-12 max-w-xl flex items-center justify-center text-lg px-10 font-medium text-gray-800">
      {canGoBack ? (
        <button onClick={onClick} className="absolute left-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
      ) : null}
      {title ? (
        <span className={cls(canGoBack ? "mx-auto" : "", "")}>{title}</span>
      ) : null}
    </div>
  );
}
