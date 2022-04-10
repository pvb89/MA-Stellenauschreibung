# Datamodel

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
