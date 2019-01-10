/* global XMLHttpRequest:true */

const RSS_URL =
  "https://cors-anywhere.herokuapp.com/https://feeds.pinboard.in/json/u:mahnouel/t:mahnouel.io/";

function get(url) {
  return new Promise(function(resolve, reject) {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };

    request.onerror = function(error) {
      console.log(error);
      reject(new Error("Network error"));
    };

    request.send();
  });
}

get(RSS_URL).then(data => {
  const json = JSON.parse(data);
  for (const key in json) {
    const item = json[key];

    const link = document.createElement("a");
    link.classList.add("link");
    link.setAttribute("href", item.u);
    link.innerHTML = item.d;

    const description = document.createElement("small");
    description.classList.add("link__description");
    description.innerHTML = `${item.n}`;

    const element = document.createElement("span");
    element.classList.add("etc__item");
    element.appendChild(link);
    // li.appendChild(document.createElement('br'))
    // element.appendChild(description)

    const container = document.querySelector(".js-etc");
    container.appendChild(element);
  }
  console.log(json);
});

<!-- Fathom - simple website analytics - https://github.com/usefathom/fathom -->
<script>
(function(f, a, t, h, o, m){
	a[h]=a[h]||function(){
		(a[h].q=a[h].q||[]).push(arguments)
	};
	o=f.createElement('script'),
	m=f.getElementsByTagName('script')[0];
	o.async=1; o.src=t; o.id='fathom-script';
	m.parentNode.insertBefore(o,m)
})(document, window, '//fathom.m-k.io/tracker.js', 'fathom');
fathom('set', 'siteId', 'IMSHL');
fathom('trackPageview');
</script>
<!-- / Fathom -->
 
