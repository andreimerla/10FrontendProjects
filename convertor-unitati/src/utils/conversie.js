const factorConversieLungime = {
    metri: {
        kilometri: 0.001,
        milimetri: 1000,
        feet: 3.28084,
        inch: 39.3701,
        mile: 0.000621371
    },
    kilometri: {
        metri: 1000,
        milimetri: 1000000,
        feet: 3280.84,
        inch: 39370.1,
        mile: 0.621371
    },
    milimetri: {
        metri: 0.001,
        kilometri: 0.000001,
        feet: 0.00328084,
        inch: 0.0393701,
        mile: 0.000000621371
    },
    feet: {
        metri: 0.3048,
        milimetri: 304.8,
        kilometri: 0.0003048,
        inch: 12,
        mile: 0.000189394
    },
    mile: {
        metri: 1609.34,
        milimetri: 1609340,
        kilometri: 1.60934,
        inch: 63360,
        feet: 5280
    }
};

const factorConversieBani = {
    leu:{
        euro: 0.2,
        dolar:0.22,
        lira:0.17,
        yen:34.68,
        ruble:19.31,
    },
    euro:{
        leu:4.97,
        dolar:1.09,
        lira:0.84,
        yen:172.37,
        ruble:95.98,
    },
    dolar:{
        euro:0.92,
        leu:4.55,
        lira:0.77,
        yen:157.93,
        ruble:87.95,
    },
    yen:{
        euro:0.0058,
        dolar:0.0063,
        lira:0.0049,
        leu:0.029,
        ruble:0.56,
    },
    ruble:{
        euro:0.010,
        dolar:0.011,
        lira:0.0088,
        yen:1.80,
        leu:1.80,
    }
}

const factorConversieAri = {
    hectare: {
        ari: 100,
        metriPatrati: 10000,
        acri: 2.47105,
    },
    ari: {
        hectare: 0.01,
        metriPatrati: 100,
        acri: 0.0247105,
    },
    metriPatrati: {
        hectare: 0.0001,
        ari: 0.01,
        acri: 0.000247105,
    },
    acri: {
        hectare: 0.404686,
        ari: 40.4686,
        metriPatrati: 4046.86,
    }
};

const factorConversieVolum = {
    litri: {
        mililitri: 1000,
        galoni: 0.264172,
        pinti: 2.11338,
        centimetriCub: 1000,
    },
    mililitri: {
        litri: 0.001,
        galoni: 0.000264172,
        pinti: 0.00211338,
        centimetriCub: 1,
    },
    galoni: {
        litri: 3.78541,
        mililitri: 3785.41,
        pinti: 8,
        centimetriCub: 3785.41,
    },
    pinti: {
        litri: 0.473176,
        mililitri: 473.176,
        galoni: 0.125,
        centimetriCub: 473.176,
    },
    centimetriCub: {
        litri: 0.001,
        mililitri: 1,
        galoni: 0.000264172,
        pinti: 0.00211338,
    }
};

const factorConversieMasa = {
    kilograme: {
        grame: 1000,
        tone: 0.001,
        livre: 2.20462,
        uncii: 35.274,
    },
    grame: {
        kilograme: 0.001,
        tone: 0.000001,
        livre: 0.00220462,
        uncii: 0.035274,
    },
    tone: {
        kilograme: 1000,
        grame: 1000000,
        livre: 2204.62,
        uncii: 35274,
    },
    livre: {
        kilograme: 0.453592,
        grame: 453.592,
        tone: 0.000453592,
        uncii: 16,
    },
    uncii: {
        kilograme: 0.0283495,
        grame: 28.3495,
        tone: 0.0000283495,
        livre: 0.0625,
    }
};

export {factorConversieLungime,factorConversieBani,factorConversieAri,factorConversieMasa,factorConversieVolum};