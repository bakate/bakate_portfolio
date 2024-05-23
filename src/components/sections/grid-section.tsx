import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { gridItems } from "@/data";

const GridSection = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20 mx-auto md:auto-rows-[20rem]">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default GridSection;
