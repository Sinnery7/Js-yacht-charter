const calcPrice = (state) => {
    const priceResult = document.querySelector('.feed-form__value'),
        mainCost = [
            /*3 часа*/              [22500,30000,40000],
            /*5 часов*/             [35000,45000,50000],
            /*1 день*/              [45000,55000,65000],
            /*1-2 дня*/             [83700,102300,120900],
            /*2-3 дня*/             [121500,148500,175500],
            /*индивидуальный тур*/  [153000,187000,221000],
        ],
        otherCost = [4500,4500,4000,3500];  /*доп услуги по порядку*/

    function mainCalc(clock, guests = 0) {
        return clock >= 0 ? mainCost[clock][guests] : 0
    }

    function otherPriceCalc(state) {
        let result = [];
        if (state.checkbox) {
            state.checkbox.forEach(item => {
                result.push(otherCost[item])
            });
        }
        return result.reduce((sum, current) => sum + current, 0);
    }

    function calcForm(rent = 0, rest = 0) {
        return rent + rest
    }

    function printPrice() {
        priceResult.textContent = `${(calcForm(rentYacht, otherPrice))} руб`;
    }

    const rentYacht = mainCalc(state.clock, state.guests),
        otherPrice = otherPriceCalc(state);
    printPrice();
};

export default calcPrice;