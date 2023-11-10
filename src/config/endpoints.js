// agent endpoints
const USER_LOGIN = "/admin/admin_account_login";
const GET_ALL_CLIENTS = "/offline-management/get_user_list";
const GET_REFFERAL_DATA = "/offline-management/get_refferal_data";
const GET_SETTLEMENT_HISTORY = "/offline-management/get_offline_settlement";
const GET_OFFLINE_CLIENTS = "/offline-management/get_clients_data";
const CREATE_OFFLINE_CLIENT = "/offline-management/create_client";
const GET_OFFLINE_CLIENT_DETAILS = "/offline-management/get_clientid_data";
const UPDATE_OFFLINE_CLIENT = "/offline-management/update_clients";
const GET_ALL_MATCHES = "/offline-management/get_matches_data";
const CREATE_OFFLINE_MATCH = "/offline-management/match_creation";
const GET_OFFLINE_ALL_MATCHES = "/offline-management/get_matches_data";
const GET_MATCH_POSITION_DATA = "/offline-management/match_position_get_data";
const CREATE_MATCH_ENTRY = "/offline-management/match_entry";
const GET_ACCOUNT_MATCHES_DATA =
  "/offline-management/get_registered_matches_data";
const GET_MATCH_ENTRY_DETAILS = "/offline-management/get_match_entry";
const UPDATE_MATCH_ENTRY = "/offline-management/update_match_entry";
const DELETE_MATCH_ENTRY = "/offline-management/delete_match_entry";
const MATCH_DECLARATION = "/offline-management/match_result";
const FANCY_ENTRY_DATA = "/offline-management/fancy_entry";
const FANCY_DECLARATION = "/offline-management/fancy_result";
const UPDATE_FANCY_ENTRY = "/offline-management/update_fancy_entry";
const GET_FANCY_ENTRY_DATA = "/offline-management/get_fancy_entry";
const DELETE_FANCY_ENTRY = "/offline-management/delete_fancy_entry";
const GET_FINANCIAL_STATEMENT_BY_DATE =
  "/offline-management/get_complete_matches";
const ACCOUNT_REGISTERATION = "/account_register";
const GET_ALL_PACKAGES = "/packages/get_packages";
const GET_ALL_MEETINGS = "/meetings/get_all_meetings";
const CREATE_PACKAGE_SUBSCRIPTION = "/packages/package_subsciption_ticket";
const OFFLINE_PAYMENT_SETTLEMENT =
  "/offline-management/offline_payment_settlement";
const GET_ONEPAGE_REPORT = "/offline-management/one_page_report";
const GET_UPDATED_MATCHES_DATA = "/offline-management/get_all_matches";
const GET_ALL_ADMINS = "/account_register/get_all_created_role_data";
const BLOCKUNBLOCK = "/offline-management/active_inactive_users";
const EDITPROFILE = "/admin/admin_profile_update_info";
const GET_USER_INFO = "/admin/get_admin_accounts_user_info";
const UPDATE_PROFILE = "/admin/admin_profile_update_info";
const GENERATE_SIGNED_URL = "/admin/profile_signed_url";
const GET_USER_MESSAGES = "/chat/get_user_messages";
const GET_INDUVISUAL_MATCH_REPORT =
  "/offline-management/get_match_resultsby_client_id";
const GET_INDUVISUAL_REFERRAL_BY =
  "/offline-management/get_individual_reportby_refferal";
const GET_INDUVISUAL_REPORTS = "/offline-management/get_individual_report";
const CREATE_REFFERAL = "/offline-management/create_refferal";
const GET_CALL_HISTORY = "/meetings/get_all_meetings";
const CREATE_CALL_SETTLEMENT = "/group_call/create_call_settlement";
const CREATE_CALL_STATEMENT = "/group_call/group_call_statement";
const CHANGE_PASSWORD = "/admin/change_password";
const UPDATE_USER_ADMIN = "/admin/update_user_admin";
const UPDATE_USER_CLIENT = "/admin/update_user_client";
const RISK_RUNNING_SESSION = "/offline-management/risk_running_session";
const ADD_PAYMENT = "/management/add_payment_gateway";
const GET_ALL_PAYMENT_GATEWAYS = "/management/getall_payments";
const UPDATE_PAYMENT_GATEWAY = "/management/update_payment_gateway";
const GET_REQUEST_PACKAGES =
  "/packages/get_package_histroy_bypackage_requestid";
