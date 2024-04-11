import { redirect, RedirectType } from "next/navigation";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return redirect("/home", RedirectType["replace"]);
}
