const header = document.body.getElementsByTagName("header")[0];
header.innerHTML= `
<header>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
    <div class="inner clearfix margin10" style="display: flex;">
        <div id="header-left">
        <a href="index.html" class="link" style="font-style: italic;">
        Hyangsu.Shin</a>
        </div>
        <div id="header-right">
            <ul class="bookmark">
                <li><a href="aboutme.html" class="link">About Me</a></li>
                <li><a href="portfolio.html" class="link">PortFolio</a></li>
                <li><a href="resume.html" class="link">Resume</a></li>
            </ul>
        </div>
    </div>
</header>
`