import app, { init } from "./app";
import "./setup"

init().then(()=>{
  app.listen(4000, () => {
    console.log(`Server is listening on port 4000.`);
  });
})

