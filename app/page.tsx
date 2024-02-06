import Titlebar from "@/components/Titlebar";
import Article from "@/components/Article";
import Footer from "@/components/Footer";
import OtherArticles from "@/components/OtherArticles";
import RelatedArticles from "@/components/RelatedArticles";

export default function Home() {
  return (
    <main>
      <Titlebar />
      <div role="body">
        <div role="main-section" className="px-[120px] py-10">
          <span
            role="article-metadata"
            className="flex items-center gap-2 text-xs mb-4"
          >
            <span className="text-[#0036C3] leading-5">NEWS</span>
            <div className="h-[3px] w-[3px] bg-[#0036C3] rounded-full"></div>
            <span className="text-[#0000008A] leading-5">
              September 21, 2021
            </span>
          </span>
          <h1 className="text-5xl font-semibold leading-[60px] mb-12">
            Biden sets electric vehicle target
            <br />
            in drive to cut emissions
          </h1>
          <div
            role="article-section"
            className="grid grid-cols-3 grid-flow-row gap-16"
          >
            <Article />
            <RelatedArticles />
          </div>
        </div>
        <OtherArticles />
      </div>
      <Footer />
    </main>
  );
}
