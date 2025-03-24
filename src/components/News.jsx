import React, { useState, useEffect } from "react";

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/news.json")
      .then((response) => response.json())
      .then((data) => setNewsItems(data.news))
      .catch((error) => console.error("Error loading news:", error));
  }, []);

  const visibleItems = showAll ? newsItems : newsItems.slice(0, 20);

  return (
    <section className="w-full sm:w-[70%] mx-auto p-6 bg-white shadow-md rounded-lg mt-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Latest News</h2>
      <ul className="space-y-4 text-gray-700">
        {visibleItems.length === 0 ? (
          <li>No news available.</li>
        ) : (
          visibleItems.map((news, index) => (
            <div key={index}>
              <li className="flex items-start space-x-3">
                <span className="text-sm text-gray-500">{`[${news.date}]`}</span>
                <span className="font-medium">{news.description}</span>
              </li>
              {index !== visibleItems.length - 1 && (
                <hr className="my-2 border-gray-300" />
              )}
            </div>
          ))
        )}
      </ul>
      {newsItems.length > 2 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 text-blue-500 hover:underline text-sm"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
};

export default News;
