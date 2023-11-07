import { GuardarSiembra, VerSiembras, onGetSiembra } from "./firebase";


const SiembraForm = document.getElementById('siembraForm')
const siembraContainer = document.getElementById('Siemmbra-container')

window.addEventListener('DOMContentLoaded', async () => {
  onGetSiembra((querySnapshot) => {
    let html = "";
  
    querySnapshot.forEach((doc) => {
      const siembra = doc.data();
      html += 
          <div>
            <p>${siembra.Semilla}</p>
            <p>${siembra.TipoSuelo}</p>
            <p>${siembra.Area}</p>
            <p>${siembra.Fecha}</p>
          </div>
          ;
    });
    siembraContainer.innerHTML = html;

  })

})


SiembraForm.addEventListener('submit', (e) => 
{
  e.preventDefault()

  const Semilla = SiembraForm['Isemilla']
  const Suelo = SiembraForm['ISuelo']
  const Area = SiembraForm['IArea']
  const Fecha = SiembraForm['IFecha']

  console.log(Semilla.value, Suelo.value, Area.value, Fecha.value)

  
  SiembraForm.reset()

})

