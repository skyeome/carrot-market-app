"use client";

import { useState } from "react";
import EnterForm from "@/components/enter/EnterForm";
import EnterTab from "@/components/enter/EnterTab";
import EnterSocialLogin from "@/components/enter/EnterSocialLogin";
import { useForm } from "react-hook-form";

export interface EnterFormType {
  email?: string;
  phone?: string;
}

export default function Enter() {
  const { register, handleSubmit, reset } = useForm<EnterFormType>();
  const [method, setMethod] = useState<"email" | "phone">("email");
  return (
    <div className="mt-16 px-4">
      <h3 className="text-3xl font-bold text-center">Enter to Carrot</h3>
      <EnterTab method={method} setMethod={setMethod} reset={reset} />
      <EnterForm
        method={method}
        register={register}
        handleSubmit={handleSubmit}
      />
      <EnterSocialLogin />
    </div>
  );
}
