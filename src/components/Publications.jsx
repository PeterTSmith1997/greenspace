import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch("/publications.json")
      .then((response) => response.json())
      .then((data) => {
        setPublications(data.publications);
      })
      .catch((error) => {
        console.error("Error loading publications:", error);
      });
  }, []);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = publications.slice(offset, offset + itemsPerPage);

  return (
    <section className="w-full sm:w-[70%] mx-auto p-6 bg-white shadow-md rounded-lg mt-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Publications</h2>
      {publications.length === 0 ? (
        <p className="text-gray-600">No publications found.</p>
      ) : (
        <>
          <ul className="list-disc pl-6 text-gray-700 space-y-4">
            {currentItems.map((pub) => (
              <li key={pub.citationKey} className="pb-4 border-b border-gray-300">
                <a
                  href={pub.entryTags.url}
                  className="text-blue-500 hover:underline font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pub.entryTags.title}
                </a>
                <p className="text-gray-600">{pub.entryTags.booktitle}</p>
                <p className="italic text-gray-600">Authors: {pub.entryTags.author}</p>
                <p className="text-gray-600">Year: {pub.entryTags.year}</p>
                <p className="text-gray-600">Publisher: {pub.entryTags.publisher}</p>
                {pub.entryTags.doi && (
                  <p className="text-gray-600">
                    DOI:{" "}
                    <a
                      href={`https://doi.org/${pub.entryTags.doi}`}
                      className="text-blue-500 hover:underline"
                    >
                      {pub.entryTags.doi}
                    </a>
                  </p>
                )}
              </li>
              
            ))}
          </ul>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={Math.ceil(publications.length / itemsPerPage)}
            onPageChange={handlePageClick}
            containerClassName={"pagination flex justify-center space-x-4 mt-6"}
            previousLinkClassName={"text-blue-500 hover:underline"}
            nextLinkClassName={"text-blue-500 hover:underline"}
            disabledClassName={"text-gray-400 cursor-not-allowed"}
            activeClassName={"font-bold text-blue-500"}
          />
        </>
      )}
    </section>
  );
};

export default Publications;
