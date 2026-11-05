// Shared Firebase start-up for apply.html, staff.html and admin.html
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { firebaseConfig, googleForms } from "./firebase-config.js";

export const configured = !String(firebaseConfig.apiKey || "").startsWith("PASTE");
export const app = configured ? initializeApp(firebaseConfig) : null;
export const auth = configured ? getAuth(app) : null;
export const db = configured ? getFirestore(app) : null;
export { googleForms };

export const $ = (s, r = document) => r.querySelector(s);
export const $$ = (s, r = document) => [...r.querySelectorAll(s)];
export const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export function show(el, kind, text) {
  el.className = "msg " + kind;
  el.textContent = text;
  el.hidden = false;
}

export function setupBanner() {
  if (configured) return;
  const b = document.createElement("div");
  b.className = "setup";
  b.innerHTML = '<div class="wrap"><b>Setup needed:</b> this page is not connected to Firebase yet. Paste your settings into <code>firebase-config.js</code> (see the setup guide).</div>';
  document.body.prepend(b);
}

// Friendly text for Firebase error codes
export function niceError(e) {
  const c = (e && e.code) || "";
  const m = {
    "auth/invalid-credential": "Email or password is not correct.",
    "auth/wrong-password": "Email or password is not correct.",
    "auth/user-not-found": "No account with this email. Create an account first.",
    "auth/email-already-in-use": "An account with this email already exists. Sign in instead, or reset your password.",
    "auth/weak-password": "Choose a password of at least 8 characters.",
    "auth/invalid-email": "This email address doesn't look right.",
    "auth/too-many-requests": "Too many attempts. Wait a few minutes and try again.",
    "auth/network-request-failed": "No internet connection. Check your connection and try again.",
    "permission-denied": "You don't have permission for this. Ask an admin to check your access."
  };
  return m[c] || (e && e.message) || "Something went wrong. Please try again.";
}

export const fmtDate = (ts) => {
  try { const d = ts && ts.toDate ? ts.toDate() : null; return d ? d.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }) : "—"; }
  catch { return "—"; }
};
