import React, { useState, useEffect } from 'react';

function SintomasForm() {
  const [sintomas, setSintomas] = useState([]);
  const [sintomaSelecionado, setSintomaSelecionado] = useState('');
  const [sintomasConfirmados, setSintomasConfirmados] = useState([]);
  const [patientSymptoms, setPatientSymptoms] = useState([]);

  // Carrega os sintomas no formato original do banco
  useEffect(() => {
    const sintomasLista = [
      "abdominal_pain", "abnormal_menstruation", "acidity", "acute_liver_failure", "altered_sensorium",
      "anxiety", "back_pain", "belly_pain", "blackheads", "bladder_discomfort", "blister", "blood_in_sputum",
      "bloody_stool", "blurred_and_distorted_vision", "breathlessness", "brittle_nails", "bruising",
      "burning_micturition", "chest_pain", "chills", "cold_hands_and_feet", "coma", "congestion",
      "constipation", "continuous_feel_of_urine", "continuous_sneezing", "cough", "cramps", "dark_urine",
      "dehydration", "depression", "diarrhoea", "dyschromic_patches", "distention_of_abdomen", "dizziness",
      "drying_and_tingling_lips", "enlarged_thyroid", "excessive_hunger", "extra_marital_contacts",
      "family_history", "fast_heart_rate", "fatigue", "fluid_overload", "foul_smell_of_urine", "headache",
      "high_fever", "hip_joint_pain", "history_of_alcohol_consumption", "increased_appetite", "indigestion",
      "inflammatory_nails", "internal_itching", "irregular_sugar_level", "irritability", "irritation_in_anus",
      "itching", "joint_pain", "knee_pain", "lack_of_concentration", "lethargy", "loss_of_appetite",
      "loss_of_balance", "loss_of_smell", "loss_of_taste", "malaise", "mild_fever", "mood_swings",
      "movement_stiffness", "mucoid_sputum", "muscle_pain", "muscle_wasting", "muscle_weakness", "nausea",
      "neck_pain", "nodal_skin_eruptions", "obesity", "pain_behind_the_eyes", "pain_during_bowel_movements",
      "pain_in_anal_region", "painful_walking", "palpitations", "passage_of_gases", "patches_in_throat",
      "phlegm", "polyuria", "prominent_veins_on_calf", "puffy_face_and_eyes", "pus_filled_pimples",
      "receiving_blood_transfusion", "receiving_unsterile_injections", "red_sore_around_nose",
      "red_spots_over_body", "redness_of_eyes", "restlessness", "runny_nose", "rusty_sputum", "scurrying",
      "shivering", "silver_like_dusting", "sinus_pressure", "skin_peeling", "skin_rash", "slurred_speech",
      "small_dents_in_nails", "spinning_movements", "spotting_urination", "stiff_neck", "stomach_bleeding",
      "stomach_pain", "sunken_eyes", "sweating", "swelled_lymph_nodes", "swelling_joints", "swelling_of_stomach",
      "swollen_blood_vessels", "swollen_extremities", "swollen_legs", "throat_irritation", "tiredness",
      "toxic_look_(typhus)", "ulcers_on_tongue", "unsteadiness", "visual_disturbances", "vomiting",
      "watering_from_eyes", "weakness_in_limbs", "weakness_of_one_body_side", "weight_gain", "weight_loss",
      "yellow_crust_ooze", "yellow_urine", "yellowing_of_eyes", "yellowish_skin"
    ];
    setSintomas(sintomasLista);
  }, []);

  // Função para confirmar o sintoma selecionado
  const handleConfirmarSintoma = () => {
    if (sintomaSelecionado && !sintomasConfirmados.includes(sintomaSelecionado)) {   // verificação para evitar duplicações
      setSintomasConfirmados([...sintomasConfirmados, sintomaSelecionado.replace(/_/g, ' ')]);
      setPatientSymptoms([...patientSymptoms, sintomaSelecionado]);
      setSintomaSelecionado('');
    }
  };

  // Função para desfazer o último sintoma confirmado
  const handleDesfazerUltimaEscolha = () => {
    setSintomasConfirmados(prevSintomas => prevSintomas.slice(0, -1));
    setPatientSymptoms(prevSymptoms => prevSymptoms.slice(0, -1));
  };

  // Função para apagar a lista inteira de sintomas confirmados
  const handleApagarLista = () => {
    setSintomasConfirmados([]);
    setPatientSymptoms([]);
  };

  // Função para enviar os sintomas
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sintomas enviados:", patientSymptoms); // para exportar para CSV, enviar este array
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
                {sintoma.replace(/_/g, ' ')}
              </option>
            ))}
          </select>
        </label>
        <button type="button" onClick={handleConfirmarSintoma} disabled={!sintomaSelecionado}>
          Confirmar Sintoma
        </button>
        <br /><br />
        <button type="button" onClick={handleDesfazerUltimaEscolha} disabled={sintomasConfirmados.length === 0}>
          Refazer Última Escolha
        </button>
        <button type="button" onClick={handleApagarLista} disabled={sintomasConfirmados.length === 0}>
          Apagar Lista
        </button>
        <br /><br />
        <h3 style={{ textAlign: 'center' }}>Sintomas Confirmados:</h3>
        <ul style={{ listStyleType: 'none', textAlign: 'center', padding: 0 }}>
          {sintomasConfirmados.map((sintoma, index) => (
            <li key={index}>{sintoma}</li>
          ))}
        </ul>
        <button type="submit" disabled={sintomasConfirmados.length === 0}>
          Enviar Todos os Sintomas
        </button>
        {/* <h3 style={{ textAlign: 'center' }}>Vetor patientSymptoms:</h3>
        <ul style={{ listStyleType: 'none', textAlign: 'center', padding: 0 }}>
          {patientSymptoms.map((sintoma, index) => (
            <li key={index}>{sintoma}</li>
          ))}
        </ul> */}
      </form>
    </div>
  );
}

export default SintomasForm;
