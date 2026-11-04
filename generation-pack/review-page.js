<script>
document.addEventListener('click',function(e){var t=e.target.closest('button[data-i]');if(!t)return;var i=t.getAttribute('data-i'),pre=document.getElementById('p'+i),done=document.getElementById('d'+i);
function sel(){var r=document.createRange();r.selectNodeContents(pre);var s=getSelection();s.removeAllRanges();s.addRange(r);done.textContent='Selected, press copy';done.hidden=false}
try{navigator.clipboard.writeText(pre.textContent).then(function(){done.textContent='Copied';done.hidden=false},sel)}catch(x){sel()}});
</script>