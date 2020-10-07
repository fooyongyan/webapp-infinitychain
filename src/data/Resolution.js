///Sample Resolution Data

export default {
    id: "0384e29e-5941-4d71-876e-ac99fdc63092",
    userId: "1",
    name: "Do more pushups",
    description: "I want to do more pushups to become fitter when I grow older... =)",
    markedDates: ["2020-10-01", "2020-10-02", "2020-10-03", "2020-10-04"], 
    isMarked: (date) => this.markedDates.array.find(element => element === date),
}; 