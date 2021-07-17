export const depositMoney = (amount) => {
    const action = { type: "deposit", payload: amount };
    return action;
}

export const withdrawMoney = (amount) => {
    const action = { type: "withdraw", payload: amount };
    return action;
}