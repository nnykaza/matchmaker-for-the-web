const thresholds = {
    threshold1: 50, 
    threshold2: 75,
};

const messages = {
    low: "Low compatibility",
    medium: "Moderate compatibility",
    high: "High compatibility",
};

const form = document.getElementById("matchForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const q1 = document.getElementById("q1").value;
    const q2 = document.getElementById("q2").value;


    const compatibilityScore1 = calculateCompatibility(q1);
    const compatibilityScore2 = calculateCompatibility(q2);

    // Calculate the total compatibility score
    const totalScore = (compatibilityScore1 + compatibilityScore2) / 2;

    // Display compatibility scores
    document.getElementById("score1").querySelector("span").textContent = getCompatibilityMessage(compatibilityScore1);
    document.getElementById("score2").querySelector("span").textContent = getCompatibilityMessage(compatibilityScore2);

    // Display the total compatibility score as a percentage
    document.getElementById("totalScore").querySelector("span").textContent = totalScore.toFixed(2);

    // Display a closing remark based on thresholds
    document.getElementById("closingRemark").textContent = getClosingRemark(totalScore);
});

function calculateCompatibility(answer) {
   
    return Math.floor(Math.random() * 101);
}

function getCompatibilityMessage(score) {
    if (score < thresholds.threshold1) {
        return messages.low;
    } else if (score < thresholds.threshold2) {
        return messages.medium;
    } else {
        return messages.high;
    }
}

function getClosingRemark(totalScore) {
]    if (totalScore < thresholds.threshold1) {
        return "We might want to work on our compatibility...";
    } else if (totalScore < thresholds.threshold2) {
        return "We have moderate compatibility...";
    } else {
        return "Marry me!";
    }
}
