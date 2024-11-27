function calculateDiscount(userType, amount) {
    if (userType === 'premium') {
        return amount * 0.8;
    }
    return amount;
}

module.exports = calculateDiscount;