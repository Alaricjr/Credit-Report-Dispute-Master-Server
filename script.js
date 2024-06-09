// script.js

function generatePrompt(promptType) {
    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const cityStateZip = document.getElementById('cityStateZip').value;
    const inquiryDates = document.getElementById('inquiryDates').value;
    const creditors = document.getElementById('creditors').value;
    const authorized = document.querySelector('input[name="authorized"]:checked').value;

    let creditBureaus = [];
    if (document.getElementById('experian').checked) creditBureaus.push('Experian');
    if (document.getElementById('equifax').checked) creditBureaus.push('Equifax');
    if (document.getElementById('transunion').checked) creditBureaus.push('TransUnion');

    let letterContent = '';

    if (promptType === 1) {
        letterContent = `Dear [Credit Bureau],
        
I am writing to dispute the following inquiries on my credit report. These inquiries were not authorized by me.

- Date of Inquiry: ${inquiryDates}
- Creditor/Company: ${creditors}

I request that these inquiries be removed from my credit report immediately.

Thank you,
${fullName}
${address}
${cityStateZip}`;
    } else if (promptType === 2) {
        letterContent = `To Whom It May Concern,

I am writing to bring to your attention unauthorized inquiries on my credit report. These inquiries, listed below, were not made by me.

- Date of Inquiry: ${inquiryDates}
- Creditor/Company: ${creditors}

Please investigate and remove these inquiries promptly.

Sincerely,
${fullName}
${address}
${cityStateZip}`;
    } else if (promptType === 3) {
        letterContent = `Hello,

I noticed some inaccuracies in my credit report regarding unauthorized inquiries. The details are as follows:

- Date of Inquiry: ${inquiryDates}
- Creditor/Company: ${creditors}

These were not authorized by me and need to be removed.

Regards,
${fullName}
${address}
${cityStateZip}`;
    }

    document.getElementById('generatedLetter').innerText = letterContent;
}
