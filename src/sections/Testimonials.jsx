import { SiLeetcode, SiCodeforces } from "react-icons/si";

const Testimonials = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-6">
          I LIKE Algorithms
        </h2>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8">
          I love solving algorithmic problems and sharpening my problem-solving
          skills through competitive programming.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://leetcode.com/u/farhanaakter/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
          >
            <SiLeetcode className="text-xl" />
            LeetCode
          </a>

          <a
            href="https://codeforces.com/profile/F-arhana"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
          >
            <SiCodeforces className="text-xl" />
            Codeforces
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
