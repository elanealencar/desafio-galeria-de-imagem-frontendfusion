import { useEffect, useState } from "react";
import Card from "./Card";
import Filter from "./Filter";
import Modal from "./Modal";
import { useFavorites } from "../context/FavoritesContext";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);

  const { favorites } = useFavorites();


  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar imagens:", err);
        setLoading(false);
      });
  }, []);

  const uniqueAuthors = [...new Set(images.map((img) => img.author))];

  let filteredImages = showFavorites ? favorites : images;
  if (selectedAuthor) {
      filteredImages = filteredImages.filter((img) => img.author === selectedAuthor);
    }


  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">Carregando imagens...</p>
      </div>
    );
  }

  return (
    <>
      <Filter
        authors={uniqueAuthors}
        selectedAuthor={selectedAuthor}
        onChange={setSelectedAuthor}
        onToggleFavorites={() => setShowFavorites((prev) => !prev)}
        isShowingFavorites={showFavorites}
        favorites={favorites}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 p-6 max-w-7xl mx-auto gap-5">
        {filteredImages.map((image) => (
          <Card 
            key={image.id}
            image={image} 
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      <Modal 
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
  </>
  );
}
