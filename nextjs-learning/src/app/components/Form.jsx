"use client"

import React, { useState } from "react";





const Form = ({ text }) => {
  const [data, setData] = useState({
    title: "",
    "subtitle": "",
    "description": ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    })
  }
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
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="subtitle"
            className="block text-sm font-bold text-gray-700 mb-2"
          >
            Recipe Subtitle
          </label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            placeholder=" e.g. Spaghetti Carbonara"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-600" onChange={handleChange}
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
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-600" onChange={handleChange}
          ></textarea>
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