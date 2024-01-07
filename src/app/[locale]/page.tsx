import { useLocale, useTranslations } from "next-intl";
import Markdown from "../components/Markdown";
import { Container, Grid } from "@mui/material";
import { redirect } from "@/navigation";

export default function Index() {
  const t = useTranslations("Index");
  redirect("/home");
}
