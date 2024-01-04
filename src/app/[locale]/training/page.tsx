import { useLocale, useTranslations } from "next-intl";
import Markdown from "../../components/Markdown";
import { Container, Grid } from "@mui/material";

export default function Index() {
  const t = useTranslations("Index");
  const locale = useLocale();

  return (
    <Container maxWidth="lg">
      <Grid sx={{ mt: 3 }}>
        <Grid item xs={12} md={8}>
          <Markdown locale={locale} page="training" />
        </Grid>
      </Grid>
    </Container>
  );
}
