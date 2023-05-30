import pesron1 from "../../assets/person/person1.png";
import pesron2 from "../../assets/person/person2.png";
import pesron3 from "../../assets/person/person3.png";
import pesron4 from "../../assets/person/person4.png";
import pesron5 from "../../assets/person/person5.png";
import pesron6 from "../../assets/person/person6.png";
import icon_complete from "../../assets/icons/icon_complete.svg";
import icon_price from "../../assets/icons/icon_price.svg";
import icon_24hrs from "../../assets/icons/icon_24hrs.svg";
import icon_professional from "../../assets/icons/icon_professional.svg";

const benefitStatic = [
  {
    title: "Mobil Lengkap",
    id: "1",
    img: icon_complete,
    desc: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
  },
  {
    title: "Harga Murah",
    id: "2",
    img: icon_price,
    desc: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
  },
  {
    title: "Layanan 24 Jam",
    id: "3",
    img: icon_24hrs,
    desc: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
  },
  {
    title: "Supir Profesional",
    id: "4",
    img: icon_professional,
    desc: "Supir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
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

const faqEntries = [
  {
    question: "Apa saja syarat yang dibutuhkan?",
    answer: "kosong",
  },
  {
    question: "Berapa hari minimal sewa mobil lepas kunci?",
    answer: "kosong",
  },
  {
    question: "Berapa hari sebelumnya sebaiknya booking sewa mobil?",
    answer: "kosong",
  },
  {
    question: "Apakah ada biaya antar-jemput?",
    answer: "kosong",
  },
  {
    question: "Bagaimana jika terjadi kecelakaan?",
    answer: "kosong",
  },
];

export { testimonialStatic, benefitStatic, faqEntries };
