import React from 'react'

type Props = {
  image?: string
  title: string
  description?: string
  view: number
}

const Card: React.FC<Props> = ({ image, title, description, view }) => {
  return (
    <div style={styles.card}>
      {image && (
        <img src={image} alt={title} style={styles.image} />
      )}
      <div  style={{ ...styles.content, textAlign: 'left' }}>
        <h3 style={styles.title}>{title}</h3>
        {description && <p style={styles.description}>{description}</p>}
        <span style={styles.view}>{view} lượt xem</span>
      </div>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    width: '250px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    margin: '10px',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%   ',
    objectFit: 'cover',
  },

  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 0 5px 0',
  },
  description: {
    fontSize: '14px',
    color: '#555',
    margin: '0 0 8px 0',
  },
  view: {
    fontSize: '12px',
    color: 'orange',
  }
}

export default Card
