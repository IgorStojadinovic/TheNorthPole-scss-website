/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Merriweather&family=Roboto:ital,wght@0,400;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*------------------------------------*\\\n  #BASE\n\\*------------------------------------*/\n* {\n  overflow-x: hidden;\n  margin: 0;\n  font-family: \"Roboto\";\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml::-webkit-scrollbar {\n  display: none;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n/*------------------------------------*\\\n  #MIXINS\n\\*------------------------------------*/\n/*------------------------------------*\\\n  #NAVIGATION SECTION\n\\*------------------------------------*/\n.navbar {\n  color: white;\n  background-color: black;\n  height: 10vh;\n  display: flex;\n  width: 100vw;\n  position: fixed;\n  z-index: 20;\n}\n\n.navbar-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  width: 100%;\n  overflow: hidden;\n}\n\n.mobile-navbar-icon {\n  display: flex;\n  height: 100%;\n  width: 10%;\n  align-items: center;\n}\n@media (min-width: 1536px) {\n  .mobile-navbar-icon {\n    display: none;\n  }\n}\n\n.hamburger-icon {\n  height: 2px;\n  width: 30px;\n  background-color: white;\n  transition: background-color 0.5s ease-in-out;\n}\n.hamburger-icon::after {\n  position: absolute;\n  content: \"\";\n  height: 2px;\n  width: 30px;\n  background-color: white;\n  transform: translateY(-10px);\n  transition: all 0.5s ease-in-out;\n}\n.hamburger-icon::before {\n  position: absolute;\n  content: \"\";\n  height: 2px;\n  width: 30px;\n  background-color: white;\n  transform: translateY(10px);\n  transition: all 0.5s ease-in-out;\n}\n\n.navbar-container__links {\n  display: none;\n  width: 40%;\n  justify-content: space-around;\n}\n@media (min-width: 1536px) {\n  .navbar-container__links {\n    display: flex;\n  }\n}\n\n.navbar-container__links-list-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.navbar-container__links-list-item-link {\n  text-transform: uppercase;\n  text-decoration: none;\n  color: white;\n  padding-bottom: 5px;\n  border-bottom: 2px solid transparent;\n  transition: border-bottom 0.5s ease-in-out;\n}\n.navbar-container__links-list-item-link:hover {\n  border-bottom: 2px solid white;\n}\n\n/*------------------------------------*\\\n  #Mobile Menu\n\\*------------------------------------*/\n.navbar-container__mobile-menu {\n  top: 9vh;\n  left: 0;\n  width: 0;\n  height: 100vh;\n  flex-direction: column;\n  position: fixed;\n  z-index: 80;\n  background-color: rgb(0, 0, 0);\n  transition: width 0.7s ease-in-out;\n}\n\n.navbar-container__mobile-links-list-item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 40px;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n@media (min-width: 768px) {\n  .navbar-container__mobile-links-list-item {\n    font-size: 25px;\n  }\n}\n\n.navbar-container__mobile-links-list-item-link {\n  text-transform: uppercase;\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  color: white;\n}\n\n.navbar__container-icons {\n  display: none;\n  width: 10%;\n}\n\n.navbar__container-icons-left-side {\n  width: 100%;\n  display: none;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.social-icons {\n  cursor: pointer;\n}\n.social-icons:hover {\n  color: gray;\n}\n\n.navbar__container-mobile-menu-icon {\n  display: flex;\n}\n\n.nav-checkbox {\n  display: none;\n}\n\n.nav-checkbox:checked + .mobile-navbar-icon .hamburger-icon {\n  background-color: transparent;\n}\n\n.nav-checkbox:checked + .mobile-navbar-icon .hamburger-icon::after {\n  transform: rotate(45deg) translate(5px, -5px);\n}\n\n.nav-checkbox:checked + .mobile-navbar-icon .hamburger-icon::before {\n  transform: rotate(-45deg) translate(5px, 5px);\n}\n\n.nav-checkbox:checked ~ .navbar-container__mobile-menu {\n  width: 100vw;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.nav-checkbox:checked ~ .navbar-container__mobile-menu > .navbar-container__mobile-links-list-item {\n  opacity: 1;\n}\n\n.nav-checkbox:not(:checked) ~ .navbar-container__mobile-menu {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n/*------------------------------------*\\\n  #HERO SECTION\n\\*------------------------------------*/\n.hero-section {\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n\n.hero-section__figure {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.hero-section__figure-picture-tag {\n  width: 100%;\n  height: 100%;\n}\n\n.hero-section__figure-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.hero-section__title {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hero-section__title-heading {\n  text-align: center;\n  position: absolute;\n  font-size: 30px;\n  text-transform: uppercase;\n  color: white;\n  letter-spacing: 10px;\n  top: 300px;\n}\n@media (min-width: 768px) {\n  .hero-section__title-heading {\n    top: 600px;\n  }\n}\n\n.hero-section__title-main-link {\n  text-decoration: none;\n}\n\n.link-text {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  font-size: 20px;\n  text-transform: uppercase;\n  color: white;\n  font-family: \"Merriweather\";\n  font-weight: 100;\n  text-decoration: none;\n  height: 250px;\n}\n\n.arrow-down-icon {\n  transition: all 0.5s ease-in-out;\n}\n.arrow-down-icon:hover {\n  transform: translateY(20px);\n}\n\n/*------------------------------------*\\\n  #NEW ARRIVALS SECTION\n\\*------------------------------------*/\n.new-arrivals {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  background-color: black;\n}\n@media (min-width: 1536px) {\n  .new-arrivals {\n    height: 100vh;\n    flex-direction: row;\n  }\n}\n\n.new-arrivals__container-text {\n  height: 50%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n@media (min-width: 768px) {\n  .new-arrivals__container-text {\n    font-size: 30px;\n  }\n}\n@media (min-width: 1536px) {\n  .new-arrivals__container-text {\n    height: 100%;\n  }\n}\n\n.new-arrivals__container-text-heading {\n  margin: 0;\n  text-transform: uppercase;\n  color: white;\n  letter-spacing: 5px;\n}\n\n.new-arrivals__container-text-link {\n  text-decoration: none;\n  color: white;\n  text-transform: uppercase;\n  font-family: \"Merriweather\";\n  font-weight: 100;\n}\n\n.new-arrivals__container-img {\n  height: 50%;\n  width: 100%;\n  object-fit: cover;\n  padding-bottom: 20px;\n}\n@media (min-width: 1024px) {\n  .new-arrivals__container-img {\n    height: 100%;\n    padding-bottom: 0;\n  }\n}\n@media (min-width: 1536px) {\n  .new-arrivals__container-img {\n    height: 100%;\n    padding-bottom: 0;\n  }\n}\n\n/*------------------------------------*\\\n  #ARTICALS SECTION\n\\*------------------------------------*/\n.articals-section {\n  height: 1100px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  background-color: black;\n}\n@media (min-width: 768px) {\n  .articals-section {\n    height: 2000px;\n  }\n}\n@media (min-width: 1024px) {\n  .articals-section {\n    flex-direction: row;\n    height: 500px;\n    justify-content: center;\n    align-items: center;\n  }\n}\n@media (min-width: 1536px) {\n  .articals-section {\n    flex-direction: row;\n    height: 500px;\n    justify-content: center;\n    align-items: center;\n  }\n}\n\n.articals-section__picture {\n  height: 350px;\n  width: 100%;\n  overflow: hidden;\n}\n@media (min-width: 768px) {\n  .articals-section__picture {\n    height: 30%;\n  }\n}\n@media (min-width: 768px) {\n  .articals-section__picture {\n    height: 100%;\n  }\n}\n@media (min-width: 1536px) {\n  .articals-section__picture {\n    height: 100%;\n  }\n}\n\n.articals-section__picture-img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n\n/*------------------------------------*\\\n  #SALE SECTION\n\\*------------------------------------*/\n.sale-section {\n  height: 1200px;\n  background-color: black;\n}\n@media (min-width: 768px) {\n  .sale-section {\n    height: 1900px;\n  }\n}\n@media (min-width: 1536px) {\n  .sale-section {\n    height: 100vh;\n  }\n}\n\n.sale-section__container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n}\n\n.sale-section__container-text {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 10%;\n}\n@media (min-width: 768px) {\n  .sale-section__container-text {\n    font-size: 30px;\n  }\n}\n\n.sale-secation__container-text-main-heading {\n  text-transform: uppercase;\n  color: white;\n  letter-spacing: 5px;\n}\n\n.sale-section__container-text-secondary {\n  text-transform: uppercase;\n  color: white;\n  font-family: \"Merriweather\";\n  font-weight: 100;\n  letter-spacing: 5px;\n}\n\n.sale-section__list {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding: 0 1rem;\n  height: 80%;\n}\n@media (min-width: 1536px) {\n  .sale-section__list {\n    flex-direction: row;\n    height: 50%;\n  }\n}\n\n.sale-section__list-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 30%;\n  text-align: center;\n}\n.sale-section__list-item .sale-section__list-item-link {\n  display: flex;\n  flex-direction: column;\n  text-decoration: none;\n}\n@media (min-width: 768px) {\n  .sale-section__list-item .sale-section__list-item-link {\n    align-items: center;\n  }\n}\n.sale-section__list-item .sale-section__list-text {\n  text-transform: uppercase;\n  color: white;\n  letter-spacing: 2px;\n  height: 30%;\n  width: 100%;\n  font-size: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (min-width: 768px) {\n  .sale-section__list-item .sale-section__list-text {\n    font-size: 30px;\n  }\n}\n.sale-section__list-item .sale-section__list-item-img {\n  height: 70%;\n  width: 100%;\n  object-fit: contain;\n}\n@media (min-width: 768px) {\n  .sale-section__list-item .sale-section__list-item-img {\n    height: 100%;\n    width: 100%;\n  }\n}\n@media (min-width: 1536px) {\n  .sale-section__list-item {\n    width: 30%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n}\n\n/*------------------------------------*\\\n  #ABOUT SECTION\n\\*------------------------------------*/\n.about-section {\n  position: relative;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.about-background-image {\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  object-fit: cover;\n  z-index: 1;\n}\n\n.about-section__content {\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: flex-start;\n  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.949));\n}\n@media (min-width: 1536px) {\n  .about-section__content {\n    width: 50%;\n  }\n}\n\n.about-section__content-title {\n  font-weight: 100;\n  padding-bottom: 50px;\n  margin-left: 20px;\n  margin-right: 20px;\n  text-transform: uppercase;\n  color: white;\n  letter-spacing: 5px;\n}\n\n.about-section__content-paragraph {\n  padding: 0;\n  margin-left: 20px;\n  margin-right: 20px;\n  text-transform: uppercase;\n  color: white;\n  letter-spacing: 2px;\n}\n\n/*------------------------------------*\\\n  #CONTACT SECTION\n\\*------------------------------------*/\n.contact-section {\n  height: 1000px;\n  background-color: black;\n}\n\n.contact-section__container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n@media (min-width: 768px) {\n  .contact-section__container {\n    align-items: center;\n  }\n}\n@media (min-width: 1536px) {\n  .contact-section__container {\n    flex-direction: row-reverse;\n  }\n}\n\n.contact-section__container-form-inputs {\n  width: 100%;\n  height: 60%;\n  display: flex;\n  flex-direction: column;\n  padding: 0 1em 1em 1em;\n}\n@media (min-width: 1536px) {\n  .contact-section__container-form-inputs {\n    width: 50%;\n  }\n}\n\n.input-label {\n  margin-top: 5px;\n  margin-bottom: 20px;\n  font-weight: 100;\n  color: white;\n  font-size: 20px;\n  overflow: hidden;\n  text-transform: uppercase;\n}\n\n.contact-section__container-form-name-inputs {\n  color: white;\n  display: flex;\n  flex-direction: column;\n}\n\n.input-text,\n.input-email {\n  outline: none;\n  color: white;\n  height: 40px;\n  background-color: black;\n  border: 1px solid white;\n  font-size: 20px;\n}\n\n.contact-from-text-area {\n  outline: none;\n  color: white;\n  background-color: black;\n  border: 1px solid white;\n  font-size: 15px;\n}\n\n.submit-btn {\n  margin-top: 20px;\n  text-transform: uppercase;\n  color: white;\n  letter-spacing: 5px;\n  background-color: black;\n  height: 50px;\n  border: 1px solid white;\n  cursor: pointer;\n}\n.submit-btn:hover {\n  background-color: white;\n  color: black;\n}\n\n.contact-section__container-text {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n  height: 30%;\n  padding: 1em 1em 0 1em;\n  color: white;\n}\n@media (min-width: 768px) {\n  .contact-section__container-text {\n    width: 70%;\n  }\n}\n@media (min-width: 1536px) {\n  .contact-section__container-text {\n    width: 40%;\n  }\n}\n\n.contact-section__container-text-title {\n  font-weight: 100;\n  text-transform: uppercase;\n  color: white;\n  letter-spacing: 5px;\n}\n\n.contact-section__container-text-paragraph {\n  font-weight: 100;\n  text-align: center;\n  text-transform: uppercase;\n  color: white;\n  letter-spacing: 2px;\n}\n\n/*------------------------------------*\\\n  #JOIN SECTION\n\\*------------------------------------*/\n.join-section {\n  display: flex;\n  align-items: center;\n  height: 400px;\n  background-color: rgb(20, 20, 20);\n}\n\n.join-section__container {\n  height: 70%;\n  text-align: center;\n  display: flex;\n  justify-content: space-evenly;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.join-section__container-title {\n  padding-top: 20px;\n  font-size: 23px;\n  padding-right: 5px;\n  padding-left: 5px;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n}\n\n.join-section__container-secondary-heading {\n  cursor: pointer;\n  color: white;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n.join-section-container__buttons {\n  width: 50%;\n  color: white;\n}\n\n.button-list-item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid white;\n  margin: 15px 0;\n  height: 50px;\n  text-decoration: none;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.button-list-item:hover {\n  background-color: white;\n  color: black;\n}\n\n/*------------------------------------*\\\n  #FOOTER SECTION\n\\*------------------------------------*/\n.footer-section {\n  margin: 0;\n  background-color: rgb(26, 26, 26);\n}\n\n.footer-section__list {\n  color: gray;\n  padding: 1em;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.footer-section__list-item {\n  cursor: pointer;\n  margin-bottom: 20px;\n  border-bottom: 1px solid gray;\n  letter-spacing: 2px;\n}", "",{"version":3,"sources":["webpack://./src/scss/main.scss","webpack://./src/scss/base/_base.scss","webpack://./src/scss/mixins/_mixins.scss","webpack://./src/scss/pages/_navbar.scss","webpack://./src/scss/variables/_colors.scss","webpack://./src/scss/pages/_hero_section.scss","webpack://./src/scss/pages/_arrivals_section.scss","webpack://./src/scss/pages/_articals.scss","webpack://./src/scss/pages/_sale_section.scss","webpack://./src/scss/pages/_about_section.scss","webpack://./src/scss/pages/_contact_section.scss","webpack://./src/scss/pages/_join_section.scss","webpack://./src/scss/pages/_footer.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Merriweather&family=Roboto:ital,wght@0,400;1,700&display=swap\");\r\n\r\n@import \"variables/colors\";\r\n\r\n@import \"base/base\";\r\n@import \"mixins/mixins\";\r\n@import \"pages/navbar\";\r\n@import \"pages/hero_section\";\r\n@import \"pages/arrivals_section\";\r\n@import \"pages/articals\";\r\n@import \"pages/sale_section\";\r\n@import \"pages/about_section\";\r\n@import \"pages/contact_section\";\r\n@import \"pages/join_section\";\r\n@import \"pages/footer\";\r\n","/*------------------------------------*\\\r\n  #BASE\r\n\\*------------------------------------*/\r\n* {\r\n  overflow-x: hidden;\r\n  margin: 0;\r\n  font-family: \"Roboto\";\r\n\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml::-webkit-scrollbar {\r\n  display: none;\r\n}\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n","/*------------------------------------*\\\r\n  #MIXINS\r\n\\*------------------------------------*/\r\n\r\n$sm: 640px;\r\n$md: 768px;\r\n$lg: 1024px;\r\n$xl: 1280px;\r\n$xxl: 1536px;\r\n\r\n@mixin xxl {\r\n  @media (min-width: #{$xxl}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin xl {\r\n  @media (min-width: #{$xl}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin lg {\r\n  @media (min-width:#{$lg}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin md {\r\n  @media (min-width: #{$md}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin sm {\r\n  @media (min-width: #{$sm}) {\r\n    @content;\r\n  }\r\n}\r\n","/*------------------------------------*\\\r\n  #NAVIGATION SECTION\r\n\\*------------------------------------*/\r\n\r\n.navbar {\r\n  color: $navbar-text-color;\r\n  background-color: $navbar-bg-color;\r\n  height: 10vh;\r\n  display: flex;\r\n  width: 100vw;\r\n  position: fixed;\r\n  z-index: 20;\r\n}\r\n\r\n.navbar-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.mobile-navbar-icon {\r\n  display: flex;\r\n  height: 100%;\r\n  width: 10%;\r\n  align-items: center;\r\n\r\n  @include xxl {\r\n    display: none;\r\n  }\r\n}\r\n.hamburger-icon {\r\n  height: 2px;\r\n  width: 30px;\r\n  background-color: white;\r\n  transition: background-color 0.5s ease-in-out;\r\n  &::after {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 2px;\r\n    width: 30px;\r\n    background-color: white;\r\n    transform: translateY(-10px);\r\n    transition: all 0.5s ease-in-out;\r\n  }\r\n\r\n  &::before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 2px;\r\n    width: 30px;\r\n    background-color: white;\r\n    transform: translateY(10px);\r\n    transition: all 0.5s ease-in-out;\r\n  }\r\n}\r\n\r\n.navbar-container__links {\r\n  display: none;\r\n  width: 40%;\r\n  justify-content: space-around;\r\n  @include xxl {\r\n    display: flex;\r\n  }\r\n}\r\n\r\n.navbar-container__links-list-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.navbar-container__links-list-item-link {\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  color: $navbar-link-color;\r\n  padding-bottom: 5px;\r\n  border-bottom: 2px solid transparent;\r\n  transition: border-bottom 0.5s ease-in-out;\r\n  &:hover {\r\n    border-bottom: 2px solid $navbar-link-hover-bottom-border-color;\r\n  }\r\n}\r\n/*------------------------------------*\\\r\n  #Mobile Menu\r\n\\*------------------------------------*/\r\n.navbar-container__mobile-menu {\r\n  top: 9vh;\r\n  left: 0;\r\n  width: 0;\r\n  height: 100vh;\r\n  flex-direction: column;\r\n  position: fixed;\r\n  z-index: 80;\r\n  background-color: $navbar-mobile-menu-bg-color;\r\n  transition: width 0.7s ease-in-out;\r\n}\r\n\r\n.navbar-container__mobile-links-list-item {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 40px;\r\n\r\n  opacity: 0;\r\n  transition: opacity 0.3s ease-in-out;\r\n\r\n  @include md {\r\n    font-size: 25px;\r\n  }\r\n}\r\n.navbar-container__mobile-links-list-item-link {\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  color: $navbar-mobile-menu-links-color;\r\n}\r\n\r\n.navbar__container-icons {\r\n  display: none;\r\n  width: 10%;\r\n}\r\n\r\n.navbar__container-icons-left-side {\r\n  width: 100%;\r\n  display: none;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.social-icons {\r\n  cursor: pointer;\r\n  &:hover {\r\n    color: $navbar-social-icons-color;\r\n  }\r\n}\r\n\r\n.navbar__container-mobile-menu-icon {\r\n  display: flex;\r\n}\r\n.nav-checkbox {\r\n  display: none;\r\n}\r\n\r\n.nav-checkbox:checked + .mobile-navbar-icon .hamburger-icon {\r\n  background-color: transparent;\r\n}\r\n\r\n.nav-checkbox:checked + .mobile-navbar-icon .hamburger-icon::after {\r\n  transform: rotate(45deg) translate(5px, -5px);\r\n}\r\n\r\n.nav-checkbox:checked + .mobile-navbar-icon .hamburger-icon::before {\r\n  transform: rotate(-45deg) translate(5px, 5px);\r\n}\r\n\r\n.nav-checkbox:checked ~ .navbar-container__mobile-menu {\r\n  width: 100vw;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.nav-checkbox:checked\r\n  ~ .navbar-container__mobile-menu\r\n  > .navbar-container__mobile-links-list-item {\r\n  opacity: 1;\r\n}\r\n\r\n.nav-checkbox:not(:checked) ~ .navbar-container__mobile-menu {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n","//Navbar\r\n$navbar-text-color: white;\r\n$navbar-bg-color: black;\r\n$navbar-link-color: white;\r\n$navbar-link-hover-bottom-border-color: white;\r\n$navbar-mobile-menu-bg-color: rgb(0, 0, 0);\r\n$navbar-mobile-menu-links-color: white;\r\n$navbar-social-icons-color: gray;\r\n\r\n//Hero Section Colors\r\n$color-hero-section__title-heading: white;\r\n$color-hero-section-main-link-text: white;\r\n\r\n// New Arrivals Colors\r\n$new-arrivals-bg-color: black;\r\n$new-arrivals__container-text-heading: white;\r\n$new-arrivals__container-link-color: white;\r\n\r\n//About Section Colors\r\n$gradiant-color-one: #0000;\r\n$gradiant-color-two: rgba(0, 0, 0, 0.949);\r\n$about-section__content-title: white;\r\n$about-section__content-paragraph: white;\r\n\r\n//Sale Section Colors\r\n$sale-section-main-heading: white;\r\n$sale-section-secondary-heading: white;\r\n$sale-section-list-text-color: white;\r\n\r\n//Contact Section Colors\r\n$contact-section-bg-color: black;\r\n$input-label-color: white;\r\n$form-name-input-color: white;\r\n$input-color-text-email: white;\r\n$input-bg-color: black;\r\n$input-border-color: white;\r\n$text-area-color: white;\r\n$text-area-bg-color: black;\r\n$text-area-border-color: white;\r\n$submit-btn-color: white;\r\n$submit-btn-bg-color: black;\r\n$submit-btn-border-color: white;\r\n$submit-hover-bg-color: white;\r\n$submit-hover-text-color: black;\r\n$contact-section__container-text-color: white;\r\n$contact-section__container-text-title-color: white;\r\n$contact-section__container-text-paragraph: white;\r\n\r\n// Footer Colors\r\n$footer-bg-color: rgb(26, 26, 26);\r\n$footer-list-text-color: gray;\r\n$footer-list-bottom-border-color: gray;\r\n\r\n//Fonts\r\n$h4-font: \"Merriweather\";\r\n","/*------------------------------------*\\\r\n  #HERO SECTION\r\n\\*------------------------------------*/\r\n.hero-section {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n}\r\n.hero-section__figure {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.hero-section__figure-picture-tag {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.hero-section__figure-image {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.hero-section__title {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.hero-section__title-heading {\r\n  text-align: center;\r\n  position: absolute;\r\n  font-size: 30px;\r\n  text-transform: uppercase;\r\n  color: $color-hero-section__title-heading;\r\n  letter-spacing: 10px;\r\n  top: 300px;\r\n\r\n  @include md {\r\n    top: 600px;\r\n  }\r\n}\r\n.hero-section__title-main-link {\r\n  text-decoration: none;\r\n}\r\n.link-text {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-size: 20px;\r\n  text-transform: uppercase;\r\n  color: $color-hero-section-main-link-text;\r\n  font-family: $h4-font;\r\n  font-weight: 100;\r\n\r\n  text-decoration: none;\r\n  height: 250px;\r\n}\r\n.arrow-down-icon {\r\n  transition: all 0.5s ease-in-out;\r\n  &:hover {\r\n    transform: translateY(20px);\r\n  }\r\n}\r\n","/*------------------------------------*\\\r\n  #NEW ARRIVALS SECTION\r\n\\*------------------------------------*/\r\n\r\n.new-arrivals {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n  background-color: $new-arrivals-bg-color;\r\n  @include xxl {\r\n    height: 100vh;\r\n    flex-direction: row;\r\n  }\r\n}\r\n\r\n.new-arrivals__container-text {\r\n  height: 50%;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n  @include md {\r\n    font-size: 30px;\r\n  }\r\n\r\n  @include xxl {\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n.new-arrivals__container-text-heading {\r\n  margin: 0;\r\n  text-transform: uppercase;\r\n  color: $new-arrivals__container-text-heading;\r\n  letter-spacing: 5px;\r\n}\r\n\r\n.new-arrivals__container-text-link {\r\n  text-decoration: none;\r\n  color: $new-arrivals__container-link-color;\r\n  text-transform: uppercase;\r\n  font-family: $h4-font;\r\n  font-weight: 100;\r\n}\r\n\r\n.new-arrivals__container-img {\r\n  height: 50%;\r\n  width: 100%;\r\n  object-fit: cover;\r\n  padding-bottom: 20px;\r\n\r\n  @include lg {\r\n    height: 100%;\r\n    padding-bottom: 0;\r\n  }\r\n  @include xxl {\r\n    height: 100%;\r\n    padding-bottom: 0;\r\n  }\r\n}\r\n","/*------------------------------------*\\\r\n  #ARTICALS SECTION\r\n\\*------------------------------------*/\r\n.articals-section {\r\n  height: 1100px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  background-color: black;\r\n\r\n  @include md {\r\n    height: 2000px;\r\n  }\r\n\r\n  @include lg {\r\n    flex-direction: row;\r\n    height: 500px;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  @include xxl {\r\n    flex-direction: row;\r\n    height: 500px;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n}\r\n.articals-section__picture {\r\n  height: 350px;\r\n  width: 100%;\r\n  overflow: hidden;\r\n\r\n  @include md {\r\n    height: 30%;\r\n  }\r\n  @include md {\r\n    height: 100%;\r\n  }\r\n  @include xxl {\r\n    height: 100%;\r\n  }\r\n}\r\n.articals-section__picture-img {\r\n  height: 100%;\r\n  width: 100%;\r\n  object-fit: cover;\r\n}\r\n","/*------------------------------------*\\\r\n  #SALE SECTION\r\n\\*------------------------------------*/\r\n\r\n.sale-section {\r\n  height: 1200px;\r\n  background-color: black;\r\n\r\n  @include md {\r\n    height: 1900px;\r\n  }\r\n\r\n  @include xxl {\r\n    height: 100vh;\r\n  }\r\n}\r\n\r\n.sale-section__container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  height: 100%;\r\n}\r\n.sale-section__container-text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 10%;\r\n\r\n  @include md {\r\n    font-size: 30px;\r\n  }\r\n}\r\n.sale-secation__container-text-main-heading {\r\n  text-transform: uppercase;\r\n  color: $sale-section-main-heading;\r\n  letter-spacing: 5px;\r\n}\r\n.sale-section__container-text-secondary {\r\n  text-transform: uppercase;\r\n  color: $sale-section-secondary-heading;\r\n  font-family: $h4-font;\r\n  font-weight: 100;\r\n  letter-spacing: 5px;\r\n}\r\n\r\n.sale-section__list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  padding: 0 1rem;\r\n  height: 80%;\r\n\r\n  @include xxl {\r\n    flex-direction: row;\r\n    height: 50%;\r\n  }\r\n}\r\n.sale-section__list-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 30%;\r\n  text-align: center;\r\n\r\n  .sale-section__list-item-link {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-decoration: none;\r\n    @include md {\r\n      align-items: center;\r\n    }\r\n  }\r\n\r\n  .sale-section__list-text {\r\n    text-transform: uppercase;\r\n    color: $sale-section-list-text-color;\r\n    letter-spacing: 2px;\r\n    height: 30%;\r\n    width: 100%;\r\n    font-size: 15px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    @include md {\r\n      font-size: 30px;\r\n    }\r\n  }\r\n\r\n  .sale-section__list-item-img {\r\n    height: 70%;\r\n    width: 100%;\r\n    object-fit: contain;\r\n\r\n    @include md {\r\n      height: 100%;\r\n      width: 100%;\r\n    }\r\n  }\r\n\r\n  @include xxl {\r\n    width: 30%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n}\r\n","/*------------------------------------*\\\r\n  #ABOUT SECTION\r\n\\*------------------------------------*/\r\n.about-section {\r\n  position: relative;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n.about-background-image {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  position: absolute;\r\n  object-fit: cover;\r\n  z-index: 1;\r\n}\r\n\r\n.about-section__content {\r\n  z-index: 2;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  background-image: linear-gradient($gradiant-color-one, $gradiant-color-two);\r\n  @include xxl {\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n.about-section__content-title {\r\n  font-weight: 100;\r\n  padding-bottom: 50px;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n  text-transform: uppercase;\r\n  color: $about-section__content-title;\r\n  letter-spacing: 5px;\r\n}\r\n\r\n.about-section__content-paragraph {\r\n  padding: 0;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n  text-transform: uppercase;\r\n  color: $about-section__content-paragraph;\r\n  letter-spacing: 2px;\r\n}\r\n","/*------------------------------------*\\\r\n  #CONTACT SECTION\r\n\\*------------------------------------*/\r\n.contact-section {\r\n  height: 1000px;\r\n  background-color: $contact-section-bg-color;\r\n}\r\n.contact-section__container {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n\r\n  @include md {\r\n    align-items: center;\r\n  }\r\n  @include xxl {\r\n    flex-direction: row-reverse;\r\n  }\r\n}\r\n\r\n.contact-section__container-form-inputs {\r\n  width: 100%;\r\n  height: 60%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0 1em 1em 1em;\r\n\r\n  @include xxl {\r\n    width: 50%;\r\n  }\r\n}\r\n.input-label {\r\n  margin-top: 5px;\r\n  margin-bottom: 20px;\r\n  font-weight: 100;\r\n  color: $input-label-color;\r\n  font-size: 20px;\r\n  overflow: hidden;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.contact-section__container-form-name-inputs {\r\n  color: $form-name-input-color;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.input-text,\r\n.input-email {\r\n  outline: none;\r\n  color: $input-color-text-email;\r\n  height: 40px;\r\n  background-color: $input-bg-color;\r\n  border: 1px solid $input-border-color;\r\n  font-size: 20px;\r\n}\r\n\r\n.contact-from-text-area {\r\n  outline: none;\r\n  color: $text-area-color;\r\n  background-color: $text-area-bg-color;\r\n  border: 1px solid $text-area-border-color;\r\n  font-size: 15px;\r\n}\r\n.submit-btn {\r\n  margin-top: 20px;\r\n  text-transform: uppercase;\r\n  color: $submit-btn-color;\r\n  letter-spacing: 5px;\r\n  background-color: $submit-btn-bg-color;\r\n  height: 50px;\r\n  border: 1px solid $submit-btn-border-color;\r\n  cursor: pointer;\r\n  &:hover {\r\n    background-color: $submit-hover-bg-color;\r\n    color: $submit-hover-text-color;\r\n  }\r\n}\r\n\r\n.contact-section__container-text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 30%;\r\n  padding: 1em 1em 0 1em;\r\n  color: $contact-section__container-text-color;\r\n\r\n  @include md {\r\n    width: 70%;\r\n  }\r\n\r\n  @include xxl {\r\n    width: 40%;\r\n  }\r\n}\r\n.contact-section__container-text-title {\r\n  font-weight: 100;\r\n  text-transform: uppercase;\r\n  color: $contact-section__container-text-title-color;\r\n  letter-spacing: 5px;\r\n}\r\n.contact-section__container-text-paragraph {\r\n  font-weight: 100;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  color: $contact-section__container-text-paragraph;\r\n  letter-spacing: 2px;\r\n}\r\n","/*------------------------------------*\\\r\n  #JOIN SECTION\r\n\\*------------------------------------*/\r\n.join-section {\r\n  display: flex;\r\n\r\n  align-items: center;\r\n  height: 400px;\r\n  background-color: rgb(20, 20, 20);\r\n}\r\n.join-section__container {\r\n  height: 70%;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n.join-section__container-title {\r\n  padding-top: 20px;\r\n  font-size: 23px;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n  color: white;\r\n  text-transform: uppercase;\r\n  letter-spacing: 5px;\r\n}\r\n.join-section__container-secondary-heading {\r\n  cursor: pointer;\r\n  color: white;\r\n  letter-spacing: 1px;\r\n\r\n  text-transform: uppercase;\r\n}\r\n\r\n.join-section-container__buttons {\r\n  width: 50%;\r\n\r\n  color: white;\r\n}\r\n\r\n.button-list-item {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 2px solid white;\r\n  margin: 15px 0;\r\n  height: 50px;\r\n  text-decoration: none;\r\n  color: white;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n\r\n  &:hover {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n}\r\n","/*------------------------------------*\\\r\n  #FOOTER SECTION\r\n\\*------------------------------------*/\r\n.footer-section {\r\n  margin: 0;\r\n  background-color: $footer-bg-color;\r\n}\r\n\r\n.footer-section__list {\r\n  color: $footer-list-text-color;\r\n  padding: 1em;\r\n  margin: 0;\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.footer-section__list-item {\r\n  cursor: pointer;\r\n  margin-bottom: 20px;\r\n  border-bottom: 1px solid $footer-list-bottom-border-color;\r\n  letter-spacing: 2px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");

var checkbox = document.querySelector(".nav-checkbox");

var closemenu = function closemenu() {
  checkbox.checked = false;
};
})();

/******/ })()
;
//# sourceMappingURL=bundleb312c81d0efe077da2e9.js.map