"use client";

import { useFormStatus } from "react-dom";

function AnalyseButton() {
  const { pending } = useFormStatus();
  return (
    <div>
      <button
        disabled={pending}
        className="px-6 py-2 text-white bg-[#143D60] rounded-lg hover:bg-[#0F2C45] focud:outline-none
      focus:ring-2 focus:ring-[#143D60] focus:ring-offset-2 disabled:opacity-50
      disabled:cursor-not-allowed
      transition-all duration-300 font-medium "
      >
        {pending ? "Analysing..." : "Analyse"}
      </button>
    </div>
  );
}

export default AnalyseButton;
