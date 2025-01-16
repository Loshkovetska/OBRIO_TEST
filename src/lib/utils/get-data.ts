import { QuizResultType } from "@/types";
import fsPromises from "fs/promises";
import path from "path";

export async function getFullData() {
  const filePath = path.join(process.cwd(), "public/main.json");
  const jsonData = await fsPromises.readFile(filePath, { encoding: "utf8" });
  const objectData = JSON.parse(jsonData);
  return objectData;
}

export async function getData(slug: string) {
  const fullData = await getFullData();
  return {
    canGoBack: Object.keys(fullData)?.[0] !== slug,
    data: fullData?.[slug],
  };
}

export async function getFirstStep() {
  const fullData = await getFullData();

  const firstKey = Object.keys(fullData)?.[0];
  return {
    [firstKey]: fullData?.[firstKey],
  };
}

export async function getQuizQuestions(): Promise<QuizResultType> {
  const fullData = await getFullData();
  const obj: QuizResultType = {};
  Object.keys(fullData).forEach((k) => {
    obj[k] = {
      title: fullData[k].title,
      replace_parts: fullData[k]?.replace_parts,
    };
  });

  return obj;
}
