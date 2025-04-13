import { redirect } from "next/navigation";

export default function RootPage() {
  const defaultLocale = "ko";
  redirect(`/${defaultLocale}`);
}
