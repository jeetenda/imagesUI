
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function SearchResults() {
  const location = useLocation();

  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    fetch("https://images-api-eosin.vercel.app/images")
      .then((res) => {
        if (!res.status) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((resp) => {
        setSuggestions(resp?.data);
      })
      .catch((err) => {
        console.error("API request failed:", err);
      });
  }, []);


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-7xl p-4 xl:p-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Search Results</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {suggestions.map((product) => (
            <div key={product._id} className="group relative">
              <div className="w-full h-[300px] overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                <img
                  src={product.imageUrl}
                  alt={product.imageUrl}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      <span className="text-xl font-semibold">{product.title} </span>
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
