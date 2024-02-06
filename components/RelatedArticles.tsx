import { FaArrowRight } from "react-icons/fa";

export default function RelatedArticles() {
  return (
    <div role="related-articles" className="col-span-1">
      <h6 className="text-xl font-semibold leading-[25px] mb-[23px]">
        Related Articles
      </h6>
      <div role="related-articles-body" className="flex flex-col gap-8">
        <div
          role="related-articles-item"
          className="flex gap-6 cursor-pointer hover:bg-cyan-50 hover:drop-shadow-md hover:scale-110 hover:p-3"
        >
          <div className="h-[78px] w-[78px] min-w-[78px] bg-[#F4F4F4]"></div>
          <div className="flex flex-col gap-2">
            <div className="text-[#0036C3] font-semibold rounded-[2px] p-1.5 bg-[#DDFFF7] text-xs leading-4 tracking-[1px] w-fit">
              FEATURED
            </div>
            <div className="font-semibold leading-5">
              The US President wants half of all new vehicles...
            </div>
          </div>
        </div>
        <hr className="border-t-0 border-[#BDBDBD] border-[0.5px]" />
        <div
          role="related-articles-item"
          className="flex gap-6 cursor-pointer hover:bg-cyan-50 hover:drop-shadow-md hover:scale-110 hover:p-3"
        >
          <div className="h-[78px] w-[78px] min-w-[78px] bg-[#F4F4F4]"></div>
          <div className="flex flex-col gap-2">
            <div className="text-[#0036C3] font-semibold rounded-[2px] p-1.5 text-xs leading-4 tracking-[1px] w-fit">
              NEWS
            </div>
            <div className="font-semibold leading-5">
              The US President wants half of all new vehicles...
            </div>
          </div>
        </div>
        <hr className="border-t-0 border-[#BDBDBD] border-[0.5px]" />
        <div
          role="related-articles-item"
          className="flex gap-6 cursor-pointer hover:bg-cyan-50 hover:drop-shadow-md hover:scale-110 hover:p-3"
        >
          <div className="h-[78px] w-[78px] min-w-[78px] bg-[#F4F4F4]"></div>
          <div className="flex flex-col gap-2">
            <div className="text-[#0036C3] font-semibold rounded-[2px] p-1.5 text-xs leading-4 tracking-[1px] w-fit">
              NEWS
            </div>
            <div className="font-semibold leading-5">
              The US President wants half of all new vehicles...
            </div>
          </div>
        </div>
        <button className="text-sm text-[#0036C3] leading-5 flex gap-2 items-center hover:bg-cyan-50 w-fit p-2.5 rounded-full">
          View more
          <FaArrowRight size={16} strokeWidth={1} />
        </button>
      </div>
    </div>
  );
}
