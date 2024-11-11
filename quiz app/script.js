// Define an array of quiz questions
const questions = [
    // Question 1
    {
      id: 1,
      question: "If pipe P can fill a tank in 15 hours and pipe N can empty it in 10 hours, how long will it take to fill the tank if both pipes are opened together?",
      options: ["30 hours", "52 hours", "10 hours", "24 hours"],
      answer: "30 hours",
      category: "Pipes and Cisterns",
    },
    // Question 2
    {
      id: 2,
      question: "Pipes P can fill a tank in 7 hours and pipes Q can empty it in 9 hours. How long will it take to fill the tank if both pipes are opened?",
      options: ["30 hours", "52 hours", "63 hours", "64 hours"],
      answer: "63 hours",
      category: "Pipes and Cisterns",
    },
    // Question 3
    {
      id: 3,
      question: "Pipe R can fill a cistern in 5 hours while pipe S can empty it in 7 hours. How long will it take to fill the cistern if both pipes are opened together?",
      options: ["30 hours", "35 hours", "50 hours", "48 hours"],
      answer: "35 hours",
      category: "Pipes and Cisterns",
    },
    // Question 4
    {
      id: 4,
      question: "Ten years ago, Alice was twice as old as Bob. If the sum of their ages is currently 60, how old are they now?",
      options: ["Alice is 40 years old and Bob is 20 years old", "Alice is 40 years old and Bob is 20 years old", "Alice is 45 years old and Bob is 30 years old", "Alice is 52 years old and Bob is 34 years old"],
      answer: "Alice is 40 years old and Bob is 20 years old",
      category: "Problem on Ages",
    },
    // Question 5
    {
      id: 5,
      question: "Sarah is three times as old as her son Jack. The sum of their ages is 36. How old are they?",
      options: ["Sarah is 37 years old and Jack is 19 years old", "Sarah is 27 years old and Jack is 9 years old", "Sarah is 17 years old and Jack is 8 years old", "Sarah is 47 years old and Jack is 5 years old"],
      answer: "Sarah is 27 years old and Jack is 9 years old",
      category: "Problem on Ages",
    },
    // Question 6
    {
      id: 6,
      question: "Five years from now, Mike's age will be twice as much as it was seven years ago. How old is Mike currently?",
      options: ["30 years old", "15 years old", "14 years old", "18 years old"],
      answer: "14 years old",
      category: "Problem on Ages",
    },
    // Question 7
    {
      id: 7,
      question: "Four years ago, Tom was four times as old as Kate. If the sum of their ages is 36 now, how old is Tom?",
      options: ["22 years old", "32 years old", "52 years old", "26 years old"],
      answer: "22 years old",
      category: "Problem on Ages",
    },
    // Question 8
    {
      id: 8,
      question: "Marry is twice as old as John. Five years ago, the sum of their ages was 36. How old is John now?",
      options: ["12 years old", "13 years old", "10 years old", "16 years old"],
      answer: "10 years old",
      category: "Problem on Ages",
    },
    // Question 9
    {
      id: 9,
      question: "Sam is 8 years older than Emily. The sum of their ages is 42. How old is Emily?",
      options: ["17 years old", "45 years old", "10 years old", "38 years old"],
      answer: "17 years old",
      category: "Problem on Ages",
    },
    // Question 10
    {
      id: 10,
      question: "In five years, Jake will be twice as old as Lisa. If the sum of their ages is 38 now, how old is Jack?",
      options: ["34 years old", "54 years old", "24 years old", "74 years old"],
      answer: "24 years old",
      category: "Problem on Ages",
    },
    // Question 11
    {
      id: 11,
      question: "Three years ago, Mike was twice as old as Ben. If the sum of their ages is 44, how old is Mike?",
      options: ["33 years old", "34 years old", "23 years old", "54 years old"],
      answer: "23 years old",
      category: "Problem on Ages",
    },
    // Question 12
    {
      id: 12,
      question: "Ten years from now, Bob will be twice as old as Carol. If the sum of their ages is 30, how old is Carol?",
      options: ["33 years old", "35 years old", "20 years old", "14 years old"],
      answer: "20 years old",
      category: "Problem on Ages",
    },
    // Question 13
    {
      id: 13,
      question: "Laura is four years younger than Susan. The sum of their ages is 50. How old is Susan?",
      options: ["23 years old", "35 years old", "27 years old", "24 years old"],
      answer: "27 year old",
      category: "Problem on Ages",
    },
    // Question 14
    {
      id: 14,
      question: "What is the probability of rolling a 6 on a fair six-sided die?",
      options: ["2/3", "3/4", "1/6", "2/6"],
      answer: "1/6",
      category: "Probability",
    },
    // Question 15
    {
      id: 15,
      question: "If you flip a fair coin, what is the probability of getting heads?",
      options: ["1/3", "1/2", "1/5", "1/6"],
      answer: "1/2",
      category: "Probability",
    },
    // Question 16
    {
      id: 16,
      question: "If you draw a card from a standard deck of 52 cards, what is the probability of drawing a red card?",
      options: ["1/4", "2/3", "1/2", "2/1"],
      answer: "1/2",
      category: "Probability",
    },
    // Question 17
    {
      id: 17,
      question: "What is the probability of drawing two aces in a row from a standard deck of 52 cards?",
      options: ["4/2652 or 1/663", "3/2654 or 2/633", "5/2752 or 5/683", "9/2652 or 0/663"],
      answer: "4/2652 or 1/663",
      category: "Probability",
    },
    // Question 18
    {
      id: 18,
      question: "What is the probability of randomly selecting a multiple of 5 from the numbers 1 to 20?",
      options: ["2/4", "3/4", "1/4", "2/6"],
      answer: "1/4",
      category: "Probability",
    },
    // Question 19
    {
      id: 19,
      question: "If you spin a spinner with 8 equal sections numbered 1 through 8, what is the probability of landing on an even number?",
      options: ["2/4", "3/4", "1/2", "2/6"],
      answer: "1/2",
      category: "Probability",
    },
    // Question 20
    {
      id: 20,
      question: "If you draw three cards without replacement from a standard deck of 52 cards, what is the probability that all three cards are hearts?",
      options: ["2/5525", "1/5525", "6/5525", "3/5425"],
      answer: "1/5525",
      category: "Probability",
    },
  ];
  
  // Get the container element from the HTML
  const container = document.getElementById("container");
  
  // Initialize variables for quiz state
  let questionCount = 0;
  let score = 0;
  let username = "";
  let attempt = 0;
  let correct = 0;
  let wrong = 0;
  let category = "";
  let categoryQuestions = [];
  
  // Function to get the username from the input field
  function getName(event) {
    username = document.getElementById("username").value;
    document.getElementById("welcome-note").innerHTML = `Welcome ${username}! You can start the quiz now`;
    event.preventDefault();
  }
  
  // Function to start the quiz
  function startQuiz(event) {
    if (username == "") {
      alert("Enter Your Name First");
      return;
    }
    score = 0;
    questionCount = 0;
    attempt = 0;
    correct = 0;
    wrong = 0;
    container.innerHTML = "";
  
    // Get the selected category
    category = event.target.value;
  
    // Create HTML for quiz display
    let containerHtmlStr = `
      <h3>${category}</h3>
      <div class="timer-score-div">
         <div id="timer-div">Timer</div>
         <div id="score">Score: ${score}</div>
      </div>
      <div id="question-div" class="question-div"></div>
      <div id="options-div"></div>
      <button class="next-button" id="nextButton" onclick="nextQuestion()" id="next-button">Next question</button>
      `;
    container.innerHTML = containerHtmlStr;
    displayQuestion(questionCount);
  }
  
  // Function to move to the next question
  function nextQuestion() {
    questionCount = questionCount + 1;
    if (questionCount < categoryQuestions.length) displayQuestion(questionCount);
    else {
      displayResult();
    }
  }
  
  // Variable to hold the timer
  let timer;
  
  // Function to display the question
  function displayQuestion(questionCount) {
    clearTimeout(timer);
    const questionDiv = document.getElementById("question-div");
  
    questionDiv.style.display = "block";
    questionDiv.innerHTML = "";
    categoryQuestions = questions.filter((question) => {
      return question.category === category;
    });
    questionDiv.innerHTML = categoryQuestions[questionCount].question;
  
    container.insertBefore(
      questionDiv,
      container.children[container.children.length - 1]
    );
  
    displayOptions(questionCount);
    const timerDiv = document.getElementById("timer-div");
    let timeLeft = 10;
    timer = setInterval(countDown, 1000);
    function countDown() {
      if (timeLeft == -1) {
        clearTimeout(timer);
        nextQuestion();
      } else {
        timerDiv.innerHTML = timeLeft;
        timeLeft = timeLeft - 1;
      }
    }
  }
  
  // Function to display options for the current question
  function displayOptions(questionCount) {
    const optionsDiv = document.getElementById("options-div");
  
    optionsDiv.style.display = "block";
    optionsDiv.innerHTML = "";
    categoryQuestions[questionCount].options.map((option) => {
      const optionButton = document.createElement("button");
      optionButton.innerHTML = option;
      optionButton.className = "option-button";
      optionButton.id = "option-button";
      optionButton.value = option;
      optionButton.onclick = function (event) {
        attempt = attempt + 1;
  
        if (event.target.value == categoryQuestions[questionCount].answer) {
  
          score = score + 1;
          correct = correct + 1;
          document.getElementById("score").innerHTML = `Score: ${score}`;
          document.getElementById("option-button").style.pointerEvents = "none";
          event.target.className = "correct-option";
        } else {
          wrong = wrong + 1;
          event.target.className = "wrong-option";
        }
        var optionButtons = document.getElementsByClassName("option-button");
        for (var i = 0; i < optionButtons.length; i++) {
          optionButtons[i].style.pointerEvents = "none";
        }
      };
      optionsDiv.appendChild(optionButton);
    });
  
    container.insertBefore(
      optionsDiv,
      container.children[container.children.length - 1]
    );
  }
  
  // Function to display the quiz result
  function displayResult() {
    container.innerHTML = "";
  
    let resultPage = `
          <h1>Quiz Result</h1>
          <p><b>${username}</b> Your result is:</p>
          <p>Total taken time</p>
          <p>Total questions: <b>${categoryQuestions.length}</b></p>
          <p>Attempt: <b>${attempt}</b></p>
          <p>Correct: <b>${correct}</b></p>
          <p>Wrong: <b>${wrong}</b></P>
          <P>Percentage: <b>${(correct / questions.length) * 100}%</b></p>
          <button id="restart-quiz-button" onclick="startQuiz(event)" value="${category}" class="next-button">Start again </button>
           <button id"home-button" onclick="loadHomepage()"  class="next-button">Go to Home page</button>
       `;
  
    container.innerHTML = resultPage;
  }
  
  // Function to reload the homepage
  function loadHomepage() {
    location.reload();
  }
  