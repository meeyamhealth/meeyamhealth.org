// ===== Meeyam Health Foundation (MYHF) — website settings =====
// Step 1 of the setup guide: paste your Firebase web app settings below,
// replacing the PASTE_... values. These values are safe to publish: your data
// is protected by the security rules (firestore.rules), not by hiding these.

export const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

// Optional: Google Form links. If you add a link here, the application page
// also shows "Prefer Google Forms?" for that form. Leave "" to hide.
export const googleForms = {
  volunteer: "",
  member: "",
  intern: ""
};
