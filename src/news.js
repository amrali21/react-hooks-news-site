import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function News(props) {

  const [name1, setName1] = useState("loading..");

  useEffect(async () => {

    let res = await axios.get(
      `https://newsapi.org/v2/everything?q=${props.newsName}&apiKey=61e82deeddf74310b4d4ffb601a22949`
    );

    let w = { width: "400px" };
    let arr = res.data.articles.map((p) => {
      return (
        <div class="p-8">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={p.urlToImage} />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{p.title}</div>
              <p class="text-gray-700 text-base">
                {p.description}
              </p>
              <button class="font-bold text-xl mb-2"> <a href={p.url}>Read more</a></button>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tech</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Bussiness</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Innovation</span>
            </div>
          </div>
        </div>
      );
    });
    setName1(arr);
  });

  return (
    <div class="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">{name1} </div>
  )
}
