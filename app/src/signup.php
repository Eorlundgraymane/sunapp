<div id  = "signupdiv">
<form methhod = "POST" name = "signup" id = "signup">
  <input type = "text" name = "fname" id = "fname" placeholder="First Name" onchange = "updateusername()">
  <input type = "text" name = "lname" id  = "lname" placeholder="Last Name" onchange = "updateusername()"><br>
  <input type = "text" name = "uname" id = "uname" placeholder="Username" disabled="true"><br>
  <input type = "text" name = "email" id = "email" placeholder="Email ID"><br>
  <input type = "text" name = "mobile"id = "mob" placeholder="Mobile"><br>
  <select onchange = "checkfeb()" name = "day" id = "day">
    <option value = "00">Day</option>
    <option value = "01">1</option>
    <option value = "02">2</option>
    <option value = "03">3</option>
    <option value = "04">4</option>
    <option value = "05">5</option>
    <option value = "06">6</option>
    <option value = "07">7</option>
    <option value = "08">8</option>
    <option value = "09">9</option>
    <option value = "10">10</option>
    <option value = "11">11</option>
    <option value = "12">12</option>
    <option value = "13">13</option>
    <option value = "14">14</option>
    <option value = "15">15</option>
    <option value = "16">16</option>
    <option value = "17">17</option>
    <option value = "18">18</option>
    <option class = "yearclass" value = "19">19</option>
    <option value = "20">20</option>
    <option value = "21">21</option>
    <option value = "22">22</option>
    <option value = "23">23</option>
    <option value = "24">24</option>
    <option value = "25">25</option>
    <option value = "26">26</option>
    <option value = "27">27</option>
    <option value = "28">28</option>
    <option value = "29">29</option>
    <option value = "30">30</option>
    <option value = "31">31</option>
  </select>
  <select onchange = "checkleap()" name = "month" id = "month">
    <option value = "00">Month</option>
    <option value = "01">January</option>
    <option value = "02">February</option>
    <option value = "03">March</option>
    <option value = "04">April</option>
    <option value = "05">May</option>
    <option value = "06">June</option>
    <option value = "07">July</option>
    <option value = "08">August</option>
    <option value = "09">September</option>
    <option value = "10">October</option>
    <option value = "11">November</option>
    <option value = "12">December</option>
  </select>
  <select name = "year" id = "year">
    <option value = "0000">Year</option>
    <option class = "yearclass" value = "1937">1937</option>
    <option class = "yearclass" value = "1938">1938</option>
    <option class = "yearclass" value = "1939">1939</option>
    <option class = "yearclass" value = "1940">1940</option>
    <option class = "yearclass" value = "1941">1941</option>
    <option class = "yearclass" value = "1942">1942</option>
    <option class = "yearclass" value = "1943">1943</option>
    <option class = "yearclass" value = "1944">1944</option>
    <option class = "yearclass" value = "1945">1945</option>
    <option class = "yearclass" value = "1946">1946</option>
    <option class = "yearclass" value = "1947">1947</option>
    <option class = "yearclass" value = "1948">1948</option>
    <option class = "yearclass" value = "1949">1949</option>
    <option class = "yearclass" value = "1950">1950</option>
    <option class = "yearclass" value = "1951">1951</option>
    <option class = "yearclass" value = "1952">1952</option>
    <option class = "yearclass" value = "1953">1953</option>
    <option class = "yearclass" value = "1954">1954</option>
    <option class = "yearclass" value = "1955">1955</option>
    <option class = "yearclass" value = "1956">1956</option>
    <option class = "yearclass" value = "1957">1957</option>
    <option class = "yearclass" value = "1958">1958</option>
    <option class = "yearclass" value = "1959">1959</option>
    <option class = "yearclass" value = "1960">1960</option>
    <option class = "yearclass" value = "1961">1961</option>
    <option class = "yearclass" value = "1962">1962</option>
    <option class = "yearclass" value = "1963">1963</option>
    <option class = "yearclass" value = "1964">1964</option>
    <option class = "yearclass" value = "1965">1965</option>
    <option class = "yearclass" value = "1966">1966</option>
    <option class = "yearclass" value = "1967">1967</option>
    <option class = "yearclass" value = "1968">1968</option>
    <option class = "yearclass" value = "1969">1969</option>
    <option class = "yearclass" value = "1970">1970</option>
    <option class = "yearclass" value = "1971">1971</option>
    <option class = "yearclass" value = "1972">1972</option>
    <option class = "yearclass" value = "1973">1973</option>
    <option class = "yearclass" value = "1974">1974</option>
    <option class = "yearclass" value = "1975">1975</option>
    <option class = "yearclass" value = "1976">1976</option>
    <option class = "yearclass" value = "1977">1977</option>
    <option class = "yearclass" value = "1978">1978</option>
    <option class = "yearclass" value = "1979">1979</option>
    <option class = "yearclass" value = "1980">1980</option>
    <option class = "yearclass" value = "1981">1981</option>
    <option class = "yearclass" value = "1982">1982</option>
    <option class = "yearclass" value = "1983">1983</option>
    <option class = "yearclass" value = "1984">1984</option>
    <option class = "yearclass" value = "1985">1985</option>
    <option class = "yearclass" value = "1986">1986</option>
    <option class = "yearclass" value = "1987">1987</option>
    <option class = "yearclass" value = "1988">1988</option>
    <option class = "yearclass" value = "1989">1989</option>
    <option class = "yearclass" value = "1990">1990</option>
    <option class = "yearclass" value = "1991">1991</option>
    <option class = "yearclass" value = "1992">1992</option>
    <option class = "yearclass" value = "1993">1993</option>
    <option class = "yearclass" value = "1994">1994</option>
    <option class = "yearclass" value = "1995">1995</option>
    <option class = "yearclass" value = "1996">1996</option>
    <option class = "yearclass" value = "1997">1997</option>
    <option class = "yearclass" value = "1998">1998</option>
    <option class = "yearclass" value = "1999">1999</option>
		</select><br>
  <!--<input type = "date" name = "dob" id = "dob"><br><br> Rendered Obsolete-->
  <input type = "password" name = "password" id = "pass" placeholder="Password"><br>
  <input type = "password" name = "confpass" id = "confpass" placeholder="Retype Password" onkeypress() ="comparepass();" onkeyup="comparepass();">
  <div id = "passlabel">Passwords not matched</div>
  <div id = "conflabel">Passwords Matched!</div><br>
  <button id = "signupbuttn" onclick = "popalert();" type = "button">Sign Up</button>
  <button id = "otpready" type = "button" onclick="otpoverlaydropdown();">Already received OTP</button>
  <!--<button id = "updateuser" type = "button" onclick="updatemyusers();">Check Update Query</button>!-->
</form>
</div>
