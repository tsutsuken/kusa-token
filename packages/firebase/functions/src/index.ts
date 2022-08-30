import * as functions from "firebase-functions";

export const metadata = functions.https.onRequest((request, response) => {
  functions.logger.info("metadata", {
    query: request.query,
  });
  if (request.query.id === undefined) {
    response.status(400).send("Error: No id");
    return;
  }
  response.send("metadata id: " + request.query.id);
});
