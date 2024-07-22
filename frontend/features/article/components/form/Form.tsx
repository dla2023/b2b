"use client";

import { addCommnent } from "@/features/article/actions/addComment";
import { FC, useRef } from "react";

interface FormProps {
  articleId: string;
}

export const Form: FC<FormProps> = ({ articleId }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    await addCommnent(formData, articleId.toString());
    formRef.current?.reset();
  };

  return (
    <form ref={formRef} className="flex flex-col gap-4" action={handleSubmit}>
      <textarea
        placeholder="Type here..."
        className="p-3 shadow-md border-none focus:outline-none block h-[100px] w-full bg-gray-50"
        name="comment"
        id="name"
      />
      <button
        className="w-[200px] h-[40px]
        rounded-lg
        text-white
        font-bold
        bg-red-400"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
