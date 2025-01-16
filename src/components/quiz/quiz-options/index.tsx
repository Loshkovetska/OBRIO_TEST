import Button from "@/components/ui/button";
import { QuizType, ScreenThemeType } from "@/types";

type QuizOptionsPropType = {
  options: QuizType["options"];
  theme?: ScreenThemeType;
  handleSelect: (option: QuizType["options"][0]) => void;
};

export default function QuizOptions({
  options,
  theme = "light",
  handleSelect,
}: QuizOptionsPropType) {
  return (
    <div className="flex flex-col gap-5">
      {options.map((option) => (
        <Button
          key={option.label}
          className={
            theme === "dark"
              ? "h-[50px] !py-[10px] text-poppy hover:text-white text-lg border-none rounded-xl mt-[10px]"
              : ""
          }
          onClick={() => handleSelect(option)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
