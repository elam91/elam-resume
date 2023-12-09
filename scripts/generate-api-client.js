import axios from "axios";
import { exec } from "child_process";

async function getSchema() {
  console.log("getting schema from localhost:8000...");
  exec(
    "npx swagger-typescript-api -p http://localhost:8000/schema -o ./src/apiClient/django/ --axios",
    (err) => {
      if (err) {
        console.error("There was an error! is your server running?");
        return;
      }
      console.log(
        "Success! now grab the folder generated, and use the HTTPClient to make requests!"
      );
    }
  );
}
getSchema();
