const fs = require("fs/promises");

async function manageFiles() {
    try {
        //A:  create/write database
        await fs.writeFile("student.txt", "Alice/nBob/nCharlie");
        console.log("A. FIle created successfully.");

        //B: Reading and veryfying roster
        const data = await fs.readFile("students.txt", "utf8");

        console.log("\nB. Current Roster COntents:");
        console.log(data);

        //C: Appending new record
        await fs.appendFile("students.txt", "\nDavid");
        console.log("\nC. Record appended successfully:");

        //D: Verify the existence of the database
        try {
            await fs.access("students.txt");
            console.log("D. The file exists.");
        } catch {
            console.log("D. The file does not exist.");
        }

        //E:  Renaming file
        await fs.writeFile(
            "oldstudents.txt",
            "Old database"
        );

        await fs.rename(
            "oldstudents.txt",
            "students_archive.txt"
        );

        console.log("E. File renamed successfully.");

    } catch (error) {
        console.error(error);
    }

};

manageFiles();