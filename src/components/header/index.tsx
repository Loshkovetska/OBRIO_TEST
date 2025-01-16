import Logo from "@/assets/Logo.png";
import HeaderBack from "@/components/header/header-back";
import { ScreenThemeType } from "@/types";
import cls from "classnames";
import Image from "next/image";

type HeaderPropType = {
  slug: string;
  theme?: ScreenThemeType;
  canGoBack?: boolean;
};

export default function Header({
  slug,
  theme = "light",
  canGoBack = true,
}: HeaderPropType) {
  return (
    <header className="w-full flex items-center justify-center py-[10px] lg:py-[15px] px-[15px] relative lg:h-[54px] h-[44px] max-w-[1180px] mx-auto">
      {canGoBack && (
        <HeaderBack
          slug={slug}
          theme={theme}
        />
      )}
      <div className="size-6 flex items-center justify-center">
        <Image
          src={Logo}
          width={16}
          height={16}
          alt="logo"
          className={cls(theme === "dark" ? "invert sepia-[95%]" : "")}
        />
      </div>
    </header>
  );
}
