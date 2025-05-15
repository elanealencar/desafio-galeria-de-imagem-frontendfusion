export default function Card({ image , onClick }) {
  return (
    <div 
        onClick={onClick}
        className="bg-white rounded-lg overflow-hidden shadow-md"
        role="button"
        tabIndex={0}
        aria-label={`Ver detalhes da imagem do autor ${image.author}`}
    >
      <div className="overflow-hidden cursor-pointer">
        <img
          src={`https://picsum.photos/id/${image.id}/400/300`}
          alt={`Imagem de ${image.author}`}
          className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
