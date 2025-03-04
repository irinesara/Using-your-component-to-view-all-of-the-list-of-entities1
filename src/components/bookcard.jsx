export default function BookCard({ image, name, genre, author }) {
    return (
      <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#f0f8ff', width: '250px' }}>
        <img src={image} alt={name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '16px', color: 'black'}}>{name}</h2>
        <h3 style={{ fontSize: '18px', color: '#555' }}>Genre: {genre}</h3>
        <p style={{ fontSize: '16px', marginTop: '8px', color: 'black' }}>Author: {author}</p>
      </div>
    );
  }