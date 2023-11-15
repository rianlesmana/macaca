// Avicennia alba
function agbAvcAlba(d) {
    return 0.079211 * d ** 2.47;
}

// Avicennia marina
function agbAvcMarina(d) {
    return 0.1848 * d ** 2.3524;
}

// Avicennia officinalis
function agbAvcOfficinalis(d) {
    return 0.251 * 0.63 * d ** 2.46;
}

// Brugiera cylindrica
function agbBrgCylindrica(d) {
    return 0.251 * 0.72 * d ** 2.46;
}

// Rhizophora apiculata
function agbRzpApiculata(d) {
    return 0.1709 * d ** 2.516;
}

// Rhizophora mucronata
function agbRzpMucronata(d, h) {
    return 0.0311 * (d ** 2 * h) ** 1.00741 * 0.867;
}

// Rhizophora stylosa
function agbRzpStylosa(d, h) {
    return 0.0375 * (d ** 2 * h) ** 0.98626 * 0.91;
}

export {
    agbAvcAlba,
    agbAvcMarina,
    agbAvcOfficinalis,
    agbBrgCylindrica,
    agbRzpApiculata,
    agbRzpMucronata,
    agbRzpStylosa,
};
