import { Container, Grid } from "@mui/material";
import Markdown from "../../components/Markdown";

export default function Index({
  params: { locale },
}: {
  params: { locale: string };
}) {
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
