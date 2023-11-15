// Avicennia alba
function bgbAvcAlba(d, p = 0.506) {
    return 0.199 * p ** 0.899 * d ** 2.22;
}

// Avicennia marina
function bgbAvcMarina(d) {
    return 1.28 * d ** 1.17;
}

// Avicennia officinalis
function bgbAvcOfficinalis(d, p = 0.63) {
    return 0.199 * p ** 0.899 * d ** 2.22;
}

// Brugiera cylindrica
function bgbBrgCylindrica(d, p = 0.72) {
    return 0.199 * p ** 0.899 * d ** 2.22;
}

// Rhizophora apiculata
function bgbRzpApiculata(d) {
    return 0.00698 * d ** 2.61;
}

// Rhizophora mucronata
function bgbRzpMucronata(d, p = 0.867) {
    return 0.199 * p ** 0.899 * d ** 2.22;
}

// Rhizophora stylosa
function bgbRzpStylosa(d) {
    return 0.261 * d ** 1.86;
}

export {
    bgbAvcAlba,
    bgbAvcMarina,
    bgbAvcOfficinalis,
    bgbBrgCylindrica,
    bgbRzpApiculata,
    bgbRzpMucronata,
    bgbRzpStylosa,
};
