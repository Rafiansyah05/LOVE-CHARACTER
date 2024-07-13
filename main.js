var inputNamaLengkap = document.getElementById('nama');
var inputNamaPanggilan = document.getElementById('panggilan');
var inputTinggiBadan = document.getElementById('tinggi');
var inputHobby = document.getElementById('hobby');

var WnamaL = document.getElementById('warningNamaL');
var WnamaP = document.getElementById('warningNamaP');
var Wtinggi = document.getElementById('warningTinggi');
var Whobby = document.getElementById('warningHobby');
var Wgender = document.getElementById('warningGender');

var tinggiBadan = [
  '149cm',
  '150cm',
  '151cm',
  '152cm',
  '153cm',
  '154cm',
  '155cm',
  '156cm',
  '157cm',
  '158cm',
  '159cm',
  '160cm',
  '161cm',
  '162cm',
  '163cm',
  '164cm',
  '165cm',
  '166cm',
  '167cm',
  '168cm',
  '169cm',
  '170cm',
  '171cm',
  '172cm',
  '173cm',
  '174cm',
  '175cm',
  '176cm',
  '177cm',
  '178cm',
  '179cm',
];

var hobbi = ['memasak', 'melukis', 'menggambar', 'belajar', 'membaca', 'bernyanyi', 'berenang', 'mendaki', 'joging ', 'memancing', 'menonton film', 'Fotografi', 'Traveling', 'Gaming'];

var tipikal = ['pendiam', 'pemikir', 'cuek', 'penyayang', 'agresif', 'pemalu', 'introvet', 'ekstrovet', 'aktif'];

var tambahan = [
  'Namun, sayangnya kamu mendapatkan pasangan yang tingkat kesetiaan yang sangat rendah.',
  'Namun, kamu mendapatkan pasangan yang hanya memanfaatkanmu walaupun dia keliatan sayang.',
  'Dan kamu juga sangat beruntung karena mendaptkan pasangan yang setia sama kamu sampai akhir.',
  'Dan kamu juga sangat beruntung karna mendapatkan pasangan yang benar-benar mencintai kamu apa adanya.',
];

var ins = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'Z'];

function nextPage() {
  let namaL = inputNamaLengkap.value;
  let namaP = inputNamaPanggilan.value;
  let tinggi = inputTinggiBadan.value;
  let hobby = inputHobby.value;
  let valid = true;

  let form = document.forms['my-form'];
  let menu = form.opsi;
  let option = form.opsi.option;

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwx0dvh09qiong4tO1S83YwetOjrLVFiji2Ly_t3f49bHIR3p4AxEuPs1Blj_k0v3k3/exec';

  form.onsubmit = function (e) {
    e.preventDefault();

    let opsiValue = this.opsi.value;

    if (namaL === '') {
      valid = false;
      WnamaL.style.display = 'block';
      document.getElementById('nama').style.borderColor = 'red';
    }

    if (namaP === '') {
      valid = false;
      WnamaP.style.display = 'block';
      document.getElementById('panggilan').style.borderColor = 'red';
    }

    if (tinggi === '') {
      valid = false;
      Wtinggi.style.display = 'block';
      document.getElementById('tinggi').style.borderColor = 'red';
    }

    if (hobby === '') {
      valid = false;
      Whobby.style.display = 'block';
      document.getElementById('hobby').style.borderColor = 'red';
    }
    if (opsiValue === '') {
      valid = false;
      Wgender.style.display = 'block';
      document.getElementById('opsi').style.borderColor = 'red';
    }
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => console.log('Success!', response))
      .catch((error) => console.error('Error!', error.message));

    if (valid) {
      let loaded = setInterval(() => {
        btnLoading.classList.toggle('d-none');
      }, 1000);

      setTimeout(() => {
        clearInterval(loaded);
        awal.classList.toggle('d-none');
        dashbor.classList.toggle('d-none');
      }, 4000);

      var gambarCewek = new Image(100, 100);
      gambarCewek.style.borderRadius = '50%';
      gambarCewek.src = 'img/2.jpg';
      let POST_CE = document.getElementById('gambar');

      var gambarCowok = new Image(100, 100);
      gambarCowok.style.borderRadius = '50%';
      gambarCowok.src = 'img/1.jpg';
      let POST_CO = document.getElementById('gambar');

      if (opsiValue == 1) {
        POST_CO.appendChild(gambarCowok);
        document.getElementById('kelamin').innerHTML = 'Laki-Laki';
      } else {
        POST_CE.appendChild(gambarCewek);
        document.getElementById('kelamin').innerHTML = 'Perempuan';
      }

      let NL = (document.getElementById('pushNamaL').innerHTML = namaL);

      var tb = tinggiBadan[Math.floor(Math.random() * tinggiBadan.length)];
      var hb = hobbi[Math.floor(Math.random() * hobbi.length)];
      var tpkl = tipikal[Math.floor(Math.random() * tipikal.length)];
      var tmbh = tambahan[Math.floor(Math.random() * tambahan.length)];

      let ds = (document.getElementById('deskripsi').innerHTML =
        namaP +
        ', dengan tinggi badan kamu ' +
        tinggi +
        '(cm) kamu cocok mendapatkan seorang pasangan yang memiliki tinggi badan ' +
        tb +
        '. Kamu juga sangat layak untuk mendapatkan pasangan yang memiliki hobbi ' +
        hb +
        ' agar sesuai dengan hobbi kamu(' +
        hobby +
        '). Seorang ' +
        namaP +
        ' juga cocok dengan tipikal orang yang ' +
        tpkl +
        ' untuk membuat hubungan kalian berdua tetap langgeng/bertahan. ' +
        tmbh +
        ' Itu saja deskripsi tentang your love character. Terima kasih...');

      var is = ins[Math.floor(Math.random() * ins.length)];

      document.getElementById('inisial').innerHTML = '"' + is + '"';

      const alert = (document.getElementById('haloNama').innerHTML = 'Halloo ' + namaP);
    }
  };
}

const btnLoading = document.querySelector('.btn-loading');
const dashbor = document.getElementById('tampilanDashbor');
const awal = document.getElementById('tampilanAwal');
const myForm = document.getElementById('formKu');

function kembali() {
  dashbor.classList.toggle('d-none');
  awal.classList.toggle('d-none');
}
