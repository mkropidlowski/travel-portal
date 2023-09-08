export type SectionType = {
    id?: string;
    heading?: string;
    columnContent?: ColumnType;
    subHeading?: string;
    visulContent?: JSX.Element;
    shouldBeRow?: boolean;
    className?: string;
};

export type ColumnType = {
    columnHeading?: string;
    description?: string;
    contentHeading?: string;
    buttonPrimary?: string;
    buttonSecondary?: string;
};
