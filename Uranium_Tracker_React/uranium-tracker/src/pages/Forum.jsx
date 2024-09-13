import Footer from "../components/Footer";
import ForumLeft from "../components/ForumLeft";
import ForumRightScientists from "../components/ForumRightScientists";
import ForumRightTags from "../components/ForumRightTags";
import Navbar from "../components/Navbar";

const Forum = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-black1 px-6 md:px-20 text-white mt-20 sec-1">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
          {/* Left Section */}
          <ForumLeft />

          {/* Right Section */}
          <div className="relative right-section">
            <div
              className="sticky top-[6.5rem] space-y-6"
              style={{ maxHeight: "calc(100vh - 6.5rem)", overflowY: "auto" }}
            >
              <div className="mb-[6.9rem]">
                {/* Right content: scientists and tags */}
                <ForumRightScientists />
                <ForumRightTags />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Forum;
