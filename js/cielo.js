/**
 * @param {number} codigo - El código weather_code recibido de la API.
 * @returns {string} Texto descriptivo del estado del cielo.
 */
function describirCielo(codigo) {
    switch (codigo) {
    case 0:
        return "Despejado";
    case 1:
        return "Principalmente despejado";
    case 2:
        return "Parcialmente nublado";
    case 3:
        return "Nublado";
    case 45:
    case 48:
        return "Niebla";
    case 51:
    case 53:
    case 55:
        return "Llovizna";
    case 56:
    case 57:
        return "Llovizna helada";
    case 61:
    case 63:
    case 65:
        return "Lluvia";
    case 66:
    case 67:
        return "Lluvia helada";
    case 71:
    case 73:
    case 75:
    case 77:
        return "Nieve";
    case 80:
    case 81:
    case 82:
        return "Chubascos";
    case 85:
    case 86:
        return "Chubascos de nieve";
    case 95:
        return "Tormenta eléctrica";
    case 96:
    case 99:
        return "Tormenta con granizo";
    default:
        return "Condición desconocida";
    }
}
