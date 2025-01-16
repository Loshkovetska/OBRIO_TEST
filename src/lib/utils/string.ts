import { InitialStateType } from "@/types";

export function extractWordsInCurlyBrackets(str: string) {
  const regex = /(\{[^}]+\})/g;

  let matches;
  const results = [];

  while ((matches = regex.exec(str)) !== null) {
    results.push(matches[1]);
  }

  return results;
}

export function modifyQuizTitle(
  title: string,
  state: InitialStateType,
  replace_parts?: { [key in string]: string }
) {
  if (!replace_parts || !title.includes("{")) return title;

  const parts = extractWordsInCurlyBrackets(title);
  parts.forEach((part) => {
    const objKey = replace_parts[part];
    const value = state[objKey];
    if (value) {
      const replacedStr =
        value === "Yes"
          ? part.replaceAll(/(\([^}]+\))/g, "").replaceAll(/[\{\}]/g, "")
          : value === "No"
            ? ""
            : String(value);
      title = title.replace(part, replacedStr);
    }
  });

  return title;
}
