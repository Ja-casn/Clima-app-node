const axios = require('axios');

const getLugarLatLng = async(direcc) => {

    const encodedUlr = encodeURI(direcc);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
        headers: { 'x-rapidapi-key': '68a2127d6fmshee052cb012489bbp1c0f96jsnbfcd26dbca0e' }
    });

    const answ = await instance.get();

    if (answ.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direcc }`)
    }

    // Definiendo variables para mostrar tipo de informacion
    const data = answ.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}