"use client";

import PostCard from "@/components/posts/PostCard";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import { posts } from "@/config/constData";
import { TPostFormData } from "@/types/post.types";
import { getPosts } from "@/actions/postApi";

const FeatureSection: React.FC = () => {
  const [posts, setPosts] = useState<TPostFormData[]>([]);
  useEffect(() => {
    (async function () {
      try {
        const res = await getPosts();

        if (res?.success) {
          setPosts(res?.payload?.posts);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  console.log(posts);

  return (
    <section className="py-10 home_category_section">
      <div className="container ">
        <div className="mb-4 lg:w-1/2 mx-auto ">
          <h2 className="text-3xl font-semibold text-center">Features</h2>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
            dolores?
          </p>
        </div>
        <div className="   mt-10">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              580: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
          >
            {posts?.map((post, index) => (
              <SwiperSlide key={index}>
                <PostCard post={post} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
