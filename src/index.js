const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector("#searchByID")
        console.log(input.value);

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then((resp) => resp.json())
        .then((data) => {
            const title = document.querySelector("#movieDetails h4")
            const summary = document.querySelector("#movieDetails p")
            console.log(title)
            console.log(summary)
            title.innerText = data.title
            summary.innerText = data.summary
        })

    });
}

document.addEventListener('DOMContentLoaded', init);
