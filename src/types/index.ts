type QuizType = {
  screenType: ScreenType;
  replace_parts?: { [key in string]: string };
  subscreen?: CommonScreenType;
} & CommonScreenType;

type CommonScreenType = {
  title: string;
  description?: string;
  subtitle?: string;
  theme?: ScreenThemeType;
  align?: ScreenAlignType;
  options: Array<QuizTypeOptionType>;
};

type ScreenAlignType = "center";

type ScreenThemeType = "light" | "dark";

type ScreenType = "options" | "date";

type QuizTypeOptionType = {
  label: string;
  next?: string;
};

type InitialStateType = {
  [key in string]: string | undefined;
};

type QuizResultType = {
  [key in string]: {
    title: string;
    replace_parts?: { [key in string]: string };
  };
};

export type {
  InitialStateType,
  QuizResultType,
  QuizType,
  ScreenAlignType,
  ScreenThemeType,
  ScreenType,
};
