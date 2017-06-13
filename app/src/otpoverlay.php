<div id = "otpform" class = "otpform">
  <div id = "centerform">
    <form class = "form-horizontal" method  = "POST" name = "otpform">
      <div class = "input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-phone"></i><span>
      <input type = "text" id = "mobile" name = "remobile" placeholder="Mobile"><br>
    </div>
      <div class = "input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i><span>
      <input type = "text" id = "otp" name = "OTP" placeholder="OTP"><br>
    </div>
      <button class = "btn" type = "button" id = "otpbutton" onclick = "otpverify()">Verify Mobile</button>
      <button class = "btn" type = "button" id = "resendotp" onclick = "otpresend()">Resend OTP</button><br>
      <button class = "btn" type = "button" id = "otpcancel" onclick = "otpoverlayslideup()">Cancel</button>
    </form>
  </div>
</div>
