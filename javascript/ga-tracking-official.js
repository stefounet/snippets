/**
 * Google Analytics asynchronous setup code
 *
 * Official version (2011). A bit verbose, optimized for compatibility
 * with browsers (bypassing old browser quircks).
 */

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-XXXXXXXX-XX']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
