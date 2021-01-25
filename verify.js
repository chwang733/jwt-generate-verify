'use strict';
const fs = require('fs');
const jwt = require('jsonwebtoken');
var privateKEY  = fs.readFileSync('./private.key', 'utf8');
var publicKEY  = fs.readFileSync('./public.key', 'utf8');

var i  = 'Mysoft corp';   
var s  = 'some@user.com';   
var a  = 'http://mysoftcorp.in';
var token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhMSI6IkRhdGEgMSIsImRhdGEyIjoiRGF0YSAyIiwiZGF0YTMiOiJEYXRhIDMiLCJkYXRhNCI6IkRhdGEgNCIsImlhdCI6MTYxMTUyMDc4OCwiZXhwIjoxNjE5Mjk2Nzg4LCJhdWQiOiJodHRwOi8vbXlzb2Z0Y29ycC5pbiIsImlzcyI6Ik15c29mdCBjb3JwIiwic3ViIjoic29tZUB1c2VyLmNvbSJ9.RNWlfQeRpTWZ4nMWRyDtwVdB0EVIoVi6UeQ8lbir7dj5T-apgDSFbykgHRwFtPihhZ6jG1x_WpXeNEnj_WxI-bvqS-LEllLIa10Gi60KV_nM8P67iykMn-W2kdhdTJPpSLSFp7Sqpb7mVtjBh1f4LEeqYXLXqMeJUbRNUM2qekk";
console.log("Token :" + token);
/*
 ====================   JWT Verify =====================
*/
var verifyOptions = {
 issuer:  i,
 subject:  s,
 audience:  a,
 algorithm:  ["RS256"]
};
var legit = jwt.verify(token, publicKEY, verifyOptions);
console.log("\nJWT verification result: " + JSON.stringify(legit));