var rem = {
    html: document.documentElement,
    fn: function () {
        this.html.style.fontSize = this.html.clientWidth * 0.1 + 'px';
    },
}
rem.fn();
window.addEventListener('resize',rem.fn.bind(rem),false);