import { FC } from "react";
import { ColumnType } from "../types";

type ColumnProps = {
    columnContent: ColumnType;
    className?: string;
};

const Column: FC<ColumnProps> = ({ columnContent, className }) => {
    const { columnHeading, contentHeading, description, buttonPrimary, buttonSecondary } = columnContent ?? {};

    return (
        <div>
            <h2>column</h2>
        </div>
    );
};

export default Column;
