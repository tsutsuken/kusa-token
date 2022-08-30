import * as functions from "firebase-functions";

export const metadata = functions.https.onRequest((request, response) => {
  functions.logger.info("metadata", {
    query: request.query,
  });

  const tokenId = request.query.id;
  if (tokenId === undefined) {
    response.status(400).send("Error: No id");
    return;
  }

  let jsonString = "";
  if (tokenId == "0") {
    // Main token
    jsonString = `
        {
            "name": "草トークン",
            "description": "草トークンとは~",
            "image": "https://firebasestorage.googleapis.com/v0/b/kusa-token.appspot.com/o/token_images%2Fkusasatsu_sample.png?alt=media&token=92ea5fa2-f8ea-41f7-8534-94f7ffde6b62"
        }
        `;
  } else {
    // Other token
    jsonString = "";
  }

  response.send(jsonString);
});
