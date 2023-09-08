import { FC } from "react";
import { SectionType } from "./types";
import Column from "./components/column";

const Section: FC<SectionType> = ({ id, heading, visulContent, columnContent, shouldBeRow, className }) => {
    return (
        <section className={"max-w-[1240px] h-screen m-auto flex flex-col justify-start scroll-my-16"} id={id}>
            <h2 className="text-[50px] text-center font-bold p-5">{heading}</h2>
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
