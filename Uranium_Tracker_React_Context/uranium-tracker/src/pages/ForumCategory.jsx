import React from "react";
import Navbar from "../components/Navbar";
import CateogryCreatePost from "../components/CateogryCreatePost";
import CategoryPost from "../components/CategoryPost";
import CategoryMemberTagSection from "../components/CategoryMemberTagSection";
import Footer from "../components/Footer";

const ForumCategory = () => {
  return (
    <div>
      <Navbar />
      <div class="bg-black1 min-h-screen mt-[84px] sec-1">
        <div class="flex flex-col md:flex-row px-6 md:px-20 mt-6 space-y-6 md:space-y-0 md:space-x-6">
          {/**Left side */}
          <div class="flex-1 space-y-6 md:mb-24 mt-5">
            {/*original post section */}
            <CateogryCreatePost />
            <CategoryPost />
          </div>
          {/*right side part */}
          <div class=" md:w-1/4 w-full  space-y-6 md:sticky top-[84px] max-h-screen overflow-y-auto right-sidebar pb-12">
            <CategoryMemberTagSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForumCategory;
