import Image from "next/image";
import Article_pic from "../public/icons/biden_pic.png";
export default function Footer() {
  return (
    <div role="main-article" className="col-span-2">
      <div role="article-image-and-caption" className="flex flex-col gap-4">
        <Image src={Article_pic} alt="Article main pic" />
        <span role="image-caption" className="text-base text-[#000000DE]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>
      <div role="article-body" className="mt-10 text-[20px]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat faucibus
          id vitae suspendisse. Ipsum erat malesuada sit faucibus faucibus
          massa. Mauris et morbi vitae habitant sit. Maecenas pretium in
          consectetur velit auctor. Porttitor tellus ut pretium, scelerisque
          orci erat. Etiam imperdiet ridiculus eu tincidunt. Vel dui, pulvinar
          vivamus lorem risus.
        </p>
        <br />
        <p>
          Bibendum aliquet adipiscing sed interdum. Arcu consequat fames blandit
          nisi. Vulputate dignissim tempus duis ultrices. Arcu sed porttitor
          morbi lobortis mattis pellentesque. Dui quam sed eu ultrices ut
          nullam. Maecenas tortor auctor eros erat volutpat sapien dui pretium.
        </p>
        <br />
        <p>
          Hac sed diam tristique in consequat in suspendisse habitant. Et mauris
          venenatis posuere auctor tortor, placerat. Quisque tincidunt euismod
          dictum neque, massa nisi. Sagittis, dictum nibh bibendum cursus neque,
          nunc molestie. Odio viverra sagittis, platea nibh eget. Egestas a cras
          bibendum amet, mi magna cursus. Ante suscipit felis vitae amet.
        </p>
      </div>
    </div>
  );
}
