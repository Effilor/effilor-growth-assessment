# Effilor Growth Assessment

A comprehensive diagnostic tool to help organizations assess their capacity for strategic growth across six foundational dimensions.

## Overview

The **Effilor Growth Assessment** is a lead magnet tool designed to provide senior leaders with deep insights into their organization's growth readiness. It measures capability across 6 pillars through 28 carefully crafted questions.

### Assessment Pillars

1. **Clarity of Strategy** - Quality and alignment of strategic choices
2. **Customer & Market Orientation** - Depth of customer insight and competitive positioning
3. **Revenue Engine Performance** - Predictability and effectiveness of revenue generation
4. **Organisation & Leadership Strength** - Leadership quality and talent density
5. **Operating Model & Execution Discipline** - Systems, processes, technology leverage, and execution consistency
6. **High-Performance Behaviours** - Accountability, truth-telling, and performance culture

## Features

- ✅ 28 diagnostic questions across 6 growth pillars
- ✅ Real-time progress tracking
- ✅ Immediate, comprehensive results
- ✅ Pillar-by-pillar breakdown with actionable feedback
- ✅ Optional email capture for detailed report
- ✅ Mobile-responsive design
- ✅ Professional Effilor branding

## Technology Stack

- **Frontend**: Single-page HTML with embedded CSS/JavaScript
- **Styling**: Tailwind CSS (via CDN)
- **Backend**: Vercel serverless functions (Node.js)
- **Email**: SendGrid API
- **Deployment**: Vercel

## File Structure

```
growth-assessment/
├── index.html              # Main assessment (single file)
├── effilor-logo.jpg        # Logo image
├── api/
│   └── send-email.js       # Vercel serverless function
├── README.md               # This file
├── QUICK_START.md          # Deployment guide
├── TESTING_CHECKLIST.md    # QA protocol
├── package.json            # Dependencies
└── .gitignore              # Git ignore rules
```

## Quick Start

See [QUICK_START.md](QUICK_START.md) for detailed deployment instructions.

### Prerequisites

- GitHub account
- Vercel account (free tier works)
- SendGrid account with API key

### Basic Setup (5 minutes)

1. Upload files to GitHub repository
2. Connect repository to Vercel
3. Add SendGrid API key to Vercel environment variables
4. Deploy

## Configuration

### Environment Variables

Set in Vercel Dashboard → Settings → Environment Variables:

- `SENDGRID_API_KEY`: Your SendGrid API key (must have Mail Send permission)

### Email Recipient

All assessment submissions are sent to: **shankar.ramamurthy@effilor.com**

To change this, edit the `to` field in `api/send-email.js`.

## Development

### Local Testing

1. Open `index.html` in a browser to test the assessment flow
2. Note: Email functionality requires deployment to Vercel (serverless functions don't work locally)

### Making Changes

**To modify questions:**
- Edit the `questions` array in `index.html`
- Update pillar scores if changing question count per pillar

**To modify scoring ranges:**
- Edit the `scoreRanges` array in `index.html`
- Adjust thresholds and feedback text

**To modify pillar feedback:**
- Edit the `pillarFeedback` array in `index.html`
- Adjust score ranges and feedback text for each level

**To modify branding:**
- Replace `effilor-logo.jpg` with new logo (keep same filename)
- Change color scheme by replacing `#6B3D7A` throughout the file

## Testing

See [TESTING_CHECKLIST.md](TESTING_CHECKLIST.md) for comprehensive testing protocol.

### Critical Tests

- ✅ Logo displays correctly
- ✅ All questions function properly
- ✅ Scoring calculates accurately
- ✅ Email arrives at recipient
- ✅ Mobile responsive works
- ✅ Form submission completes successfully

## Troubleshooting

### Logo not displaying
- Ensure `effilor-logo.jpg` is in repository root
- Check file name is exactly `effilor-logo.jpg` (case-sensitive)
- Verify image file uploaded successfully

### Email not sending
- Check SendGrid API key is set in Vercel
- Verify SendGrid sender verification is complete
- Check Vercel function logs for errors
- Ensure you redeployed after adding environment variable

### API endpoint returns 404
- Verify file is named `send-email.js` (not `send-emai.js`)
- Check file is in `api/` folder
- Redeploy in Vercel

### Vercel build issues
- Add `vercel.json` to disable unnecessary builds
- Check Vercel deployment logs
- Verify no build command is set

## Support

For issues or questions:
- Email: shankar.ramamurthy@effilor.com
- Check Vercel function logs for server errors
- Review browser console for client errors

## License

© 2025 Effilor Consulting Services. All rights reserved.

## Version History

- **v1.0** (December 2025) - Initial release
  - 28 questions across 6 pillars
  - Comprehensive scoring and feedback
  - SendGrid email integration
  - Mobile-responsive design
