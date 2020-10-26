const host =
  process.env.NODE_ENV == "development"
    ? "http://localhost:5000/api/"
    : "http://159.89.89.127:5000/api/";
const baseUrl =
  process.env.NODE_ENV == "development"
    ? "http://localhost:5000/api/"
    : "http://159.89.89.127:5000/api/";
const recaptchaKey = "6LdM-dYZAAAAAJ8W7mLb8l-AJ4UGWHjUUQbD1he2"; //shouldn't be here
const recaptchaSecret = "6LcZFewUAAAAAEMwQ7Q4eCOm5L2NyFsG-ij2CR3w"; //this too
const site_key = "6LeT9dYZAAAAAEgB0sMkx_-d07xf3NZ4mpvpI50T";
const my_secret_key = "6LdX7tYZAAAAAM2B26nnpTDUUPNsGh6UctMKdCbm";
const Colors = {
  appBackground: "#FFF5F4",
  appRed: "#FC636B",
  appGreen: "#3BE8B0",
  appOrange: "#FFB900",
  appBlue: "#0E2DD6",
  appBlack: "#707070",
  active: "#349EE8",
  navItems: "#3A3A3A",
};

const Routes = {
  // onBoarding Process
  register: host + "users/register",
  mailVerification: host + "users/verifyEmail/", //token must be appended
  regenerateEmailToken: host + "users/regenerateEmailVerificationToken",
  forgetPassword: host + "users/forgotPassword/",
  reset_password: host + "users/resetPassword/",  //token must be appended
  login: host + "users/login",
  newsLetter: host + "users/newsletter_subscription",
  user_home: host + "users/home",
  user_profile: host + "users/profile", //requires token in the header
  newsLetter: host + 'newsletter',

  //...........................................................................................//
  //...........................................................................................//
  // vendor services
  // if you see token is required, here is a short note on how ho go about it 
  //...........................................................................................//
  //  it uses Authorization as the key and `Bearer: ${token}` as the value
  // headers : {
  //   'Authorization' : `Bearer: ${token}`
  // }
   //...........................................................................................//


  createService: host + "services/create",
  get_services_by_current_vendor: host + "services/myServices", // id token is required. 
  get_all_services_listed_by_vendors: host + "services/myServices", // it requires a token,
  get_single_service_details: host + "services/", //  id must be appended. it also requires a token
  update_service_vendor: host + "services/", // id and token are vrequired
  delete_service_vendor: host + "services/delete/", // id and token are required
  create_discount_token_vendor: host + "discountTokens/services/create",
  list_all_tokens_vendor: host + "discountTokens/services/myTokens",
  update_token_vendor: host + "discountTokens/services/", //id and token
  discount_token_details_vendor: host + "discountTokens/services/", //id and token
  delete_discount_token_vendor: host + "discountTokens/services/", //id and token

  //...........................................................................................//
  //...........................................................................................//

  createEvent: host + "events"

};

const Actions = {
  show: "SHOW",
  hide: "HIDE",
  navigate: "NAVIGATE",
  collapse: "COLLAPSE",
  switchTab: "SWITCHTAB",
};

export { Colors, Actions, Routes, baseUrl, recaptchaKey, site_key };
