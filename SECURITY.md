# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability in this KTU Calculator project, please report it responsibly:

1. **Do NOT** open a public GitHub issue
2. Email the maintainer directly with details
3. Allow reasonable time for the issue to be addressed before public disclosure

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Security Features

- **Client-side Processing**: All OCR and PDF processing happens in the browser for privacy
- **No Server Communication**: Grade calculations are performed locally
- **No Data Storage**: No personal academic data is stored or transmitted

## Best Practices for Users

- Only upload academic documents from trusted sources
- Use the application on secure, updated browsers
- Clear browser cache after use if on shared computers

## Known Security Considerations

- File uploads are processed entirely client-side using Tesseract.js and PDF.js
- No academic data leaves your browser
- All calculations are performed locally
