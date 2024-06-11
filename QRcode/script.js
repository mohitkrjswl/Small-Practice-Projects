let qrText = document.getElementById('qr-input');
let sizes = document.getElementById('size');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;
generateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  isEmptyInput();
});
sizes.addEventListener('change', (e) => {
  size = e.target.value;
  e.preventDefault();
  isEmptyInput();
});

downloadBtn.addEventListener('click', () => {
  let img = document.querySelector('.qr-body img');

  if (img !== null) {
    let imgAtrr = img.getAttribute('src');
    downloadBtn.setAttribute("href", imgAtrr);
  }
  else {
    downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
  }
});

function isEmptyInput() {
  qrText.value.length > 0 ? generateQRCode() : alert('Please enter a valid text or URL');

}

function generateQRCode() {
  qrContainer.innerHTML = '';
  new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: '#fff',
    colorDark: '#000',
  });
}