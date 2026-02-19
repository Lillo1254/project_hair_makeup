import bcrypt from "bcrypt";

const password = "Mafe2026";

bcrypt.hash(password, 10).then((hash) => {
    console.log(hash);
    process.exit();
});