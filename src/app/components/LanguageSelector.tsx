"use client";
import { CssBaseline } from "@mui/material";
import React from "react";
import SelectButton from "./SelectButton";
import { locales } from "@/i18n";
import { usePathname, useRouter } from "../../navigation";
import { useLocale } from "next-intl";

const LanguageSelector = () => {
  function t(test: string) {
    return test;
  }
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <CssBaseline />
      <SelectButton
        selectItems={{
          inputLabel: {
            text: t("lang"),
          },
          menuItems: locales.map((lang, index) => {
            return { id: index, text: lang };
          }),
        }}
        onChange={(e) => {
          router.push(pathname, { locale: e.target.value });
        }}
        defaultValue={locale}
      />
    </>
  );
};

export default LanguageSelector;
