


// eslint-disable-next-line react/prop-types
const Card = ({ auto }) => {
// eslint-disable-next-line react/prop-types
const { nombre, modelo } = auto;
return (
    <div style={styles.card}>
    <h2>Información del Auto</h2>
    <p><strong>Nombre:</strong> {nombre}</p>
    <p><strong>Modelo:</strong> {modelo}</p>
    </div>
);
};

const styles = {
card: {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '8px',
    width: '300px',
    margin: '16px auto',
    textAlign: 'left'
}
};

export default Card;










