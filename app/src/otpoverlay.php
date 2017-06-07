<div id = "otpform" class = "otpform">
  <div id = "centerform">
    <form method  = "POST" name = "otpform">
      <input type = "text" id = "mobile" name = "remobile" placeholder="Mobile"><br>
      <input type = "text" id = "otp" name = "OTP" placeholder="OTP"><br>
      <button type = "button" id = "otpbutton" onclick = "otpverify()">Verify Mobile</button>
      <button type = "button" id = "resendotp" onclick = "otpresend()">Resend OTP</button><br>
      <button type = "button" id = "otpcancel" onclick = "otpoverlayslideup()">Cancel</button>
    </form>
  </div>
</div>
