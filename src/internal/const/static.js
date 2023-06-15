import pesron1 from "../../assets/person/person1.png";
import pesron2 from "../../assets/person/person2.png";
import pesron3 from "../../assets/person/person3.png";
import pesron4 from "../../assets/person/person4.png";
import pesron5 from "../../assets/person/person5.png";
import pesron6 from "../../assets/person/person6.png";
import icon_complete from "../../assets/icons/icon_complete.svg"
import icon_price from "../../assets/icons/icon_price.svg"
import icon_24hrs from "../../assets/icons/icon_24hrs.svg"
import icon_professional from "../../assets/icons/icon_professional.svg"
import icon_check from "../../assets/icons/icon_check.svg";
const benefitStatic = [
  {
      title: 'Mobil Lengkap', 
      id: '1',
      img : icon_complete, 
      desc: 'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat'
  },{
      title: 'Harga Murah',
      id: '2', 
      img : icon_price, 
      desc: 'Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain'
  },{
      title: 'Layanan 24 Jam', 
      id: '3',
      img : icon_24hrs, 
      desc: 'Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu'
  },{
      title: 'Supir Profesional', 
      id: '4',
      img : icon_professional, 
      desc: 'Supir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu'
  }
]

const bestCarStatic = [
  {
    id: 1,
    image: icon_check,
    alt: "icon_check",
    content: "Sewa Mobil Dengan Supir di Bali 12 Jam",
  },
  {
    id: 2,
    image: icon_check,
    alt: "icon_check",
    content: "Sewa Mobil Lepas Kunci di Bali 24 Jam",
  },
  {
    id: 3,
    image: icon_check,
    alt: "icon_check",
    content: "Sewa Mobil Jangka Panjang Bulanan",
  },
  {
    id: 4,
    image: icon_check,
    alt: "icon_check",
    content: "Gratis Antar - Jemput Mobil di Bandara",
  },
  {
    id: 5,
    image: icon_check,
    alt: "icon_check",
    content: "Layanan Airport Transfer / Drop In Out",
  },
];

const faqStatic = [
  {
    id: 1,
    question: "Apa saja syarat yang dibutuhkan?",
    answer:
      "Untuk menyewa mobil lepas kunci, biasanya dibutuhkan beberapa persyaratan seperti memiliki SIM yang masih berlaku, kartu identitas seperti KTP atau paspor, serta deposit yang harus disetor sebelum penyewaan. Selain itu, beberapa penyedia jasa sewa mobil juga dapat menetapkan persyaratan tambahan seperti batasan usia, masa berlaku SIM minimal, atau lainnya.",
  },
  {
    id: 2,
    question: "Berapa hari minimal sewa mobil lepas kunci?",
    answer:
      "Hal ini dapat bervariasi tergantung dari kebijakan penyedia jasa sewa mobil. Namun, umumnya ada batasan minimal waktu sewa, seperti 1 atau 2 hari. Beberapa penyedia jasa mungkin juga menawarkan sewa mobil dalam periode mingguan atau bulanan.",
  },
  {
    id: 3,
    question: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
    answer:
      "Sebaiknya booking sewa mobil dilakukan sejak jauh-jauh hari sebelum jadwal keberangkatan, terutama jika waktu keberangkatan jatuh pada masa libur atau musim tinggi. Hal ini untuk menghindari kehabisan stok mobil atau kenaikan harga sewa yang tiba-tiba",
  },
  {
    id: 4,
    question: "Apakah Ada biaya antar-jemput?",
    answer:
      "Beberapa penyedia jasa sewa mobil dapat menawarkan layanan antar-jemput di lokasi tertentu, seperti bandara atau stasiun kereta api. Namun, biasanya ada biaya tambahan yang harus dibayar untuk layanan tersebut. Untuk mengetahui detail biaya dan syarat layanan antar-jemput, sebaiknya langsung menghubungi penyedia jasa sewa mobil yang bersangkutan.",
  },
  {
    id: 5,
    question: "Bagaimana jika terjadi kecelakaan",
    answer:
      "Jika terjadi kecelakaan saat menyewa mobil lepas kunci, sebaiknya segera menghubungi penyedia jasa sewa mobil dan mengikuti prosedur yang telah ditetapkan. Biasanya, penyedia jasa sewa mobil akan memberikan informasi mengenai nomor telepon darurat dan prosedur yang harus diikuti saat terjadi kecelakaan. Selain itu, pastikan untuk memiliki asuransi mobil yang mencakup kecelakaan dan mengikuti aturan lalu lintas saat mengemudi.",
  },
];

const testimonialStatic = [

    {
      id: 1,
      name: "Cindy Star",
      age: 25,
      city: "Jakarta",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic distinctio ratione cumque placeat, mollitia culpa? Corporis repellendus saepe ipsam maiores odit inventore quo deleniti amet!",
      image: pesron1,
      star: 2,
    },
    {
      id: 2,
      name: "Jhone Doe",
      age: 30,
      city: "Surabaya",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic distinctio ratione cumque placeat, mollitia culpa? Corporis repellendus saepe ipsam maiores odit inventore quo deleniti amet!",
      image: pesron2,
      star: 2,
    },
    {
      id: 3,
      name: "Adam Renald",
      age: 36,
      city: "Garut",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic distinctio ratione cumque placeat, mollitia culpa? Corporis repellendus saepe ipsam maiores odit inventore quo deleniti amet!",
      image: pesron3,
      star: 5,
    },
    {
      id: 4,
      name: "Cindy Star",
      age: 25,
      city: "Jakarta",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic distinctio ratione cumque placeat, mollitia culpa? Corporis repellendus saepe ipsam maiores odit inventore quo deleniti amet!",
      image: pesron4,
      star: 3,
    },
    {
      id: 5,
      name: "Kyla Sugih",
      age: 21,
      city: "Aceh",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic distinctio ratione cumque placeat, mollitia culpa? Corporis repellendus saepe ipsam maiores odit inventore quo deleniti amet!",
      image: pesron5,
      star: 5,
    },
    {
      id: 11,
      name: "Lia kuy",
      age: 19,
      city: "Malang",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic distinctio ratione cumque placeat, mollitia culpa? Corporis repellendus saepe ipsam maiores odit inventore quo deleniti amet!",
      image: pesron6,
      star: 4,
    },
  ];

  
  


  export { testimonialStatic, benefitStatic, faqStatic, bestCarStatic } ;