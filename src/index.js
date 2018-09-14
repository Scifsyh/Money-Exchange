module.exports = function makeExchange(currency) {
    var money = new Object();
    if (currency > 10000) {
        money.error = "You are rich, my friend! We don't have so much coins for exchange";
    } else {
        if (currency >= 50) {
            money.H = Math.floor(currency / 50);
            currency = currency - money.H * 50;
        }
        if (currency >= 25) {
            money.Q = Math.floor(currency / 25);
            currency = currency - money.Q * 25;
        }
        if (currency >= 10) {
            money.D = Math.floor(currency / 10);
            currency = currency - money.D * 10;
        }
        if (currency >= 5) {
            money.N = Math.floor(currency / 5);
            currency = currency - money.N * 5;
        }
        if (currency >= 1) {
            money.P = Math.floor(currency / 1);
            currency = currency - money.P * 1;
        }
    }
    return money;
}
