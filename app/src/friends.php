<nav id = "col-xs-3 col-md-3 col-lg-3 col-sm-3 friendsbuttons">
    <button title = "Friends List" id = "friendslistbutton" onclick = "appfriendslogin();" type = "button" class = "btn" data-toggle = "collapse" data-target = "#friendslist">
      <img src = "css/friendsicon.png" width = "30px" height = "30px">
    </button>
      <ul class = "collapse" id = "friendslist">
      </ul><br>
      <button title = "Friend Suggestions" id = "friendssuggestbutton" onclick = "applogin();" type = "button" class = "btn" data-toggle = "collapse" data-target = "#friendssuggest">
        <img width = "30px" height = "30px" src = "css/th.jpg">
      </button>
        <ul class = "collapse" id = "friendssuggest">
        </ul><br>
        <div id = "messages">
        <div class = "col-xs-3 col-md-3 col-lg-3 col-sm-3 sprite nosprite">
        </div><br><br><br><br><br><br><br><br>
          <div id = "message" class = "message"></div>
          <script>sunshinescroll()</script>
        </div>

</nav>
