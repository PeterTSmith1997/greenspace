import React, { useEffect, useState } from "react";

const ResearchInterests = () => {
  const [interests, setInterests] = useState({});

  useEffect(() => {
    fetch("/researchInterests.json")
      .then((response) => response.json())
      .then((data) => {
        setInterests(data.researchInterests);
      })
      .catch((error) => {
        console.error("Error loading research interests:", error);
      });
  }, []);

  return (
    <section className="w-full sm:w-[70%] mx-auto p-6 bg-white shadow-md rounded-lg mt-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Research Interests</h2>
      <div className="space-y-4">
        {Object.keys(interests).length === 0 ? (
          <p>No research interests available.</p>
        ) : (
          Object.keys(interests).map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-medium text-gray-700">{category}</h3>
              <ul className="list-disc pl-6 text-gray-600">
                {interests[category].map((interest, idx) => (
                  <li key={idx}>{interest}</li>
                ))}
              </ul>
              {index !== Object.keys(interests).length - 1 && (
                <hr className="my-4 border-gray-300" />
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ResearchInterests;
