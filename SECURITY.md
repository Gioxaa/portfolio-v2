# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this portfolio, please report it responsibly:

1. **Email**: security@example.com (replace with your email)
2. **Response Time**: We aim to respond within 48 hours
3. **Disclosure**: Please allow 90 days for remediation before public disclosure

## Scope

### In Scope
- XSS (Cross-Site Scripting) vulnerabilities
- Clickjacking vulnerabilities
- CSP bypass vulnerabilities
- Information disclosure
- Dependency vulnerabilities

### Out of Scope
- Social engineering attacks
- Physical attacks
- Denial of Service (DoS) attacks
- Issues in third-party services not directly controlled by this project
- Missing HTTP security headers on development environment

## Security Measures Implemented

This portfolio implements the following security measures:

### HTTP Security Headers
- **Content-Security-Policy**: Restricts resource loading to trusted sources
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-Frame-Options**: Prevents clickjacking via framing
- **Referrer-Policy**: Controls referrer information leakage
- **Permissions-Policy**: Restricts browser feature access

### Code Security
- **No `dangerouslySetInnerHTML`**: All content is safely rendered
- **External links sanitized**: All external links use `rel="noopener noreferrer"`
- **No client-side secrets**: Environment variables are not exposed to client
- **TypeScript strict mode**: Prevents common programming errors

### Dependencies
- Minimal dependency footprint to reduce supply chain risk
- Regular dependency audits recommended (`pnpm audit`)

## Threat Model

### What We Protect Against
| Threat | Mitigation |
|--------|------------|
| XSS attacks | CSP headers, no innerHTML, React's built-in escaping |
| Clickjacking | X-Frame-Options, frame-ancestors CSP directive |
| MIME sniffing | X-Content-Type-Options: nosniff |
| Supply chain attacks | Minimal dependencies, lockfile integrity |
| Information leakage | Referrer-Policy, no secrets in client bundle |

### Out of Scope (Not Protected)
- Server-side vulnerabilities (this is a static site)
- Database attacks (no database)
- Authentication bypass (no auth system)
- API vulnerabilities (no backend APIs)

## Maintenance

- Dependencies should be updated monthly
- Run `pnpm audit` regularly to check for known vulnerabilities
- Monitor CSP reports if reporting is configured

## Version

Security Policy Version: 1.0.0
Last Updated: 2026-02-08
