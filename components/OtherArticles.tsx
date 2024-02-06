import Image from "next/image";
import OtherArticleImg1 from "../public/icons/OtherArticleImg1.png";
import OtherArticleImg2 from "../public/icons/OtherArticleImg2.png";
import OtherArticleImg3 from "../public/icons/OtherArticleImg3.png";

export default function OtherArticles() {
  return (
    <div
      role="other-articles"
      className="px-[120px] pt-[104px] pb-[125px] bg-[#F9F9F9]"
    >
      <h1 className="text-[34px] font-semibold leading-[43px] mb-6">
        Other Articles You May Like
      </h1>
      <div role="other-article-list" className="flex gap-[25px]">
        <div
          role="article-card"
          className="flex flex-col gap-8 hover:bg-cyan-100 hover:rounded-lg cursor-pointer hover:scale-[1.1] hover:p-5"
        >
          <Image src={OtherArticleImg1} alt="Article image" />
          <div role="article-card-content" className="flex flex-col gap-2">
            <div
              role="article-card-heading"
              className="leading-5 font-semibold"
            >
              The US President wants half of all new vehicles to be zero
              emissions by 2030
            </div>
            <div
              role="article-card-heading"
              className="leading-5 text-sm text-[#000000DE]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ornare sit elit consectetur aliquam...
            </div>
          </div>
        </div>
        <div
          role="article-card"
          className="flex flex-col gap-8 hover:bg-cyan-100 hover:rounded-lg cursor-pointer hover:scale-[1.1] hover:p-5"
        >
          <Image src={OtherArticleImg2} alt="Article image" />
          <div role="article-card-content" className="flex flex-col gap-2">
            <div
              role="article-card-heading"
              className="leading-5 font-semibold"
            >
              The US President wants half of all new vehicles to be zero
              emissions by 2030
            </div>
            <div
              role="article-card-heading"
              className="leading-5 text-sm text-[#000000DE]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ornare sit elit consectetur aliquam...
            </div>
          </div>
        </div>
        <div
          role="article-card"
          className="flex flex-col gap-8 hover:bg-cyan-100 hover:rounded-lg cursor-pointer hover:scale-[1.1] hover:p-5"
        >
          <Image src={OtherArticleImg3} alt="Article image" />
          <div role="article-card-content" className="flex flex-col gap-2">
            <div
              role="article-card-heading"
              className="leading-5 font-semibold"
            >
              The US President wants half of all new vehicles to be zero
              emissions by 2030
            </div>
            <div
              role="article-card-heading"
              className="leading-5 text-sm text-[#000000DE]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ornare sit elit consectetur aliquam...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
