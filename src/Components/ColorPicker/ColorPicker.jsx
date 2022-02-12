import {
  Box,
  Container,
  FormControl,
  FormLabel,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup
} from "@mui/material";
import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("primary.main");
  const handleColor = (e) => setColor(e.target.value);
  const propsControl = (bgcolor, textColor) => ({
    value: bgcolor,
    label: bgcolor,
    checked: bgcolor === color,
    sx: {
      position: "relative",
      bgcolor: bgcolor,
      color: textColor,
      p: 0,
      width: "126px",
      height: "126px",
      borderRadius: "25px",
      mx: 0,
      "& .MuiTypography-root": { display: "none" },
      "& .MuiRadio-root": {
        position: "absolute",
        bottom: "12px",
        right: "12px"
      }
    }
  });
  console.log(color);
  return (
    <Container>
      <Box component="form">
        <FormControl fullWidth>
          <FormLabel>Selecciona el color</FormLabel>
          <RadioGroup value={color} onChange={handleColor}>
            <Grid
              container
              columnSpacing={{
                xs: 1,
                sm: 2,
                lg: 4
              }}
              rowSpacing={{ xs: 2, md: 2 }}
              justifyContent={{
                xs: "space-around",
                sm: "flex-start"
              }}
            >
              <Grid item xs="auto">
                <FormControlLabel
                  {...propsControl("primary.main", "primary.contrastText")}
                  control={<Radio color="secondary" />}
                />
              </Grid>
              <Grid item xs="auto">
                <FormControlLabel
                  {...propsControl("secondary.main", "secondary.contrastText")}
                  control={<Radio color="primary" />}
                />
              </Grid>
              <Grid item xs="auto">
                <FormControlLabel
                  {...propsControl("error.main", "error.contrastText")}
                  control={<Radio color="primary" />}
                />
              </Grid>
              <Grid item xs="auto">
                <FormControlLabel
                  {...propsControl("warning.main", "warning.contrastText")}
                  control={<Radio color="primary" />}
                />
              </Grid>
              <Grid item xs="auto">
                <FormControlLabel
                  {...propsControl("info.main", "info.contrastText")}
                  control={<Radio color="secondary" />}
                />
              </Grid>
              <Grid item xs="auto">
                <FormControlLabel
                  {...propsControl("success.main", "success.contrastText")}
                  control={<Radio color="primary" />}
                />
              </Grid>
              <Grid item xs="auto">
                <FormControlLabel
                  {...propsControl("text.primary", "background.paper")}
                  control={<Radio color="primary" />}
                />
              </Grid>
              <Grid item xs="auto">
                <FormControlLabel
                  {...propsControl("text.secondary", "background.paper")}
                  control={<Radio color="primary" />}
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
      </Box>
    </Container>
  );
}

export default ColorPicker;
