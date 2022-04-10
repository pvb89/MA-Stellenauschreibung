import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Allgemein from "./Allgemein";
import Spezifisch from "./Spezifisch";
import Taetigkeiten from "./Taetigkeiten";

const steps = ["Allgemein", "Spezifisch", "Taetigkeiten"];

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [allgemein, setAllgemein] = React.useState({
    allg_funktionsbezeichnung: {
      value: "",
      type: "string",
    },
    allg_quereinsteiger: {
      value: false,
      type: "boolean",
    },
    allg_berufserfahrung: {
      value: false,
      type: "boolean",
    },
    allg_leitungsfunktion: {
      value: "",
      type: "string",
    },
    allg_EG10: {
      value: 0,
      type: "integer",
    },
    allg_EG11: {
      value: 0,
      type: "integer",
    },
    allg_EG12: {
      value: 0,
      type: "integer",
    }
  });
  const [spezifisch, setSpezifisch] = React.useState({});
  const [taetigkeiten, setTaetigkeiten] = React.useState({
    taetigkeit_beschreibung: {
      value: "",
      type: "string",
    },
    taetigkeit_zeitanteil: {
      value: 0,
      type: "integer",
    },
    taetigkeit_besondereLeistungen: {
      value: false,
      type: "boolean",
    },
    taetigkeit_schwereBedeutung: {
      value: false,
      type: "boolean",
    },
    taetigkeit_spezialaufgaben: {
      value: false,
      type: "boolean",
    },
    taetigkeit_verantwortung: {
      value: false,
      type: "boolean",
    }
  });

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Allgemein data={allgemein} setData={setAllgemein} />;
      case 1:
        return <Spezifisch data={spezifisch} setData={setSpezifisch} />;
      case 2:
        return <Taetigkeiten data={taetigkeiten} setData={setTaetigkeiten} />;
      default:
        throw new Error("Unknown step");
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = step => {
    return step === 1;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          component="img"
          sx={{
            maxWidth: 450,
            marginTop: 4,
          }}
          alt="The house from the offer."
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Technische_Hochschule_Brandenburg_Logo.svg/2000px-Technische_Hochschule_Brandenburg_Logo.svg.png"
        />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ marginBottom: 6 }}>
              <Stepper activeStep={activeStep} color="#cc0a2f">
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </Grid>

            {getStepContent(activeStep)}
          </Grid>
          <Box sx={{ marginLeft: "auto", mt: 2, mb: 2 }}>
            <Button
              sx={{ marginRight: 2 }}
              type="submit"
              variant="contained"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Zurück
            </Button>
            {activeStep === 2 ? (
              <Button
                sx={{ marginRight: 2 }}
                type="submit"
                variant="contained"
                onClick={handleBack}
              >
                Absenden
              </Button>
            ) : (
              <Button type="submit" variant="contained" onClick={handleNext}>
                Weiter
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
