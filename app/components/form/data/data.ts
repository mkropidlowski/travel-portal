export const bookingFormInputs = [
    {
        formKey: "name" as const,
        label: "Name",
    },
    {
        formKey: "surname" as const,
        label: "Surname",
    },
    {
        formKey: "email" as const,
        label: "E-mail",
    },
    {
        formKey: "phone" as const,
        label: "Phone",
    },
    {
        formKey: "street" as const,
        label: "Street",
    },
    {
        formKey: "houseNumber" as const,
        label: "House number",
    },
    {
        formKey: "locality" as const,
        label: "Locality",
    },
    {
        formKey: "postalCode" as const,
        label: "Postal code",
    },
];

export const firstTourParticipantsInputs = [
    {
        formKey: "firstParticipantName",
        label: "Name",
    },
    {
        formKey: "firstParticipantSurname",
        label: "Surname",
    },
    {
        formKey: "firstParticipantGender",
        label: "Gender",
    },
    {
        formKey: "firstParticipantPhone",
        label: "Phone",
    },
    {
        formKey: "firstParticipantBirthDate",
        label: "Birth date",
    },
];
export const secondTourParticipantsInputs = [
    {
        formKey: "secondParticipantName",
        label: "Name",
    },
    {
        formKey: "secondParticipantSurname",
        label: "Surname",
    },
    {
        formKey: "secondParticipantGender",
        label: "Gender",
    },
    {
        formKey: "secondParticipantPhone",
        label: "Phone",
    },
    {
        formKey: "secondParticipantBirthDate",
        label: "Birth date",
    },
];

export type ResponseStatus = "pending" | "sent" | "error";

export const contactFormResponseStatuses = {
    pending: "Wysyłanie wiadomości...",
    sent: "Wysłano wiadomość",
    default: "Wysyłam wiadomość",
};
