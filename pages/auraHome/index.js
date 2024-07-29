

document.addEventListener("DOMContentLoaded", () => {

    function loadScript(url, callback) {
        const script = document.createElement("script");
        script.type = "text/javascript";

        // Проверяем, поддерживает ли браузер атрибут onload
        if (script.readyState) { // Для старых версий IE
            script.onreadystatechange = function() {
                if (script.readyState === "loaded" || script.readyState === "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { // Для всех других браузеров
            script.onload = function() {
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    loadScript("https://cdn.tripppleq.com/SplitText.min.js", function() {
        const textAll = document.querySelectorAll('.header-left-content-text');
        textAll.forEach(textItem => {
            gsap.set(textItem, { overflow: 'hidden' })
            const textItemSplit = new SplitText(textItem, {type: "lines"});

            gsap.from(textItemSplit.lines, {
                duration: 0.4,
                y: 50,
                ease: "circ",
                stagger: 0.1
            });
        });
    });


});
