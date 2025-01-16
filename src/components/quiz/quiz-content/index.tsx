"use client";
import QuizBirthDate from "@/components/quiz/quiz-birthdate";
import QuizContentHeader from "@/components/quiz/quiz-content/quiz-content-header";
import QuizOptions from "@/components/quiz/quiz-options";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/store.hooks";
import { updateState } from "@/lib/slices/quiz-slice";
import { generateQuizContent } from "@/lib/utils/quiz-content";
import { QuizType } from "@/types";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

export default function QuizContent({
  slug,
  ...quizContent
}: QuizType & { slug: string }) {
  const router = useRouter();

  const state = useAppSelector((s) => s.quiz);
  const dispatch = useAppDispatch();

  const content = useMemo(
    () =>
      generateQuizContent(slug, quizContent, state.quiz, state.subScreenTheme),
    [state, slug, quizContent]
  );

  const handleSelect = useCallback(
    (option: QuizType["options"][0]) => {
      dispatch(
        updateState({
          key: slug,
          label: option.label,
          theme: state.subScreenTheme
            ? undefined
            : quizContent.subscreen?.theme,
        })
      );

      if (state.subScreenTheme || !quizContent.subscreen) {
        router.push(option.next || "result");
      }
    },
    [slug, state, quizContent, router, dispatch]
  );

  return (
    <div className="flex flex-col gap-[30px] mx-auto w-full max-md:px-[15px] md:max-w-[330px]">
      <QuizContentHeader {...content} />
      {content.screenType === "date" && <QuizBirthDate />}
      <QuizOptions
        theme={content.theme}
        options={content.options}
        handleSelect={handleSelect}
      />
    </div>
  );
}
