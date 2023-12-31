import { useTranslations } from "next-intl";
import LanguageSelector from "../components/LanguageSelector";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <>
      <LanguageSelector />
      <h1>{t("title")}</h1>
    </>
  );
}