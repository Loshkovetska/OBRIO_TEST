import { getFirstStep } from "@/lib/utils/get-data";
import { RedirectType, notFound, redirect } from "next/navigation";

export default async function Page() {
  const data = await getFirstStep();
  if (!data) notFound();

  const slug = Object.keys(data)?.[0];

  return redirect(`/${slug}`, "replace" as RedirectType);
}
