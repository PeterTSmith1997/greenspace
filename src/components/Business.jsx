const Business = () => {
  return (
    <section className="w-full sm:w-[70%] mx-auto p-6 bg-white shadow-md rounded-lg mt-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Businesess</h2>
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-600 hover:underline">
          <a
            href="https://www.petersweb.me.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Peter's Web Hosting
          </a>
        </h3>
        <p className="text-gray-700 mt-2">
          At Peter's Web Hosting, I specialize in providing tailored solutions to help individuals and organizations establish a professional and secure online presence. Whether it's creating websites for small local businesses or assisting large institutions like the NHS, my focus is on delivering reliable, customized services.
        </p>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-blue-600 hover:underline">
          <a
            href="https://www.yourwebshield.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Your Web Shield
          </a>
        </h3>
        <p className="text-gray-700 mt-2">
          Your Web Shield is dedicated to enhancing digital security through innovative solutions like rate-limiting and IP risk-checking middleware. Our goal is to ensure safe online experiences by helping users protect their websites from various threats.
        </p>
      </div>
    </section>
  );
};

export default Business;
