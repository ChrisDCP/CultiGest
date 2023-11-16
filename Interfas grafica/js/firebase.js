  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCo9NUCzbSoGp1O2Vloh_qJt9Snu6FLaMc",
    authDomain: "cultigest-19dde.firebaseapp.com",
    projectId: "cultigest-19dde",
    storageBucket: "cultigest-19dde.appspot.com",
    messagingSenderId: "794697801536",
    appId: "1:794697801536:web:e54821715631a774e364a5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //autenticacion
  //registrarse
  const auth = getAuth(app);

  export const registrarUsuario = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user; 
  }).catch((error) => {
    const errorCode = error.code;
    const errorMesage = error.message;
  });
}

  //singin
export const LogearUsuario =(username, email, password)=> {
   signInWithEmailAndPassword(username, email, password)
  .then((userCredential) => {
    const user = userCredential.user;

    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

  //sing google
export const logInwithgoogle =() =>{
  const provider = new GoogleAuthProvider();
  signInWithPopup(provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;

    const credential = GoogleAuthProvider.credentialFromError(error);
    
  });
}

    //conexion con la base de datos
    const db = getFirestore(app)

  //guardado de datos
  export const GuardarSiembra = (nombre, fecha, area)=>{
    addDoc(collection(db ,"Siembra"), {nombre,fecha, area})
  }

  export const GuardarGestion = (nombreCultivo, Area, plaga, nivelfertilidad, desempeño) => {
    addDoc(collection(db, "Gestion"),{nombreCultivo, Area, plaga, nivelfertilidad, desempeño})
  }

  /*export const GuardarSemilla = (Nombre, SueloRecomendado, EpocaRecomendada, TiempoCosecha, Fertilizante, Insecticida)=>{
    addDoc(collection(db ,"Semilla"), {Nombre, SueloRecomendado, EpocaRecomendada,TiempoCosecha, Fertilizante, Insecticida})
  }

  export const GuardarSuelo = (TipoSuelo, color, PH)=>{
    addDoc(collection(db ,"Suelo"), {TipoSuelo, color, PH})
  }

  //obtener datos
  export const VerSiembras = ()=> getDocs(collection(db, 'Siembra'))

  export const  onGetSiembra = (callback) => onSnapshot(collection(db, 'Siembra', callback))*/
