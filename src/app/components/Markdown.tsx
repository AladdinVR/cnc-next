"use client";
import MuiMarkdown from "mui-markdown";
import { useEffect, useState } from "react";

export default function Markdown(props: { locale: string; page: string }) {
  const [markdown, setMarkdown] = useState("");
  fetch(`/markdown/${props.locale}/${props.page}.md`)
    .then((res: { text: () => any }) => res.text())
    .then((text: string) => {
      setMarkdown(text);
    });

  return <MuiMarkdown>{markdown}</MuiMarkdown>;
}
