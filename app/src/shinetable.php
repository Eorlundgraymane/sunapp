<row>
  <div class = "col-lg-9 col-md-9 col-sm-9 col-xs-9" id = "shinetoggles">
  <button  title = "Shinetable" class = "btn" onclick = "refreshscore();" id = "shinetablebutton" type = "button" data-toggle = "collapse" data-target = "#shinetablediv">
  <img width = "50px" height = "50px" src = "css/table.png">
</button>
<button  title = "Leaderboards" class = "btn" onclick = "goleads();" id = "leaderboardsbutton" type = "button">
  <img width = "50px" height = "50px" src = "css/trophy.png">
</button>
</div>
</row>
<row>
  <div class = "collapse col-lg-9 col-md-9 col-sm-9 col-xs-9" id = "shinetablediv">
  <table id = "shinetable" class = "table table-responsive">
   <tr>
     <td id = "friendshine">_</td>
     <td id = "earthshine">_</td>
     <td id = "charityshine">_</td>
     <td id = "healthshine">_</td>
     <td id = "socialshine">_</td>
     <td id = "score">_</td>
   </tr>
   <tr>
     <td><img class = "shineicon img-responsive" src  = "css/generated/friend.svg" alt ="Friend Icon"></td>
     <td><img class = "shineicon img-responsive" src  = "css/generated/earth.svg" alt ="Earth Icon"></td>
     <td><img class = "shineicon img-responsive" src  = "css/generated/charity.svg" alt ="Charity Icon"></td>
     <td><img class = "shineicon img-responsive" src  = "css/generated/health.svg"  alt ="Health Icon"></td>
     <td><img class = "shineicon img-responsive" src  = "css/generated/family.svg" alt ="Family Icon"></td>
     <td><img id = "scoreshine" class = "shineicon img-responsive" src  = "css/generated/shine.svg" alt ="Family Icon"></td>
   </tr>
   <tr>
     <th>Friendshine</th><th>Earthshine</th><th>Charityshine</th><th>Healthshine</th><th>Socialshine</th><th>Shine</th>
   </tr>
 </table>
</div>
</row>
