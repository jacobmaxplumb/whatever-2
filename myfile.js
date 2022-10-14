function sayHello() {
    const text = document.getElementById('my-text').value;
    const title = document.getElementById('title');
    title.textContent = text;
    document.getElementById('my-text').value = '';
}