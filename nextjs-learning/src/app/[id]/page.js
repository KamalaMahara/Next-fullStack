"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const RecipeDetail = () => {
  const images = [
    "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    "https://images.unsplash.com/photo-1551218808-94e220e084d2",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-full  mx-auto px-4 py-10">
          <div className="flex flex-wrap -mx-4">

            {/* 🍽 IMAGE SECTION */}
            <div className="w-full  md:w-1/2 px-4 mb-10">
              <div className="bg-white rounded-2xl shadow-sm p-4">

                <img
                  src={mainImage}
                  alt="Recipe"
                  className="w-full h-[500px] object-cover rounded-xl transition duration-300"
                />

                {/* Thumbnails */}
                <div className="flex gap-3 mt-4 justify-center ">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="thumb"
                      onClick={() => setMainImage(img)}
                      className={`w-20 h-16 object-cover rounded-lg cursor-pointer transition-all duration-300 ${
                        mainImage === img
                          ? "ring-2 ring-green-500 scale-105"
                          : "opacity-60 hover:opacity-100 hover:scale-105"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* 🧾 DETAILS SECTION */}
            <div className="max-w-full  md:w-1/2 px-4 ">
              <div className="bg-white rounded-2xl shadow-sm p-6">

                {/* Title */}
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  Spaghetti Carbonara
                </h1>

               
                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  A creamy Italian pasta made with eggs, cheese, pancetta,
                  and pepper. Quick, simple, and incredibly delicious.
                </p>

                {/* Ingredients */}
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-3 text-gray-800">
                    Ingredients
                  </h2>

                  <ul className="space-y-2">
                    {[
                      "200g spaghetti",
                      "2 eggs",
                      "100g pancetta",
                      "50g parmesan cheese",
                      "Salt & pepper",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instructions */}
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-3 text-gray-800">
                    Instructions
                  </h2>

                  <div className="space-y-3">
                    {[
                      "Boil pasta in salted water.",
                      "Cook pancetta until crispy.",
                      "Whisk eggs and cheese together.",
                      "Mix pasta with pancetta.",
                      "Remove from heat and add egg mixture.",
                    ].map((step, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="bg-green-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm">
                          {i + 1}
                        </span>
                        <p className="text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-evenly gap-4">
                  
                 <Link href={`/${1}/edit`} className="flex-1">
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-lg font-medium hover:bg-yellow-600 transition">
                    Edit
                  </button>
                  </Link>

                  <button className="flex-1 bg-red-500 text-white py-2 rounded-lg  font-medium hover:bg-red-600 transition">
                    Delete
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecipeDetail;