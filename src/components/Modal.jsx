import { useFavorites } from "../context/FavoritesContext";
import { Star } from "lucide-react"; // ícones modernos, use outro se preferir

export default function Modal({ image, onClose }) {
  const { toggleFavorite, isFavorite } = useFavorites();

  if (!image) return null;

  const favorited = isFavorite(image.id);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 transition-opacity duration-300 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-md w-full relative transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600 font-bold text-xl"
          aria-label="Fechar modal"
        >
          X
        </button>

        <button
          onClick={() => toggleFavorite(image)}
          className="absolute bottom-24 right-10 text-yellow-500 hover:text-yellow-600"
          aria-label="Favoritar"
        >
          {favorited ? <Star fill="currentColor" /> : <Star />}
        </button>

        <img
          src={`https://picsum.photos/id/${image.id}/400/300`}
          alt={`Imagem de ${image.author}`}
          className="w-full rounded mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">Detalhes da imagem</h2>
        <p><strong>Autor:</strong> {image.author}</p>
        <p><strong>Dimensões:</strong> {image.width} x {image.height}</p>
        <p>
          <strong>Link original:</strong>{" "}
          <a
            href={image.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Acessar foto no Unsplash
          </a>
        </p>
      </div>
    </div>
  );
}
