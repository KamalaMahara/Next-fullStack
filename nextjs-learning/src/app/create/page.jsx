import React from 'react'

const page = () => {
  return (
    <>
      <div class="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <div class="mb-10 text-center">
            <h1 class="text-4xl font-extrabold text-slate-900 tracking-tight">Create New Recipe</h1>
            <p class="mt-2 text-slate-600">Share your culinary masterpiece with the world.</p>
          </div>

          <form class="space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">

            <div class="relative group">
              <label class="block text-sm font-semibold text-slate-700 mb-2">Recipe Cover Image</label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-xl hover:border-orange-400 transition-colors cursor-pointer bg-slate-50">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-slate-600">
                    <span class="relative cursor-pointer font-medium text-orange-600 hover:text-orange-500">Upload a file</span>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-slate-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-6">
                <label class="block text-sm font-semibold text-slate-700">Recipe Title</label>
                <input type="text" placeholder="e.g. Grandma's Secret Spicy Pasta" class="mt-1 block w-full border-slate-200 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm p-3 bg-slate-50" />
              </div>

              <div class="sm:col-span-6">
                <label class="block text-sm font-semibold text-slate-700">Description</label>
                <textarea rows="3" placeholder="Briefly describe the taste, origin, or why you love this dish..." class="mt-1 block w-full border-slate-200 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm p-3 bg-slate-50"></textarea>
              </div>

              <div class="sm:col-span-2">
                <label class="block text-sm font-semibold text-slate-700">Prep Time (min)</label>
                <input type="number" class="mt-1 block w-full border-slate-200 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm p-3 bg-slate-50" />
              </div>

              <div class="sm:col-span-2">
                <label class="block text-sm font-semibold text-slate-700">Servings</label>
                <input type="number" class="mt-1 block w-full border-slate-200 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm p-3 bg-slate-50" />
              </div>

              <div class="sm:col-span-2">
                <label class="block text-sm font-semibold text-slate-700">Difficulty Level</label>
                <select class="mt-1 block w-full border-slate-200 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm p-3 bg-slate-50">
                  <option>Easy</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>

            <div class="pt-6">
              <h3 class="text-lg font-bold text-slate-900 border-b pb-2 mb-4">Ingredients</h3>
              <div class="space-y-3">
                <div class="flex gap-2">
                  <input type="text" placeholder="2 cups" class="w-1/4 border-slate-200 rounded-lg p-3 bg-slate-50 text-sm" />
                  <input type="text" placeholder="Flour" class="w-full border-slate-200 rounded-lg p-3 bg-slate-50 text-sm" />
                  <button type="button" class="text-slate-400 hover:text-red-500">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="white m19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
                <button type="button" class="text-sm font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1">
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                  Add Ingredient
                </button>
              </div>
            </div>

            <div class="pt-6">
              <h3 class="text-lg font-bold text-slate-900 border-b pb-2 mb-4">Instructions</h3>
              <div class="space-y-4">
                <div class="flex gap-4">
                  <span class="flex-shrink-0 h-8 w-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">1</span>
                  <textarea placeholder="Step description..." class="w-full border-slate-200 rounded-lg p-3 bg-slate-50 text-sm"></textarea>
                </div>
                <button type="button" class="text-sm font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1">
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                  Add Step
                </button>
              </div>
            </div>

            <div class="pt-8 border-t border-slate-100 flex items-center justify-end gap-x-4">
              <button type="button" class="text-sm font-semibold text-slate-600 hover:text-slate-900">Discard</button>
              <button type="submit" class="bg-orange-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-700 hover:-translate-y-0.5 transition-all focus:ring-4 focus:ring-orange-200">
                Publish Recipe
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default page