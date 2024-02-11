fetch("https://opentdb.com/api.php?amount=17&category=10&difficulty=easy")
.then(response=>{
    if(!response.ok){
        throw new error ("Network response was not ok");
    }
    return response.json();
})
.then(data=> {
    if (Array.isArray(data.results)) {
        const div = document.createElement("div");
        div.classList.add("questions-container");
        data.results.forEach(question => {
        const questDiv = document.createElement("div");
        questDiv.classList.add("question");
        questDiv.innerHTML=`
        <p>Category: ${question.category}</p><br>
        <p>Correct Answer: ${question.correct_answer}</p><br>
        <p>Difficulty: ${question.difficulty}</p><br>
        <p>Incorrect Answers: ${question.incorrect_answers.join(', ')}</p><br>
        <p>Question: ${question.question}</p><br>
        <p>Type: ${question.type}</p><br>
        <hr>
        
        `
        div.appendChild(questDiv);
    });
     document.body.append(div);
    } else {
      throw new Error("Invalid data format: results is not an array");
    }
    
})
.catch(error=> {
    console.log("Error fetching data:", error);
})