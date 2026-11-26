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

function setupHoverButtons() {
    var table = document.getElementById("vacationtable");
    var emailSection = document.getElementById("emailsection");
    var emailForm = document.getElementById("emailform");
    var emailInput = document.getElementById("emailinput");
    var emailCancel = document.getElementById("emailcancel");
    var selectedRow = null;

    if (!table) {
        return;
    }

    table.addEventListener('click', function(event) {
        var clicked = event.target;
        var row = clicked.closest(".vacationrow");

        if (!row) {
            return;
        }

        // Trashcan: delete data and clear localStorage
        if (clicked.classList.contains("trashicon")) {
            localStorage.removeItem('userSubmission1');
            localStorage.removeItem('userSubmission2');
            localStorage.removeItem('userSubmission3');

            if (table.rows.length > 2) {
                row.remove();
            } else {
                var cells = row.getElementsByClassName("Finaltable");
                cells[0].innerHTML = '<span id = "datepicked">Not Selected Yet...</span>';
                cells[1].innerHTML = '<span id = "conditionspicked">Not Selected Yet...</span>';
                cells[2].innerHTML = '<span id = "accompicked">Not Selected Yet</span>';
                cells[3].innerHTML = '<span id = "pricepicked">Not Accumulated Yet</span>';
            }
        }

        // Plus: create another vacation section (row)
        if (clicked.classList.contains("plusicon")) {
            var newRow = row.cloneNode(true);
            var cells = newRow.getElementsByClassName("Finaltable");

            cells[0].innerHTML = "<span>Not Selected Yet...</span>";
            cells[1].innerHTML = "<span>Not Selected Yet...</span>";
            cells[2].innerHTML = "<span>Not Selected Yet</span>";
            cells[3].innerHTML = "<span>Not Accumulated Yet</span>";

            table.appendChild(newRow);
        }

        // Rocketship: pop up the email section and remember which row was clicked
        if (clicked.classList.contains("rocketicon")) {
            selectedRow = row;
            if (emailSection) {
                emailSection.style.display = "block";
                emailInput.focus();
            }
        }
    });

    // Submit button: send the remembered row's details to the entered email
    if (emailForm) {
        emailForm.addEventListener('submit', function(event) {
            event.preventDefault();
            var email = emailInput.value;

            if (email && selectedRow) {
                var cells = selectedRow.getElementsByClassName("Finaltable");
                var bodyText = "Date (Milky Way): " + cells[0].innerText + "%0D%0A" +
                               "Weather Conditions: " + cells[1].innerText + "%0D%0A" +
                               "Accomodations: " + cells[2].innerText + "%0D%0A" +
                               "Price: " + cells[3].innerText;

                window.location.href = "mailto:" + email + "?subject=My Dream Vacation&body=" + bodyText;
                emailSection.style.display = "none";
                emailInput.value = "";
            }
        });
    }

    // Cancel button: hide the email section
    if (emailCancel) {
        emailCancel.addEventListener('click', function() {
            emailSection.style.display = "none";
            emailInput.value = "";
        });
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
    setupHoverButtons();
});