const GET_ADMIN_PACKAGE_REQUEST = "/packages/get_all_admin_package_request";
const GET_COMPLETED_MATCHES_BY_CLEINT =
  "/offline-management/get_completed_matches_by_client_id";
const GET_REASON_REJECTIONS = "/settings/getall_security_questions";
const FANCY_RESULT_PROFIT_LOSS = "/offline-management/fancy_result_profitlose";
const GET_ADMIN_PACKAGES = "/packages/get_admin_packages";
const DELETE_OFFLINE_CLIENT = "/offline-management/delete_clients";
const PRIVACY_POLICY = "/management/get_policy_document";
const RESET_PASSWORD = "/admin/reset_password";
const GET_TOURS = "/tours/get_tours";

// methods
const DELETE = "DELETE";
const POST = "POST";
const GET = "POST";
const PUT = "PUT";

exports.GET_TOURS = {
  url:GET_TOURS,
  method: POST
}
exports.GET_COMPLETED_MATCHES_BY_CLEINT = {
  url: GET_COMPLETED_MATCHES_BY_CLEINT,
  method: POST,
};
exports.GET_UPDATED_MATCHES_DATA = {
  url: GET_UPDATED_MATCHES_DATA,
  method: POST,
};
exports.CREATE_REFFERAL = {
  url: CREATE_REFFERAL,
  method: POST,
};

exports.GET_INDUVISUAL_MATCH_REPORT = {
  url: GET_INDUVISUAL_MATCH_REPORT,
  method: GET,
};

exports.GET_INDUVISUAL_REFERRAL_BY = {
  url: GET_INDUVISUAL_REFERRAL_BY,
  method: GET,
};

exports.GET_INDUVISUAL_REPORTS = {
  url: GET_INDUVISUAL_REPORTS,
  method: GET,
};

exports.GET_ONEPAGE_REPORT = {
  url: GET_ONEPAGE_REPORT,
  method: POST,
};

exports.GET_USER_MESSAGES = {
  url: GET_USER_MESSAGES,
  method: POST,
};

exports.OFFLINE_PAYMENT_SETTLEMENT = {
  url: OFFLINE_PAYMENT_SETTLEMENT,
  method: POST,
};

exports.UPDATE_PROFILE = {
  url: UPDATE_PROFILE,
  method: POST,
};

exports.GENERATE_SIGNED_URL = {
  url: GENERATE_SIGNED_URL,
  method: POST,
};

exports.GET_FINANCIAL_STATEMENT_BY_DATE = {
  url: GET_FINANCIAL_STATEMENT_BY_DATE,
  method: POST,
};
exports.GET_USER_INFO = {
  url: GET_USER_INFO,
  method: POST,
};

exports.DELETE_FANCY_ENTRY = {
  url: DELETE_FANCY_ENTRY,
  method: DELETE,
};

exports.GET_FANCY_ENTRY_DATA = {
  url: GET_FANCY_ENTRY_DATA,
  method: POST,
};

exports.FANCY_DECLARATION = {
  url: FANCY_DECLARATION,
  method: POST,
};

exports.UPDATE_FANCY_ENTRY = {
  url: UPDATE_FANCY_ENTRY,
  method: POST,
};

exports.FANCY_ENTRY_DATA = {
  url: FANCY_ENTRY_DATA,
  method: POST,
};

exports.MATCH_DECLARATION = {
  url: MATCH_DECLARATION,
  method: POST,
};

exports.DELETE_MATCH_ENTRY = {
  url: DELETE_MATCH_ENTRY,
  method: DELETE,
};

exports.UPDATE_MATCH_ENTRY = {
  url: UPDATE_MATCH_ENTRY,
  method: POST,
};

exports.GET_MATCH_ENTRY_DETAILS = {
  url: GET_MATCH_ENTRY_DETAILS,
  method: POST,
};

exports.GET_ACCOUNT_MATCHES_DATA = {
  url: GET_ACCOUNT_MATCHES_DATA,
  method: POST,
};

exports.CREATE_MATCH_ENTRY = {
  url: CREATE_MATCH_ENTRY,
  method: POST,
};

exports.GET_OFFLINE_ALL_MATCHES = {
  url: GET_OFFLINE_ALL_MATCHES,
  method: POST,
};

exports.CREATE_OFFLINE_MATCH = {
  url: CREATE_OFFLINE_MATCH,
  method: POST,
};

