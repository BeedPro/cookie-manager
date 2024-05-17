function logDiv(msg) {
  const div = document.createElement("div");
  div.innerText = msg;
  // document.body.append(div);
  document.querySelector("#log").appendChild(div);
}
export function getAllCookies(showMsg = true) {
  const cookies = [];
  if (document.cookie == "" && showMsg) {
    logDiv("No cookies found");
    return [];
  }
  document.cookie.split("; ").forEach((e) => {
    const [cookieName, cookieValue] = e.split("=");
    cookies.push({
      name: cookieName,
      value: cookieValue,
    });
  });
  return cookies;
}

export function getCookie(name, cookies) {
  for (let i = 0; i < cookies.length; i++) {
    const element = cookies[i];
    if (element.name === name) {
      return element;
    }
  }
}
export function setupSaveCookie(saveCookieButton) {
  const saveCookie = (cookieName, cookieValue) => {
    const currentDate = new Date();
    const expiry = new Date();
    expiry.setDate(currentDate.getDate() + 30);
    document.cookie = `${cookieName}=${cookieValue}; expires=${expiry}; SameSite=Strict`;
  };

  saveCookieButton.addEventListener("click", () => {
    const cookieName = saveCookieButton.getAttribute("data-cookie-name");
    const cookieValue = saveCookieButton.getAttribute("data-cookie-value");
    saveCookie(cookieName, cookieValue);

    logDiv(`Created cookie: ${cookieName} - ${cookieValue}`);
    saveCookieButton.innerHTML = `Saved ${cookieName} with ${cookieValue}`;
  });
}

export function setupShowCookie(showCookieButton) {
  const cookieName = showCookieButton.getAttribute("data-cookie-name");
  showCookieButton.addEventListener("click", () => {
    const cookies = getAllCookies();
    const cookie = getCookie(cookieName, cookies);
    if (cookie) {
      logDiv(`Cookie: ${cookie.name} - ${cookie.value}`);
    } else {
      logDiv(`Cookie ${cookieName} not found`);
    }
  });
}

export function setupShowCookies(showCookiesButton) {
  showCookiesButton.addEventListener("click", () => {
    const cookies = getAllCookies();
    cookies.forEach((cookie) => {
      logDiv(`Cookie: ${cookie.name} - ${cookie.value}`);
    });
  });
}

export function setupDeleteCookie(deleteCookie) {
  const cookieName = deleteCookie.getAttribute("data-cookie-name");
  deleteCookie.addEventListener("click", () => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    logDiv(`Deleted ${cookieName}`);
  });
}

export function setupDeleteCookies(deleteCookies) {
  deleteCookies.addEventListener("click", () => {
    const cookies = getAllCookies();
    cookies.forEach((cookie) => {
      document.cookie = `${cookie.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      logDiv(`Deleted ${cookie.name}`);
    });
  });
}
