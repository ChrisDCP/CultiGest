import { GuardarSiembra } from "./firebase";


const SiembraForm = document.getElementById('siembraForm');


SiembraForm.addEventListener('submit', (e) => e.preventDefault)
{
  const semilla = SiembraForm['Isemilla']
  const Suelo = SiembraForm['ISuelo']
  const Area = SiembraForm['IArea']
  const Fecha = SiembraForm['IFecha']

  GuardarSiembra(Isemilla.value, ISuelo.value, IArea.value, IFecha.value)

  SiembraForm.reset()

}

