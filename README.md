# Mini Project - Student Management

/login:
/admin: layout

/admin/*
feature: /admin/dashboard
feature: /admin/students

auth
- login
- sign up / register
- forget password

CLICK LOGIN
- Call API to login
- Success --> redirect ADMIN
- Failed --> show ERROR

LOGIN
LOGOUT

authSaga

LOOP
- if logged in, watch LOGOUT
- else watch LOGIN

LOGIN
- call login API to get toke + user info
- set token to local storage
- redirect to admin page

LOGOUT
- clear token from local storage
- redirect to login page

authSlice
authSaga