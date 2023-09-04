import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faFileAlt, faUser, faList } from '@fortawesome/free-solid-svg-icons';

const MyBatch = () => {
  const cardData = [
    { title: 'Exam', icon: faBook, link: '/exam' },
    { title: 'Result', icon: faFileAlt, link: '/result' },
    { title: 'Attendance', icon: faUser, link: '/attendance' },
    { title: 'Subjects', icon: faList, link: '/subjects' },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-20 ">
    {cardData.map((card, index) => (
      <a key={index} href={card.link} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <FontAwesomeIcon icon={card.icon} className="text-4xl text-black mb-4" />
        <h2 className="text-xl font-semibold">{card.title}</h2>
      </a>
    ))}
  </div>
  );
}

export default MyBatch;
