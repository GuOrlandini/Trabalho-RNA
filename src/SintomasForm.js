import React, { useState, useEffect } from 'react';

function SintomasForm() {
  const [sintomas, setSintomas] = useState([]);
  const [sintomaSelecionado, setSintomaSelecionado] = useState('');
  const [sintomasConfirmados, setSintomasConfirmados] = useState([]);

  // Sintomas definidos, deixei os nomes originais pois não sabia o formato
  useEffect(() => {
    const sintomasLista = [
      "abdominal pain", "abnormal menstruation", "acidity", "acute liver failure", "altered sensorium",
      "anxiety", "back pain", "belly pain", "blackheads", "bladder discomfort", "blister", "blood in sputum",
      "bloody stool", "blurred and distorted vision", "breathlessness", "brittle nails", "bruising",
      "burning micturition", "chest pain", "chills", "cold hands and feet", "coma", "congestion",
      "constipation", "continuous feel of urine", "continuous sneezing", "cough", "cramps", "dark urine",
      "dehydration", "depression", "diarrhoea", "dyschromic patches", "distention of abdomen", "dizziness",
      "drying and tingling lips", "enlarged thyroid", "excessive hunger", "extra marital contacts",
      "family history", "fast heart rate", "fatigue", "fluid overload", "foul smell of urine", "headache",
      "high fever", "hip joint pain", "history of alcohol consumption", "increased appetite", "indigestion",
      "inflammatory nails", "internal itching", "irregular sugar level", "irritability", "irritation in anus",
      "itching", "joint pain", "knee pain", "lack of concentration", "lethargy", "loss of appetite",
      "loss of balance", "loss of smell", "loss of taste", "malaise", "mild fever", "mood swings",
      "movement stiffness", "mucoid sputum", "muscle pain", "muscle wasting", "muscle weakness", "nausea",
      "neck pain", "nodal skin eruptions", "obesity", "pain behind the eyes", "pain during bowel movements",
      "pain in anal region", "painful walking", "palpitations", "passage of gases", "patches in throat",
      "phlegm", "polyuria", "prominent veins on calf", "puffy face and eyes", "pus filled pimples",
      "receiving blood transfusion", "receiving unsterile injections", "red sore around nose",
      "red spots over body", "redness of eyes", "restlessness", "runny nose", "rusty sputum", "scurrying",
      "shivering", "silver like dusting", "sinus pressure", "skin peeling", "skin rash", "slurred speech",
      "small dents in nails", "spinning movements", "spotting urination", "stiff neck", "stomach bleeding",
      "stomach pain", "sunken eyes", "sweating", "swelled lymph nodes", "swelling joints", "swelling of stomach",
      "swollen blood vessels", "swollen extremities", "swollen legs", "throat irritation", "tiredness",
      "toxic look (typhus)", "ulcers on tongue", "unsteadiness", "visual disturbances", "vomiting",
      "watering from eyes", "weakness in limbs", "weakness of one body side", "weight gain", "weight loss",
      "yellow crust ooze", "yellow urine", "yellowing of eyes", "yellowish skin"
    ];
    setSintomas(sintomasLista);
  }, []);

  // Função para confirmar o sintoma selecionado
  const handleConfirmarSintoma = () => {
    if (sintomaSelecionado && !sintomasConfirmados.includes(sintomaSelecionado)) {
      setSintomasConfirmados([...sintomasConfirmados, sintomaSelecionado]);
      setSintomaSelecionado('');
    }
  };

  // Função para desfazer o último sintoma confirmado
  const handleDesfazerUltimaEscolha = () => {
    setSintomasConfirmados(prevSintomas => prevSintomas.slice(0, -1));
  };

  // Função para apagar a lista inteira de sintomas confirmados
  const handleApagarLista = () => {
    setSintomasConfirmados([]);
  };

  // Função para enviar os sintomas
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sintomas enviados:", sintomasConfirmados); // definir formato e método de envio
  };

  return (
    <div>
      <h2>Informe seus sintomas</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Sintoma:
          <select value={sintomaSelecionado} onChange={(e) => setSintomaSelecionado(e.target.value)}>
            <option value="">Selecione um sintoma</option>
            {sintomas.map((sintoma, index) => (
              <option key={index} value={sintoma}>
                {sintoma}
              </option>
            ))}
          </select>
        </label>
        <button type="button" onClick={handleConfirmarSintoma} disabled={!sintomaSelecionado}>
          Confirmar Sintoma
        </button>
        <br />
        <br />
        <button type="button" onClick={handleDesfazerUltimaEscolha} disabled={sintomasConfirmados.length === 0}>
          Refazer Última Escolha
        </button>
        <button type="button" onClick={handleApagarLista} disabled={sintomasConfirmados.length === 0}>
          Apagar Lista
        </button>
        <br />
        <br />
        <h3 style={{ textAlign: 'center' }}>Sintomas Confirmados:</h3>
          <ul style={{ listStyleType: 'none', textAlign: 'center', padding: 0 }}>
            {sintomasConfirmados.map((sintoma, index) => (
              <li key={index}>{sintoma}</li>
            ))}
          </ul>
        <button type="submit" disabled={sintomasConfirmados.length === 0}>
          Enviar Todos os Sintomas
        </button>
      </form>


    </div>
  );
}

export default SintomasForm;
