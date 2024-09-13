import { PinContainer } from "@/components/ui/pin";
import { projects } from "@/data";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="lg:py-20 py-10 w-full" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-8 lg:gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-full"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <a href={item.link} target="_blank">
                <div className="flex flex-col items-start h-full justify-between">
                  <div className="relative sm:w-96 w-[80dvw] overflow-visible h-[20dvh] lg:h-[30dvh] mb-10">
                    <div
                      className="relative w-full h-full overflow-visible lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <Image src="/bg.png" alt="bgimg" fill />
                    </div>
                    <Image
                      src={item.img}
                      alt="cover"
                      className="z-10 absolute bottom-0 inset-0 w-full object-cover h-[250px]"
                      width={300}
                      height={300}
                    />
                  </div>
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>
                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {item.des}
                  </p>
                </div>
              </a>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
