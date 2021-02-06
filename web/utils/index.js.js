class Util {
    static #defaultFormart = Intl.NumberFormat("en-us", {
        currency: typeof navigator!=="undefined" 
        && navigator.language == 'en-us' ? 'USD' : 'BRL',
        style: "currency"
    });

    static formatDate(date) {
        let location = navigator.location || 'pt-br'
        let [day,month,year] = 
            new Date(date+'T11:00:01')
                .toLocaleDateString(location)
                .split('/')
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
        return [day, month, year].join('/');
    }

    static formatCurrency(value) {
        return this.#defaultFormart.format(value);
    }
    static unFormartCurrency(value) {
        value = String(value);
        return Number(value.replace(/\D/g, '')) / 100;
    }
}

export default Util;