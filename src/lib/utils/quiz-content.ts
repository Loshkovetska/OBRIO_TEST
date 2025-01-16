import { modifyQuizTitle } from "@/lib/utils/string";
import { InitialStateType, QuizType, ScreenThemeType } from "@/types";

export function generateQuizContent(
  slug: string,
  quizContent: QuizType,
  quiz: InitialStateType,
  subScreenTheme?: ScreenThemeType
) {
  const screenContent =
    subScreenTheme && quizContent.subscreen
      ? quizContent.subscreen
      : quizContent;

  const replace_parts =
    "replace_parts" in screenContent
      ? (screenContent as QuizType).replace_parts
      : undefined;

  const screenType =
    "screenType" in screenContent ? screenContent.screenType : undefined;

  const chosenOption = quizContent.options.find((d) => d.label === quiz[slug]);

  const options =
    subScreenTheme && quizContent.subscreen
      ? quizContent.subscreen.options.map((s) => ({
          ...s,
          next: chosenOption?.next,
        }))
      : quizContent.options;

  return {
    ...screenContent,
    title: modifyQuizTitle(screenContent?.title || "", quiz, replace_parts),
    options,
    screenType,
  };
}
