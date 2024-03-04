import { UseFormHandleSubmit, UseFormRegister, useForm } from "react-hook-form";
import Button from "../common/button";
import Input from "../common/input";
import { EnterFormType } from "@/app/enter/page";

interface EnterFormProps {
  method: string;
  register: UseFormRegister<EnterFormType>;
  handleSubmit: UseFormHandleSubmit<EnterFormType, undefined>;
  enter: (data: any) => void;
}

export default function EnterForm({
  method,
  register,
  handleSubmit,
  enter,
}: EnterFormProps) {
  const onSubmit = handleSubmit((data) => {
    enter(data);
  });

  return (
    <form className="flex flex-col mt-8 space-y-4" onSubmit={onSubmit}>
      {method === "email" && (
        <Input
          register={register("email", { required: "이메일을 입력해주세요" })}
          label="Email address"
          type="email"
          required
        />
      )}
      {method === "phone" && (
        <Input
          register={register("phone", { required: "전화번호를 입력해주세요" })}
          label="Phone number"
          type="number"
          kind="phone"
          required
        />
      )}
      {method === "email" && <Button text={"Get login link"} />}
      {method === "phone" && <Button text={"Get one-time password"} />}
    </form>
  );
}
