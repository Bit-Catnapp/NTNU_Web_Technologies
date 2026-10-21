// Async Functions
async function checkoutStockLevel() {
    return 45;
}

async function isWarehouseOpen() {
    return true;
}

//Main
async function processItem(itemName) {
    let wareHouseOpen = isWarehouseOpen();

    let stock = heckoutStockLevel();

}