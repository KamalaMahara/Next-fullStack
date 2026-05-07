import React from 'react'

const Form = ({ text }) => {
  return (
    <>
      <form className="bg-white shadow-md rounded-lg p-6 space-y-6">
        {/* Recipe Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-bold text-gray-700 mb-2"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder=" e.g. Spaghetti Carbonara"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-600"
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-base font-bold text-gray-700 mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="3"
            placeholder="Write a short description..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-600"
          ></textarea>
        </div>

        {/* Ingredients */}
        <div>
          <label
            htmlFor="ingredients"
            className="block text-sm font-bold text-gray-700 mb-2"
          >
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            rows="4"
            placeholder="List ingredients separated by commas..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-600"
          ></textarea>
        </div>

        {/* Instructions */}
        <div>
          <label
            htmlFor="instructions"
            className="block text-sm font-bold text-gray-700 mb-2"
          >
            Instructions
          </label>
          <textarea
            id="instructions"
            name="instructions"
            rows="5"
            placeholder="Step-by-step cooking instructions..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-600"
          ></textarea>
        </div>

        {/* Image Upload */}
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-bold text-gray-700 mb-2"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-600"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full md:w-auto bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            {text}
          </button>
        </div>
      </form>
    </>
  )
}

export default Form