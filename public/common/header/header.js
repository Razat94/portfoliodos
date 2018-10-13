window.addEventListener("resize", reSize);
		
		function reSize() {
			if ( window.innerWidth > 700 && document.getElementById("sidenav").style.display == "inline-block" ) {
				document.getElementById("sidenav").style.display = "none";
				document.getElementById("hamburgerIcon").classList.toggle("change");
				document.getElementById("header").style.position = "static";
			}
		}
	
		function Navigation() {
			document.getElementById("hamburgerIcon").classList.toggle("change");
	
			if (document.getElementById("hamburgerIcon").classList.contains("change")) {
				document.getElementById("sidenav").style.display = "inline-block";
				//document.getElementById("hamburgerIcon").style.position = "fixed";
				document.getElementById("header").style.position = "fixed";
			}
			else {
			document.getElementById("sidenav").style.display = "none";
			//document.getElementById("hamburgerIcon").style.position = "relative";
			document.getElementById("header").style.position = "static";
			}
		}