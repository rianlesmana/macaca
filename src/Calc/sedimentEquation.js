function bulkDensity(g, r, h) {
    const volume = 0.14 * r * h;
    const density = g / Number(volume);

    return Number(density);
}

function soilCarbonDensity(bulkDensity, cOrganic) {
    return Number(bulkDensity * (cOrganic / 100));
}

function amountCarbonInCoreSection(soilCarbonDensity, thicknessInterval) {
    return Number(soilCarbonDensity * thicknessInterval);
}

export { bulkDensity, soilCarbonDensity, amountCarbonInCoreSection };
