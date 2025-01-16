import { ScreenAlignType, ScreenThemeType } from "@/types";
import cls from "classnames";

type QuizContentHeaderPropType = {
  theme?: ScreenThemeType;
  align?: ScreenAlignType;
  title: string;
  subtitle?: string;
  description?: string;
};

export default function QuizContentHeader({
  theme = "light",
  align,
  ...content
}: QuizContentHeaderPropType) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  const commonStyle = cls(isDark && "text-dr-white", isCenter && "text-center");
  return (
    <div className="flex flex-col gap-5">
      <h1 className={cls("text-2xl font-bold", commonStyle)}>
        {content.title}
      </h1>
      {content.subtitle && (
        <h2 className={cls("text-lg mt-[10px] font-bold", commonStyle)}>
          {content.subtitle}
        </h2>
      )}
      {content.description && (
        <p className={cls("text-lg", commonStyle)}>{content.description}</p>
      )}
    </div>
  );
}
