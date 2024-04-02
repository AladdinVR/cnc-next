import Records from "@/app/components/Records";
import { Container, Grid } from "@mui/material";
import pick from "lodash/pick";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Index({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Records");
  const messages = useMessages();
  return (
    <Container maxWidth="lg">
      <Grid sx={{ mt: 3 }}>
        <Grid item xs={12} md={8}>
          <NextIntlClientProvider messages={pick(messages, "Records")}>
            <Records />
          </NextIntlClientProvider>
        </Grid>
      </Grid>
    </Container>
  );
}
