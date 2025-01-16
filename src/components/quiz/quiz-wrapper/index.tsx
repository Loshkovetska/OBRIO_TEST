"use client";
import Header from "@/components/header";
import { useAppSelector } from "@/lib/hooks/store.hooks";
import { ScreenThemeType } from "@/types";
import cls from "classnames";

type QuizWrapperPropType = {
  slug: string;
  canGoBack?: boolean;
  theme?: ScreenThemeType;
} & React.PropsWithChildren;

export default function QuizWrapper(props: QuizWrapperPropType) {
  const subScreenTheme = useAppSelector((s) => s.quiz.subScreenTheme);

  const theme = subScreenTheme || props.theme;
  return (
    <div
      className={cls(
        "w-full flex flex-col gap-5 grow pb-20 px-[15px]",
        theme === "dark" ? "bg-primary" : "bg-powder-puff"
      )}
    >
      <Header
        theme={theme}
        canGoBack={props.canGoBack}
        slug={props.slug}
      />
      {props.children}
    </div>
  );
}
