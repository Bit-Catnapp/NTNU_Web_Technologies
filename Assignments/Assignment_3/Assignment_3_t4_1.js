// Async Functions
async function checkoutStockLevel() {
    return document.getElementById("stock").value;
}

async function isWarehouseOpen() {
    return document.getElementById("wareHouseOpen").checked;
}

//Main
async function processItem(itemName) {
    // Waits for a returned valye before continuing
    let wareHouseOpen = await isWarehouseOpen();

    // Will not accesss this code until wareHouse has returned a value
    if (!wareHouseOpen) {
        //Warehouse closed
        document.getElementById("stockUpdate").textContent = "Operation aborted. Warehouse is closed";

    }
    else {
        //Warehouse open
        document.getElementById("stockUpdate").innerHTML =
            "Warehouse is Open<br> Preparing sync...";

        //Retrieve string
        const itemStr = document.getElementById(itemName).value;

        //Wait for stock value and add the new number
        let stock = await checkoutStockLevel();
        let bufferStock = Number(stock) + 10; //Casting to make sure its a number

        //Dsiplay timers
        setTimeout(() => {
            document.getElementById("stockUpdate").textContent =
                `Tracking: ${itemStr} 
                 has a total buffered inventory count of ${bufferStock} units`;

            setTimeout(() => {
                document.getElementById("wareHouseForm").reset();
                document.getElementById("stockUpdate").textContent = "";
            }, 3000)
        }, 2000);
    }
}