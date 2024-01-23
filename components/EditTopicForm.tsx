import React from "react";

export const EditTopicForm = () => {
  return (
    <form className="flex flex-col gap-3 ">
      <input
        type="text"
        placeholder="Topic Title"
        className="border border-slate-500 py-2 px-4"
      />
      <input
        type="text"
        placeholder="Topic Description"
        className="border border-slate-500 py-2 px-4"
      />
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
};
