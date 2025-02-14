import React from "react";
import Image from "next/image";

const categories = [
  { image: "/i3.svg", title: "Design & Development", description: "50+ Courses Available" },
  { image: "/i1.svg", title: "Marketing", description: "50+ Courses Available" },
  { image: "/i.svg", title: "Development", description: "50+ Courses Available" },
  { image: "/i4.svg", title: "Communication", description: "50+ Courses Available" },
  { image: "/i5.svg", title: "Digital Marketing", description: "50+ Courses Available" },
  { image: "/i6.svg", title: "Self Development", description: "50+ Courses Available" },
  { image: "/i7.svg", title: "Business", description: "50+ Courses Available" },
  { image: "/i8.svg", title: "Finance", description: "50+ Courses Available" },
  { image: "/i9.svg", title: "Consulting", description: "50+ Courses Available" },
];

const ExploreCourses = () => {
  return (
    <section className="max-w-8xl mx-auto px-4 py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-[42px] font-bold text-[#000000]">Explore Courses By Category</h2>
        <p className="text-[18px] text-gray-600 mt-4">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center gap-[32px] p-6 bg-white rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            <div className="category-image">
              <Image
                src={category.image} 
                alt={category.title}
                width={32}
                height={32}
                className="mb-4"
              />
            </div>

            <div className="category-text">
              <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              <p className="text-gray-600 mt-2">{category.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-6 py-3 text-black border-2 border-black bg-white rounded-md transition-colors hover:bg-gray-200">
          View All Courses
        </button>
      </div>
    </section>
  );
};

export default ExploreCourses;