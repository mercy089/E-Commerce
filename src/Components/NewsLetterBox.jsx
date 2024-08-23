import React from "react";

const NewsLetterBox = () => {
  const onsubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe Now & Get 20% OFF
      </p>
      <p className="text-gray-400 mt-3">
        Join our community of curious minds. Subscribe now to receive exclusive
        insights, inspiration, and special offers.
      </p>
      <form
        onSubmit={onsubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-full"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none rounded-full"
          required
        />
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
