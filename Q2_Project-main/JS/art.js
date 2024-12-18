const paragraphs = document.querySelectorAll(".section_paragraph");

document.addEventListener("scroll", function () {
    paragraphs.forEach((paragraph) => {
        if (isInView(paragraph)) {
            paragraph.classList.add("section_paragraph--visible");
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 && rect.top < 
        (window.innerHeight - 50 || document.documentElement.clientHeight - 50)
    );
}