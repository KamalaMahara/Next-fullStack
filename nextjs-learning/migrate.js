import {migrate } from "drizzle-orm/postgres-js/migrator"
import {db} from "./src/db/db.js"


(async () => {
    await migrate(db, { migrationsFolder: "./drizzle" });
})();