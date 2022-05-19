function generateMD(data) {
    return `
    #   ${data.title}

        ${data.description}

        ${data.licenseBadge}

    ## Contents

    1. [Description]
    2. [Installation]
    3. [Usage]
    4. [Contribution Guidelines]
    5. [Test Instructions]
    6. [Questions?]

    ---
    ## Description
        ${data.description}
    
    ---

    ## Installation
        ${data.installation}
    
    ---

    ## Usage Information
        ${data.usage}

    ---

    ## Contribution Guidelines
        ${data.contribution}

    ---

    ## Test Instructions
    ${data.test}



    `

}