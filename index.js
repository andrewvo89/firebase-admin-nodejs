require("dotenv").config();
const admin = require("firebase-admin");

const {
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_PRIVATE_KEY,
  FIREBASE_CLIENT_EMAIL,
} = process.env;
/*
  To generate a private key file for your service account:
    1. In the Firebase console, open Settings > Service Accounts.
    2. Click Generate New Private Key, then confirm by clicking Generate Key.
    3. Securely store the JSON file containing the key.
*/
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: FIREBASE_PROJECT_ID,
    privateKey: FIREBASE_PRIVATE_KEY,
    /*
      You must add your key into double qoutes to allow expanded new lines option according with dotenv documentation.
      You can check that option at Rules section in dotenv github.
      https://github.com/motdotla/dotenv#rules  
    */
    clientEmail: FIREBASE_CLIENT_EMAIL,
  }),
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
});
admin.firestore().settings({
  ignoreUndefinedProperties: true,
});

const run = async () => {
  // Example collection read from the database
  const collection = await admin
    .firestore()
    .collection("users")
    .where("active", "==", true)
    .get();

  // Example write to datatabase
  const doc = collection.docs[0];
  await admin.firestore().collection("users").doc(doc.id).update({
    active: false,
  });
};

run();
