import Chevron from "@/components/icons/chevron";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/store.hooks";
import { updateState } from "@/lib/slices/quiz-slice";
import { ScreenThemeType } from "@/types";
import cls from "classnames";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

type HeaderBackPropType = {
  theme: ScreenThemeType;
  slug: string;
};

export default function HeaderBack({ theme, slug }: HeaderBackPropType) {
  const router = useRouter();
  const state = useAppSelector((s) => s.quiz);
  const dispatch = useAppDispatch();

  const handleGoBack = useCallback(() => {
    dispatch(
      updateState({
        key: slug,
        label: undefined,
        theme: undefined,
      })
    );
    if (!state.subScreenTheme) {
      router.back();
    }
  }, [router, state, slug, dispatch]);

  return (
    <Chevron
      className={cls(
        "absolute left-0 top-1/2 -translate-y-1/2",
        theme === "dark" && "[&>path]:fill-[white]"
      )}
      onClick={handleGoBack}
    />
  );
}
