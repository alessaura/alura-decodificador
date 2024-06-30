const TEXT_INPUT = document.getElementById('text-input');
const RESULT_TEXT = document.getElementById('result-text');
const COPY_BUTTON = document.getElementById('copy-button');
const ENCRYPT_BUTTON = document.getElementById('encrypt-button');
const DECRYPT_BUTTON = document.getElementById('decrypt-button');
const ILLUSTRATION_SECTION = document.getElementById('illustration-section');
const INSTRUCTION_TEXT = document.getElementById('instruction-text');

const INITIAL_TEXT = 'Digite seu texto';

// Limpar texto inicial ao clicar para editar
function clearText() {
  if (TEXT_INPUT.textContent === INITIAL_TEXT) {
    TEXT_INPUT.textContent = '';
  }
}

// Criptografar texto
function handleEncrypt() {
  const text = TEXT_INPUT.textContent.trim();
  
  if (text === INITIAL_TEXT || text === '') {
    alert('Por favor, digite um texto para criptografar.');
    return;
  }

  if (!validateText(text)) {
    alert('Por favor, digite apenas letras minúsculas sem acento e sem números.');
    return;
  }

  const encryptedText = encrypt(text);
  RESULT_TEXT.innerHTML = `<strong>${encryptedText}</strong>`;
  COPY_BUTTON.style.display = 'inline-block';
  ILLUSTRATION_SECTION.style.display = 'none'; // Oculta a ilustração

  // Esconder o texto de orientação
  INSTRUCTION_TEXT.style.display = 'none';
}

// Descriptografar texto
function handleDecrypt() {
  const text = TEXT_INPUT.textContent.trim();
  
  if (text === INITIAL_TEXT || text === '') {
    alert('Por favor, digite um texto para descriptografar.');
    return;
  }

  if (!validateText(text)) {
    alert('Por favor, digite apenas letras minúsculas sem acento e sem números.');
    return;
  }

  const decryptedText = decrypt(text);
  RESULT_TEXT.innerHTML = `<strong>${decryptedText}</strong>`;
  COPY_BUTTON.style.display = 'inline-block';
  ILLUSTRATION_SECTION.style.display = 'none'; // Oculta a ilustração

  // Esconder o texto de orientação
  INSTRUCTION_TEXT.style.display = 'none';
}

// Validar texto inserido (apenas letras minúsculas sem acento e sem números)
function validateText(text) {
  const regex = /^[a-zA-Z ]+$/; // Aceita letras maiúsculas, minúsculas e espaços
  return regex.test(text);
}

// Copiar texto criptografado ou descriptografado
function copyText() {
  const textToCopy = RESULT_TEXT.textContent.trim();
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert('Texto copiado! Agora você pode colar onde quiser.');
      COPY_BUTTON.textContent = 'Copiado'; // Altera o texto do botão para "Copiado"
    })
    .catch(err => {
      console.error('Erro ao copiar texto:', err);
      alert('Erro ao copiar texto. Por favor, tente novamente.');
    });
}

// Função de criptografia (substituída pela lógica de criptografia definida)
function encrypt(text) {
  return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

// Função de descriptografia (inversa da criptografia)
function decrypt(text) {
  return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

// Event Listeners para botões
ENCRYPT_BUTTON.addEventListener('click', handleEncrypt);
DECRYPT_BUTTON.addEventListener('click', handleDecrypt);
