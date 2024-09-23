document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const cnicElement = document.getElementById('cnic') as HTMLInputElement;
    const contactElement = document.getElementById('contact') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const cityElement = document.getElementById('city') as HTMLInputElement;
    const countryElement = document.getElementById('country') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    if (profilePictureInput && nameElement && emailElement && cnicElement && contactElement && addressElement && cityElement
        && countryElement && educationElement && experienceElement && skillsElement) {

        const name = nameElement.value;
        const email = emailElement.value;
        const cnic = cnicElement.value;
        const contact = contactElement.value;
        const address = addressElement.value;
        const city = cityElement.value;
        const country = countryElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Handling the profile picture
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

        // Create the Resume output
        const resumeOutput = `
            <h2>Resume</h2>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profile-picture" style="width:150px;height:150px;">` : ""} 
            <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span></p>
            <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span></p>
            <p><strong>CNIC:</strong> <span id="edit-cnic" class="editable"> ${cnic} </span></p>
            <p><strong>Contact:</strong> <span id="edit-contact" class="editable"> ${contact} </span></p>
            <p><strong>Address:</strong> <span id="edit-address" class="editable"> ${address} </span></p>
            <p><strong>City:</strong> <span id="edit-city" class="editable"> ${city} </span></p>
            <p><strong>Country:</strong> <span id="edit-country" class="editable"> ${country}</span></p>

            <h3>Education</h3>
            <p id="edit-education" class="editable">${education}</p>

            <h3>Experience</h3>
            <p id="edit-experience" class="editable">${experience}</p>

            <h3>Skills</h3>
            <p id="edit-skills" class="editable">${skills}</p>
        `;

        // Display resume output
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    } else {
        console.error('One or more required form elements are missing data.');
    }
});

function makeEditable() {
    const editableElement = document.querySelectorAll('.editable');
    editableElement.forEach(element => {
        element.addEventListener('click', function () {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";
            
            // replace content
            if (currentElement.tagName === "p" || currentElement.tagName === "span"){
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentValue
                input.classList.add('editing-input')

                input.addEventListener('blur', function () {
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove()

                })

                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()


            }

        })
    })
}





