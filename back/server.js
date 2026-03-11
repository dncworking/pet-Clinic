import app from "./app.js";
import { testConnection } from "./config/db.js";
const PORT = process.env.PORT;

testConnection();
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
