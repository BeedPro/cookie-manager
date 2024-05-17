import "./style.css";
import {
  setupDeleteCookies,
  setupSaveCookie,
  setupShowCookie,
  setupShowCookies,
  getCookie,
  getAllCookies,
  setupDeleteCookie,
} from "./cookie_manager.js";

const saveCookieButtons = document.querySelectorAll("#saveCookie");
const showCookieButtons = document.querySelectorAll("#showCookie");
const deleteCookieButtons = document.querySelectorAll("#deleteCookie");
const modelDiv = document.getElementById("model");
const isClickedCookie = getCookie("isClicked", getAllCookies(false));
if (isClickedCookie) {
  if (isClickedCookie.value == "true") {
    modelDiv.remove();
  }
}

saveCookieButtons.forEach((element) => {
  setupSaveCookie(element);
});
showCookieButtons.forEach((ele) => {
  setupShowCookie(ele);
});
deleteCookieButtons.forEach((ele) => {
  setupDeleteCookie(ele);
});
setupShowCookies(document.getElementById("showAllCookies"));
setupDeleteCookies(document.getElementById("deleteAllCookies"));
