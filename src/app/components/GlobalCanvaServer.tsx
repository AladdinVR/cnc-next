"use server";

import { useTranslations } from "next-intl";
import GlobalHeaderProvider from "./GlobalHeaderProvider";

const GlobalCanvaServer = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations("Header");

  let sections = [
    {
      title: t("home"),
      dest: "/home",
    },
    {
      title: t("join"),
      dest: "join",
    },
    {
      title: t("history"),
      dest: "history",
    },
    {
      title: t("song"),
      dest: "song",
    },
    {
      title: t("training"),
      dest: "training",
    },
    {
      title: t("records"),
      dest: "records",
    },
  ];
  return (
    <GlobalHeaderProvider sections={sections}>{children}</GlobalHeaderProvider>
  );
};

export default GlobalCanvaServer;
