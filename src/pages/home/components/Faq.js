import React, { useState } from 'react';
import './styles/Faq.css';
import Entry from './FaqEntry';

const Faq = () => {
  const [entriesVisibility, setEntriesVisibility] = useState([
    false, // Visibility for entry 1
    false, // Visibility for entry 2
    false, // Visibility for entry 3
    false, // Visibility for entry 4
    false  // Visibility for entry 5
  ]);

  const handleVisibilityChange = (index) => {
    setEntriesVisibility((prevVisibility) => {
      const updatedVisibility = [...prevVisibility];
      updatedVisibility[index] = !updatedVisibility[index];
      return updatedVisibility;
    });
  };

  const entries = [
    {
      question: "Apa saja syarat yang dibutuhkan?",
      answer: 'kosong'
    },
    {
      question: "Berapa hari minimal sewa mobil lepas kunci?",
      answer: 'kosong'
    },
    {
      question: "Berapa hari sebelumnya sebaiknya booking sewa mobil?",
      answer: 'kosong'
    },
    {
      question: "Apakah ada biaya antar-jemput?",
      answer: 'kosong'
    },
    {
      question: "Bagaimana jika terjadi kecelakaan?",
      answer: 'kosong'
    }
  ];

  return (
    <div className='cust-container' id='faq'>
      <div className='faq-head' style={{ width: 'clamp(20.5rem, 50%, 23rem)' }}>
        <h3>Frequently Asked Question</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
      </div>
      <div className='q-list'>
        <ul>
          {entries.map((entry, index) => (
            <Entry
              key={index}
              question={entry.question}
              isVisible={entriesVisibility[index]}
              answer={entry.answer}
              onVisibilityChange={() => handleVisibilityChange(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faq;