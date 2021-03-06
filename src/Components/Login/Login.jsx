import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Divider
} from "@mui/material";
import { Link } from "react-router-dom";
import { SnackbarContext } from "../../Context/SnackbarContext/SnackbarContext";
import { useContext } from "react";

export default function Login() {
  const { handleOpen } = useContext(SnackbarContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOpen("Servicio no disponible por el momento.", "error");
  };

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
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container rowSpacing={3}>
              <Grid item xs={12}>
                <Typography component="h2" fontSize="24px" fontWeight="medium">
                  Iniciar sesión
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="standard">
                  <InputLabel>Correo electrónico</InputLabel>
                  <Input type="email" />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="standard">
                  <InputLabel>Contraseña</InputLabel>
                  <Input type="password" variant="" />
                  <FormHelperText sx={{ textAlign: "right" }}>
                    Olvide mi contraseña. <Link to="/recover">Click aqui.</Link>
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Iniciar sesión
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ margin: "1.6em 0" }} />
          <Button fullWidth component={Link} to="/signup" variant="outlined">
            Crear cuenta
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
