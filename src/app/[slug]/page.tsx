import QuizContent from "@/components/quiz/quiz-content";
import QuizResult from "@/components/quiz/quiz-result";
import QuizWrapper from "@/components/quiz/quiz-wrapper";
import { getData, getFullData, getQuizQuestions } from "@/lib/utils/get-data";
import { QuizResultType, QuizType } from "@/types";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  const fullData = await getFullData();

  const pages = Object.keys(fullData).map((key) => ({
    slug: key,
  }));

  return [...pages, { slug: "result" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const isResultScreen = slug === "result";
  let data;

  if (!isResultScreen) {
    data = await getData(slug);
  }
  if (isResultScreen) {
    data = await getQuizQuestions();
  }

  if (!data && !isResultScreen) return notFound();
  return (
    <QuizWrapper
      slug={slug}
      theme={data?.data?.theme}
      canGoBack={!!data?.canGoBack || isResultScreen}
    >
      {!isResultScreen && (
        <QuizContent
          slug={slug}
          {...(data?.data as QuizType)}
        />
      )}
      {isResultScreen && <QuizResult data={data as QuizResultType} />}
    </QuizWrapper>
  );
}
