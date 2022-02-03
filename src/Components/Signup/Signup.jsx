import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Divider,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function App() {
  let [params, setParams] = useSearchParams();
  const [id, setID] = useState(params.get("id"));
  const [email, setEmail] = useState(params.get("email"));

  return (
    <Container>
      <Grid
        container
        margin={{ md: "auto" }}
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={8} md={4} lg={3}>
          <Typography
            component="h1"
            textAlign="center"
            fontSize="48px"
            fontWeight="medium"
            marginBottom=".6em"
          >
            without
          </Typography>
          <Box component="form">
            <Grid container rowSpacing={3}>
              <Grid item xs={12}>
                <Typography component="h2" fontSize="24px" fontWeight="medium">
                  Crear cuenta
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="standard">
                  <InputLabel>Correo electrónico</InputLabel>
                  <Input type="email" value={email} />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="standard">
                  <InputLabel>ID de miembro</InputLabel>
                  <Input type="text" value={id} />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="standard">
                  <InputLabel>Contraseña</InputLabel>
                  <Input type="password" />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="standard">
                  <InputLabel>Repetir contraseña</InputLabel>
                  <Input type="password" />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  label="He leido y acepto los terminos y condiciones."
                  control={<Checkbox size="small" sx={{ fontSize: 12 }} />}
                  sx={{ "& .MuiTypography-root": { fontSize: 14 } }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ margin: "1.6em 0" }} />
          <Button color="info" fullWidth variant="text">
            <Link
              to="/login"
              style={{
                color: "inherit",
                textDecoration: "none",
                width: "100%"
              }}
            >
              Iniciar sesión
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
