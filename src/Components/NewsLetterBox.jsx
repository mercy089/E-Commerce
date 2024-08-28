import React from "react";

const NewsLetterBox = () => {
  // Event handler for the form submission
  const onsubmitHandler = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
  };

  return (
    <div className="text-center">
      {/* Main Heading */}
      <p className="text-2xl font-medium text-gray-800">
        Subscribe Now & Get 20% OFF
      </p>

      {/* Subheading/Description */}
      <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-400">
        Join our community of curious minds. Subscribe now to receive exclusive
        insights, inspiration, and special offers.
      </p>

      {/* Subscription Form */}
      <form
        onSubmit={onsubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-full"
      >
        {/* Email Input Field */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none rounded-full text-sm sm:text-base"
          required // Ensures that the email input is not left empty
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 rounded-full"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
