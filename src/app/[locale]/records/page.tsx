import {
  NextIntlClientProvider,
  useLocale,
  useMessages,
  useTranslations,
} from "next-intl";
import Markdown from "../../components/Markdown";
import { Container, Grid } from "@mui/material";
import pick from "lodash/pick";
import Records from "@/app/components/Records";

export default function Index() {
  const t = useTranslations("Index");
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
