// Configurações do Firebase (substitua pelos dados do seu projeto)

const firebaseConfig = {
    apiKey: "AIzaSyB4rTzqH5KWv_LPYoaGrPIvVJrcFdcPpAo",
    authDomain: "maosquefalam-7bf20.firebaseapp.com",
    projectId: "maosquefalam-7bf20",
    storageBucket: "maosquefalam-7bf20.firebasestorage.app",
    messagingSenderId: "937163220890",
    appId: "1:937163220890:web:84f787c1dcbee48aa63c23"
  };
  
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Referências aos elementos HTML
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");
const logoutButton = document.getElementById("logoutButton");
const errorElement = document.getElementById("error");

const nameInput = document.getElementById("name");
const registerEmailInput = document.getElementById("registerEmail");
const registerPasswordInput = document.getElementById("registerPassword");
const registerSubmitButton = document.getElementById("registerSubmitButton");
const backToLoginButton = document.getElementById("backToLoginButton");
const registerErrorElement = document.getElementById("registerError");

// Função de login
loginButton.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("login").style.display = "none";
      document.getElementById("welcome").style.display = "block";
      errorElement.textContent = "";
    })
    .catch((error) => {
      errorElement.textContent = error.message;
    });
});

// Função de registro
registerButton.addEventListener("click", () => {
  document.getElementById("login").style.display = "none";
  document.getElementById("register").style.display = "block";
});

// Função para registrar o usuário
registerSubmitButton.addEventListener("click", () => {
  const name = nameInput.value;
  const email = registerEmailInput.value;
  const password = registerPasswordInput.value;

  if (password.length < 6) {
    registerErrorElement.textContent = "A senha deve ter pelo menos 6 caracteres.";
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Usuário registrado com sucesso!");
      document.getElementById("register").style.display = "none";
      document.getElementById("login").style.display = "block";
      registerErrorElement.textContent = "";
    })
    .catch((error) => {
      registerErrorElement.textContent = error.message;
    });
});

// Voltar para a tela de login
backToLoginButton.addEventListener("click", () => {
  document.getElementById("register").style.display = "none";
  document.getElementById("login").style.display = "block";
});

// Função de logout
logoutButton.addEventListener("click", () => {
  auth.signOut().then(() => {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("login").style.display = "block";
  });
});