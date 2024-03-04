import { EnterFormType } from "@/app/enter/page";
import { cls } from "@/libs/client/utils";
import { Dispatch, SetStateAction } from "react";
import { UseFormReset } from "react-hook-form";

interface EnterTabProps {
  method: string;
  setMethod: Dispatch<SetStateAction<"email" | "phone">>;
  reset: UseFormReset<EnterFormType>;
}

function EnterTab({ method, setMethod, reset }: EnterTabProps) {
  const onEmailClick = () => {
    reset();
    setMethod("email");
  };
  const onPhoneClick = () => {
    reset();
    setMethod("phone");
  };
  return (
    <div className="mt-12">
      <div className="flex flex-col items-center">
        <h5 className="text-sm text-gray-500 font-medium">Enter using:</h5>
        <div className="grid  border-b  w-full mt-8 grid-cols-2 ">
          <button
            className={cls(
              "pb-4 font-medium text-sm border-b-2",
              method === "email"
                ? " border-orange-500 text-orange-400"
                : "border-transparent hover:text-gray-400 text-gray-500"
            )}
            onClick={onEmailClick}
          >
            Email
          </button>
          <button
            className={cls(
              "pb-4 font-medium text-sm border-b-2",
              method === "phone"
                ? " border-orange-500 text-orange-400"
                : "border-transparent hover:text-gray-400 text-gray-500"
            )}
            onClick={onPhoneClick}
          >
            Phone
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnterTab;
