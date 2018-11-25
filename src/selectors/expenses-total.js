export default (expenses) => {
    return expenses.reduce((prevVal, elem) => {
        return prevVal + elem.amount;
    }, 0)
};