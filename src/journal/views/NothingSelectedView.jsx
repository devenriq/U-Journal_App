import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px",
        background: "primary.main",
        padding: 4,
      }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: "dark" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography>Selecciona o crea una nota</Typography>
      </Grid>
    </Grid>
  );
};
