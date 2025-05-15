
export default function Filter ({authors, selectedAuthor, onChange, onToggleFavorites, isShowingFavorites, favorites }) {
    return (
    
    <div className="flex flex-col items-center max-w-7xl mx-auto gap-7">
      <div>
        <label htmlFor="authorFilter" 
          className="flex justify-center text-sm font-medium text-gray-700 mb-1">
          Filtrar por autor:
        </label>
        <select
          value={selectedAuthor}
          onChange={(e) => onChange(e.target.value)}
          className="border rounded px-4 py-2"
        >
          <option value="">Todos os autores</option>
          {authors.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
            ))}
        </select>
      </div>
            
      <button
          onClick={onToggleFavorites}
          className={` px-4 py-2 rounded w-48 ${
            isShowingFavorites 
            ? "bg-yellow-500 text-white" 
            : "bg-yellow-400 text-white"
          }`}
        >
        {isShowingFavorites ? "Mostrar todos" : "Exibir favoritos "}
      </button>
      {isShowingFavorites && favorites.length === 0 && (
        <p className="text-gray-500 mt-2">Não há favoritos adicionados.</p>
      )}

    </div>

    )
}