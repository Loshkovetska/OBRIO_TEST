"use client";
import { useAppSelector } from "@/lib/hooks/store.hooks";
import { modifyQuizTitle } from "@/lib/utils/string";
import { QuizResultType } from "@/types";
import { Fragment, useCallback } from "react";

export default function QuizResult({ data }: { data: QuizResultType }) {
  const state = useAppSelector((s) => s.quiz);

  const getTitle = useCallback(
    (title: string, replace_parts?: { [key in string]: string }) =>
      modifyQuizTitle(title, state.quiz, replace_parts),
    [state]
  );

  return (
    <div className="flex flex-col gap-5 pb-20 px-[15px]">
      <h1 className="text-2xl font-bold text-center">Results</h1>
      <div className="flex flex-col gap-4 list-decimal">
        {Object.entries(data).map(([key, value]) => (
          <Fragment key={key}>
            {state.quiz[key] && (
              <div className="flex gap-3 flex-col list-decimal">
                <h2 className="text-lg font-bold">
                  {getTitle(value.title, value.replace_parts)}
                </h2>
                <p>{state.quiz[key]}</p>
              </div>
            )}
            {state.quiz[key] && <div className="w-full border border-alto" />}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
