const addClass = (element, className) => {
  const check = new RegExp("(\\s|^)" + className + "(\\s|$)");
  if (element) {
    if (check.test(element.className)) {
      return 0;
    } else {
      element.className += " " + className;
    }
  }
};

const removeClass = (element, className) => {
  const check = new RegExp("(\\s|^)" + className + "(\\s|$)");
  if (element) {
    element.className = element.className.replace(check, " ").trim();
  }
};

const removeAllClass = (element) => {
  element.className = " ";
};

const toggleClass = (element, className) => {
  const check = new RegExp("(\\s|^)" + className + "(\\s|$)");
  if (check.test(element.className)) {
    element.className = element.className.replace(check, " ").trim();
  } else {
    element.className += " " + className;
  }
};

const checkClass = (element, className) => {
  const check = new RegExp("(\\s|^)" + className + "(\\s|$)");
  if (check.test(element.className)) {
    return true;
  } else {
    return false;
  }
};

const get = (element) => {
  return document.getElementById(element);
};

const gets = (element) => {
  return document.getElementsByClassName(element);
};

const loadingStart = () => {
  const content = get("content");

  addClass(content, "fade");

  setTimeout(() => {
    addClass(content, "lock");
    window.scrollTo(0, 0);
  }, 200);
};

const loadingFinish = () => {
  const content = get("content");

  removeClass(content, "lock");
  window.scrollTo(0, 0);
  addClass(content, "lock");

  setTimeout(() => {
    removeClass(content, "fade");
  }, 200);

  setTimeout(() => {
    removeClass(content, "lock");
  }, 400);
};

// login library
let loginAnimationIndex = 0;

const openLogin = () => {
  const login = get("Login");

  if (loginAnimationIndex === 0) {
    loginAnimationIndex = 1;
    addClass(login, "active");
    setTimeout(() => {
      loginAnimationIndex = 0;
    }, 1000);
  }
};

const openRegistration = () => {
  const registration = get("Registration");

  if (loginAnimationIndex === 0) {
    loginAnimationIndex = 1;
    addClass(registration, "active");
    setTimeout(() => {
      loginAnimationIndex = 0;
    }, 1000);
  }
};

const openRegistrationCharacter = () => {
  const registrationCharacter = get("RegistrationCharacter");

  if (loginAnimationIndex === 0) {
    loginAnimationIndex = 1;
    addClass(registrationCharacter, "active");
    setTimeout(() => {
      loginAnimationIndex = 0;
    }, 1000);
  }
};

module.exports = {
  addClass,
  removeClass,
  removeAllClass,
  toggleClass,
  checkClass,
  get,
  gets,
  loadingStart,
  loadingFinish,
  openLogin,
  openRegistration,
  openRegistrationCharacter,
};
