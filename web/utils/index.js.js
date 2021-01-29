class Util {
    static #defaultFormart = Intl.NumberFormat("en-us", {
        currency: "BRL",
        style: "currency"
    });

    static formatDate(date) {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + (d.getDate() + 1),
            year = d.getFullYear();
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