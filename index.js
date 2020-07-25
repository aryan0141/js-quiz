let options = document.querySelectorAll("label");
let question_title = document.getElementById("question-title");
let next = document.getElementById("next");
let rbs = document.querySelectorAll('input[name="answers"]');
// console.log(rbs[1])
let count = 1;
let earned_marks = 0;
let questions = {
    1: "What is capital of India",
    2: "What is capital of Russia",
    3: "What is capital of USA",
    4: "What is capital of France"
};
let answers = {
    1: ["Agra", "New Delhi", "Kanpur", "Indore"],
    2: ["Kostroma", "Samara", "Kazan", "Moscow"],
    3: ["Washington","Newyork","Chicago","Boston"],
    4: ["Nice","Paris","Lyon","Toulouse"],
};

let correct = ["New Delhi","Moscow","Washington","Paris"];
// console.log(Object.keys(questions).length)
function changequestion() {
    let rbs = document.querySelectorAll('input[name="answers"]');
    // console.log(rbs)
    // let selected_answer = document.querySelectorAll("label");
    // console.log(rbs)
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            // console.log(rb.innerHTML)
            selectedValue = rb.value;
            // console.log(selectedValue)
            // console.log(correct[count-2])
            if (selectedValue == correct[count - 1]) {
                earned_marks += 5;
                console.log(earned_marks)
            }
            rb.checked = false;
            break;
        }
        // console.log(rb.innerText)
    }


    if (count <= Number(Object.keys(questions).length)) {

        question_title.innerText = count + " ) " + questions[count];
        let arr = answers[count];
        // console.log(arr)
        for (let index = 0; index < arr.length; index++) {
            options[index].innerText = arr[index];
            rbs[index].setAttribute("value", arr[index]);

            // console.log(options[index].innerText)

        }
        count++;
    }
    else {
        document.body.innerHTML = `<h1 style="text-align:center;">You got ${earned_marks} marks and refresh the page for again.</h1>`

    }
}
next.addEventListener("click", changequestion);
// console.log(question_title.innerText)
// console.log(options[0].innerText)