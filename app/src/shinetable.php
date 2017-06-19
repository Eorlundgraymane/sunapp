<button  class = "btn" onclick = "refreshscore();" id = "shinetablebutton" type = "button" data-toggle = "collapse" data-target = "#shinetablediv">
  Your Shine Table
</button>
<button  class = "btn" onclick = "goleads();" id = "leaderboardsbutton" type = "button">
  Leaderboards
</button>
<div id = "shinetablediv" class = "collapse">
  <table id = "shinetable" class = "table table-responsive">
   <tr>
     <td id = "friendshine">0</td>
     <td id = "earthshine">0</td>
     <td id = "charityshine">0</td>
     <td id = "healthshine">0</td>
     <td id = "socialshine">0</td>
     <td id = "score">0</td>
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
