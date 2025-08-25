    // Create form
    const form = document.createElement("form");

    // Create fieldset and legend
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = "Employee Details";
    fieldset.appendChild(legend);
    fieldset.appendChild(document.createElement("br"));

    // Function to create label + input
    function createInput(labelText, type, name) {
      const label = document.createElement("label");
      label.textContent = labelText + " ";
      const input = document.createElement("input");
      input.type = type;
      input.name = name;
      label.appendChild(input);
      fieldset.appendChild(label);
      fieldset.appendChild(document.createElement("br"));
      fieldset.appendChild(document.createElement("br"));
    }

    // First name
    createInput("First name:", "text", "firstName");
    // Last name
    createInput("Last name:", "text", "lastName");

    // Gender (radio buttons)
    const genderLabel = document.createElement("label");
    genderLabel.textContent = " ";
    const male = document.createElement("input");
    male.type = "radio";
    male.name = "gender";
    male.value = "Male";
    const maleText = document.createTextNode(" Male ");

    const female = document.createElement("input");
    female.type = "radio";
    female.name = "gender";
    female.value = "Female";
    const femaleText = document.createTextNode(" Female ");

    genderLabel.appendChild(male);
    genderLabel.appendChild(maleText);
    genderLabel.appendChild(female);
    genderLabel.appendChild(femaleText);
    fieldset.appendChild(genderLabel);
    fieldset.appendChild(document.createElement("br"));
     fieldset.appendChild(document.createElement("br"));
    // Employee ID
    createInput("Employee ID:", "text", "employeeId");
    // Designation
    createInput("Designation:", "text", "designation");
    // Phone Number
    createInput("Phone Number:", "tel", "phoneNumber");

    // Submit button
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Submit";
    fieldset.appendChild(submitBtn);

    // Append fieldset to form and form to body
    form.appendChild(fieldset);
    document.body.appendChild(form);