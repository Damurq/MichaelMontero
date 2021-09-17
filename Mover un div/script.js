const el = document.querySelector('div');
el.addEventListener('mousedown', e => {
    if (e.buttons !== 1) return;
    const { offsetX, offsetY } = e;

    const controller = new AbortController();

    window.addEventListener('mousemove', e => {
        if (e.buttons !== 1) return;
        el.style.left = e.pageX - offsetX + 'px';
        el.style.top = e.pageY - offsetY + 'px';
    }, { signal: controller.signal });

    window.addEventListener('mouseup', e => {
        if (e.buttons & 1) return;
        controller.abort();
    }, { signal: abortController.signal });
});
