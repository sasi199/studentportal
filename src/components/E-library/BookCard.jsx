import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const BookCard = ({ book }) => {
  return (
    <Card variant="outlined" className="mb-4">
      <CardContent>
        <Typography variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography color="textSecondary">{book.authorName}</Typography>
        <Typography variant="body2" component="div">
          Category: {book.category}
        </Typography>
        <Typography variant="body2" component="div">
          <a href={`http://localhost:3001/uploads/${book.fileUrl}`} target="_blank" rel="noopener noreferrer">
            Download File
          </a>
        </Typography>
        <img
          src={`http://localhost:3001/uploads/${book.imageUrl}`}
          alt={book.title}
          style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }}
        />
      </CardContent>
    </Card>
  );
};

export default BookCard;
