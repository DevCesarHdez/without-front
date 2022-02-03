import {
  Box,
  Container,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Divider
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Recover() {
  const [email, setEmail] = useState("");

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
                  Recuperar contraseña
                </Typography>
                <FormHelperText>
                  Escribe la dirección de correo electrónico asociado a tu
                  cuenta.
                </FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="standard">
                  <InputLabel>Correo electrónico</InputLabel>
                  <Input type="email" value={email} />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Recuperar contraseña
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ margin: "1.6em 0" }} />
          <Button to="/login" fullWidth component={Link} variant="outlined">
            Iniciar sesión
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
