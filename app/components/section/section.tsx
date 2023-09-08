import { FC } from "react";
import { SectionType } from "./types";
import Column from "./components/column";

const Section: FC<SectionType> = ({ id, heading, visulContent, columnContent, subHeading, shouldBeRow, className }) => {
    return (
        <section className={"max-w-[1240px] h-screen m-auto flex flex-col justify-start scroll-my-16"} id={id}>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-[50px] text-center font-bold p-5">{heading}</h2>
                <h3 className="text-lg text-center text-neutral-700 max-w-[500px]">{subHeading}</h3>
            </div>

            <div>
                {columnContent ? (
                    <div>
                        <Column columnContent={columnContent} />
                    </div>
                ) : null}
            </div>
            <div>{visulContent}</div>
        </section>
    );
};

export default Section;
