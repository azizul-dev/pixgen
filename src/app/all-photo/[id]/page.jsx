import Image from "next/image";
import React from "react";

const PhotosDetail = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://pixgen-ten.vercel.app/data.json", 
    
  );
  const photos = await res.json();
  const photo = photos.find((p) => p.id == parseInt(id));

  if (!photo) {
    return <div className="text-center mt-10 text-red-500">Photo not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        
        {/* Image Section */}
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Details Section */}
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">{photo.title}</h1>

          <p className="text-gray-600">{photo.prompt}</p>

          <div className="flex flex-wrap gap-2">
            {photo.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-sm px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Info Box */}
          <div className="bg-gray-100 p-5 rounded-xl space-y-2">
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {photo.category}
            </p>
            <p>
              <span className="font-semibold">Model:</span> {photo.model}
            </p>
            <p>
              <span className="font-semibold">Resolution:</span>{" "}
              {photo.resolution}
            </p>
            <p>
              <span className="font-semibold">Created:</span>{" "}
              {new Date(photo.createdAt).toLocaleDateString()}
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-6 text-lg">
            <p>❤️ {photo.likes}</p>
            <p>⬇️ {photo.downloads}</p>
          </div>

          {/* Button */}
          <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
            Download Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotosDetail;