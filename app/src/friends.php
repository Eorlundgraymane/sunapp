<nav id = "col-xs-3 col-md-3 col-lg-3 col-sm-3 friendsbuttons">
    <button class = "btn" title = "Friends List" id = "friendslistbutton" onclick = "appfriendslogin();" type = "button"= data-toggle = "collapse" data-target = "#friendslist">
      <img class = "img-rounded" src = "css/friendsicon.png" width = "50px" height = "40px">
    </button>
    <div id = "friendslistdiv">
      <ul class = "collapse" id = "friendslist">
      </ul>
    </div><br>
      <button class = "btn" title = "Friend Suggestions" id = "friendssuggestbutton" onclick = "applogin();" type = "button" data-toggle = "collapse" data-target = "#friendssuggest">
        <img class = "img-rounded" width = "50px" height = "50px" src = "css/th.jpg">
      </button>
      <div id = "friendssuggestdiv">
        <ul class = "collapse" id = "friendssuggest">
        </ul>
      </div><br>
        <div id = "messages">
        <div class = "col-xs-3 col-md-3 col-lg-3 col-sm-3 sprite nosprite">
        </div><br><br><br><br><br><br><br><br>
          <div id = "message" class = "message"></div>
          <script>sunshinescroll()</script>
        </div>

</nav>
