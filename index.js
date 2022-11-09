let iframe = document.getElementById('iframe');
iframe.addEventListener("load", () => {
    console.log(document.getElementById('iframe').contentWindow.document);
    console.log(document.getElementById('iframe').innerHTML);
});