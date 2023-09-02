import React from 'react';

const MyBatch = () => {
  const cardData = [
    { title: 'Exam' },
    { title: 'Result' },
    { title: 'Attendance' },
    { title: 'Subjects' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-20">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold">{card.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default MyBatch;
