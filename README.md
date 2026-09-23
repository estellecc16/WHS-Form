# Workplace Health and Safety Form

A lightweight web-based form created as part of a digital services assessment, demonstrating user-centred design, validation, accessibility and responsive behaviour.

## Live Demo

**GitHub Pages:** [https://estellecc16.github.io/WHS-Form/ ]

## Features

* Responsive layout for desktop and mobile
* Conditional fields based on user responses
* Australian phone number validation using Regex
* Email format validation using Regex
* 11-digit ABN validation
* Mandatory field validation
* File upload restrictions for PDF, DOC and DOCX
* 5 MB maximum file size
* Google reCAPTCHA
* Clear labels, instructions and validation messages
* Visible keyboard focus states and accessible colour contrast

## Technology

* HTML5
* CSS3
* Vanilla JavaScript
* GitHub Pages

## Validation Rules

| Field         | Rule                                       |
| ------------- | ------------------------------------------ |
| Email         | Mandatory and valid email format           |
| ABN           | Mandatory and exactly 11 digits            |
| Phone         | Australian phone number format             |
| Policy Upload | Required when Health & Safety Policy = Yes |
| File Upload   | PDF, DOC or DOCX; maximum 5 MB             |
| HSR Details   | Required when HSR = Yes                    |
| reCAPTCHA     | Required before successful validation      |

## Design Approach

The solution was intentionally kept simple and proportionate to the assessment. Conditional fields use progressive disclosure so users only see additional questions when relevant.

GitHub Pages was selected as a lightweight way to deploy the HTML, CSS and JavaScript solution quickly while keeping the implementation easy to review.

## Production Considerations

This is a front-end demonstration rather than a production data collection service.

For a production implementation, the architecture would depend on security, integration, data governance, scale and support requirements. In a Microsoft-based environment, an option could be Power Apps with Dataverse or SharePoint Lists, particularly where integration with Microsoft Teams and Microsoft 365 is required.

Alternatively, a lightweight web backend and database could be introduced for server-side validation, secure data storage, file handling and reCAPTCHA verification.

## Run Locally

Clone or download the repository and open:

`index.html`

in a modern web browser.

No build process or additional dependencies are required.

## Note

The reCAPTCHA implementation uses Google's test configuration for demonstration purposes. A production implementation would require a production site key and server-side token verification.