exports.GET_ALL_MATCHES = {
  url: GET_ALL_MATCHES,
  method: POST,
};

exports.UPDATE_OFFLINE_CLIENT = {
  url: UPDATE_OFFLINE_CLIENT,
  method: POST,
};

exports.GET_OFFLINE_CLIENT_DETAILS = {
  url: GET_OFFLINE_CLIENT_DETAILS,
  method: POST,
};

exports.CREATE_OFFLINE_CLIENT = {
  url: CREATE_OFFLINE_CLIENT,
  method: POST,
};

exports.GET_OFFLINE_CLIENTS = {
  url: GET_OFFLINE_CLIENTS,
  method: POST,
};

exports.USER_LOGIN = {
  url: USER_LOGIN,
  method: POST,
};

exports.GET_ALL_CLIENTS = {
  url: GET_ALL_CLIENTS,
  method: POST,
};

exports.GET_REFFERAL_DATA = {
  url: GET_REFFERAL_DATA,
  method: POST,
};
exports.GET_SETTLEMENT_HISTORY = {
  url: GET_SETTLEMENT_HISTORY,
  method: POST,
};

exports.ACCOUNT_REGISTERATION = {
  url: ACCOUNT_REGISTERATION,
  method: POST,
};
exports.GET_ALL_PACKAGES = {
  url: GET_ALL_PACKAGES,
  method: POST,
};

exports.GET_ALL_MEETINGS = {
  url: GET_ALL_MEETINGS,
  method: POST,
};

exports.GET_ALL_ADMINS = {
  url: GET_ALL_ADMINS,
  method: POST,
};

exports.BLOCKUNBLOCK = {
  url: BLOCKUNBLOCK,
  method: POST,
};

exports.EDITPROFILE = {
  url: EDITPROFILE,
  method: POST,
};

exports.CHANGE_PASSWORD = {
  url: CHANGE_PASSWORD,
  method: POST,
};

exports.UPDATE_USER_ADMIN = {
  url: UPDATE_USER_ADMIN,
  method: POST,
};

exports.ADD_PAYMENT = {
  url: ADD_PAYMENT,
  method: POST,
};

exports.GET_ALL_PAYMENT_GATEWAYS = {
  url: GET_ALL_PAYMENT_GATEWAYS,
  method: POST,
};

exports.UPDATE_USER_CLIENT = {
  url: UPDATE_USER_CLIENT,
  method: POST,
};

exports.CREATE_PACKAGE_SUBSCRIPTION = {
  url: CREATE_PACKAGE_SUBSCRIPTION,
  method: POST,
};
exports.GET_MATCH_POSITION_DATA = {
  url: GET_MATCH_POSITION_DATA,
  method: POST,
};
exports.GET_CALL_HISTORY = {
  url: GET_CALL_HISTORY,
  method: POST,
};
exports.CREATE_CALL_SETTLEMENT = {
  url: CREATE_CALL_SETTLEMENT,
  method: POST,
};
exports.CREATE_CALL_STATEMENT = {
  url: CREATE_CALL_STATEMENT,
  method: POST,
};

exports.RISK_RUNNING_SESSION = {
  url: RISK_RUNNING_SESSION,
  method: GET,
};

exports.FANCY_RESULT_PROFIT_LOSS = {
  url: FANCY_RESULT_PROFIT_LOSS,
  method: POST,
};
exports.UPDATE_PAYMENT_GATEWAY = {
  url: UPDATE_PAYMENT_GATEWAY,
  method: POST,
};
exports.GET_REQUEST_PACKAGES = {
  url: GET_REQUEST_PACKAGES,
  method: POST,
};
exports.GET_ADMIN_PACKAGE_REQUEST = {
  url: GET_ADMIN_PACKAGE_REQUEST,
  method: POST,
};

exports.GET_REASON_REJECTIONS = {
  url: GET_REASON_REJECTIONS,
  method: POST,
};
exports.GET_ADMIN_PACKAGES = {
  url: GET_ADMIN_PACKAGES,
  method: GET,
};
exports.DELETE_OFFLINE_CLIENT = {
  url: DELETE_OFFLINE_CLIENT,
  method: POST,
};
exports.PRIVACY_POLICY = {
  url: PRIVACY_POLICY,
  method: GET,
};
exports.RESET_PASSWORD = {
  url: RESET_PASSWORD,
  method: POST,
};
