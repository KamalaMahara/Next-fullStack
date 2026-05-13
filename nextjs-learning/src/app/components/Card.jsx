import Link from "next/link"

const Card = ({ recipes }) => {
  return (
    <Link href={`/${recipes?.id}`}>
      <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          className="w-full h-48 object-cover"
          src="https://www.chewoutloud.com/wp-content/uploads/2025/09/Chicken-Fajita-Pasta-in-Pan-Square.jpg"
          alt="Recipe Image"
        />

        <div className="p-5">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{recipes?.title}</h2>

          <p className="text-gray-600 text-sm mb-4">
            {recipes?.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">{recipes?.subtitle}</span>

          </div>

          <div className="flex justify-between items-center">
            <button className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors">
              View Recipe
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-blue-300 transition-colors">
              Save
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
