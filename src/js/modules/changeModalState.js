import calcPrice from "./calcPrice";

const changeModalState = (state) => {
    const yachtClock = document.querySelectorAll('input[name="clock"]'),
        yachtGuests = document.querySelectorAll('input[name="quest"]'),
        otherServices = document.querySelectorAll('input[name="servicesCheckbox"]');
    function bindActionToElems (event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {
                            state[prop] = []
                            elem.forEach((box, num) => {
                                if (box.checked) state[prop].push(num);
                            })
                        } else state[prop] = state[prop] = i;
                        break;
                }
                console.log(state);
                calcPrice(state);
            });
        });
    }
    bindActionToElems('click', yachtClock, 'clock'); /*получаем количество часов аренды*/
    bindActionToElems('click', yachtGuests, 'guests'); /*получаем количество гостей*/
    bindActionToElems('click', otherServices, 'checkbox'); /*получаем доп услуги из отмеченых чекбоксов*/

};

export default changeModalState;