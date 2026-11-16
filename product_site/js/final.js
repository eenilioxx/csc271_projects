function saveDate() {
    var finaldate = document.getElementById('datepicker');
    if (finaldate) {
        finaldate.addEventListener('submit', function(event) {
            var datepicking = document.getElementById('datepicking').value;
            localStorage.setItem('userSubmission1', datepicking);
        });
    }
}

function showDate() {
    var datepicked = document.getElementById('datepicked');
    if (datepicked) {
        var savedDate = localStorage.getItem('userSubmission1');
        if (savedDate) {
            datepicked.textContent = savedDate;
        }
    }
}

function saveConditions() {
    var finalconditions = document.getElementById('conditionspicker');
    if (finalconditions) {
        finalconditions.addEventListener('submit', function(event) {
            var conditionspicking = document.querySelector('input[name="climate"]:checked').value;
            localStorage.setItem('userSubmission2', conditionspicking);
        });
    }
}

function showConditions() {
    var conditionspicked = document.getElementById('conditionspicked');
    if (conditionspicked) {
        var savedConditions = localStorage.getItem('userSubmission2');
        if (savedConditions) {
            conditionspicked.textContent = savedConditions;
        }
    }
}

function saveAccom() {
    var finalaccom = document.getElementById('accompicker');
    if (finalaccom) {
        finalaccom.addEventListener('submit', function(event) {
            var accompicking = document.querySelector('input[name="accom"]:checked').value;
            localStorage.setItem('userSubmission3', accompicking);
        });
    }
}

function showAccom() {
    var accompicked = document.getElementById('accompicked');
    if (accompicked) {
        var savedaccom = localStorage.getItem('userSubmission3');
        if (savedaccom) {
            accompicked.textContent = savedaccom;
        }
    }
}

//I had to google how to do this part T^T
window.addEventListener('DOMContentLoaded', () => {
    saveDate();
    showDate();
    saveConditions();
    showConditions();
    saveAccom();
    showAccom();
});