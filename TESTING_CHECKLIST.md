# Effilor Growth Assessment - Testing Checklist

Use this checklist to ensure the assessment is fully functional before going live.

---

## Pre-Deployment Tests (Local)

### Visual Tests

- [ ] Open `index.html` in browser
- [ ] Logo displays correctly on welcome screen
- [ ] Logo displays correctly on question screens
- [ ] Logo displays correctly on results screen
- [ ] All text is readable (no overlapping, correct sizing)
- [ ] Colors match Effilor brand (Purple #6B3D7A)
- [ ] Layout looks professional and polished

### Functional Tests

- [ ] "Begin Assessment" button works
- [ ] All 28 questions display correctly
- [ ] Progress bar updates accurately
- [ ] Answer options are selectable
- [ ] Selected answer highlights in purple
- [ ] Auto-advance works after selection
- [ ] "Previous Question" button works (except Q1)
- [ ] Cannot skip questions (must select answer)
- [ ] Question counter shows "Question X of 28"

### Content Tests

- [ ] All question text is clear and complete
- [ ] No typos in questions
- [ ] No typos in answer options
- [ ] Assessment title and tagline are correct
- [ ] Pillar names display correctly (in results only, not above questions)

---

## Post-Deployment Tests (Live Site)

### Deployment Verification

- [ ] Assessment loads at Vercel URL
- [ ] No console errors in browser (F12 → Console)
- [ ] No 404 errors for logo or other assets
- [ ] Page loads quickly (< 3 seconds)

### Complete User Flow Test

**Test Scenario**: Complete as if you're a real user

- [ ] Welcome screen loads correctly
- [ ] Click "Begin Assessment"
- [ ] Answer all 28 questions (vary your answers)
- [ ] Verify progress bar reaches 100%
- [ ] Results screen displays

### Results Screen Tests

- [ ] Total score calculates correctly
- [ ] Score level (Foundation/Scaling/Growth Ready) is appropriate
- [ ] Overall feedback text displays
- [ ] "Top Strength" box shows correct pillar
- [ ] "Priority Area" box shows correct pillar
- [ ] All 6 pillars show in breakdown section
- [ ] Pillar scores are correct
- [ ] Pillar progress bars animate correctly
- [ ] Pillar feedback text displays for each
- [ ] CTA box displays: "Want a Copy of Your Results?"
- [ ] "Get My Full Report" button works

### Email Capture Tests

- [ ] Click "Get My Full Report" from results
- [ ] Email capture form displays
- [ ] All fields present:
  - [ ] Full Name (required)
  - [ ] Email Address (required)
  - [ ] Organization Name (required)
  - [ ] Job Role/Title (required)
  - [ ] Phone Number (optional)
- [ ] Required field validation works (try submitting empty)
- [ ] Email validation works (try invalid email)
- [ ] "Back to Results" link works
- [ ] Privacy notice displays

### Email Submission Tests

**Critical Test - Most Important!**

- [ ] Fill form with test data
- [ ] Click "Send My Report"
- [ ] Button shows "Sending..." during submission
- [ ] Thank you screen displays
- [ ] Success message shows with user's name
- [ ] Correct email address displays
- [ ] **Email arrives at shankar.ramamurthy@effilor.com**
- [ ] Email contains:
  - [ ] Contact information
  - [ ] Total score and level
  - [ ] All pillar scores
  - [ ] All question responses
  - [ ] JSON data section
  - [ ] Timestamp

**Check Spam Folder** if email doesn't arrive in inbox!

### Scoring Validation Tests

**Test with Known Answers**:

Scenario 1: All minimum answers (all "Rarely/Not at all")
- [ ] Expected score: 28 points
- [ ] Expected level: Foundation Stage
- [ ] Verify calculation is correct

Scenario 2: All maximum answers (all "Consistently/Always")
- [ ] Expected score: 140 points
- [ ] Expected level: Growth Ready
- [ ] Verify calculation is correct

Scenario 3: Mix of answers
- [ ] Manually calculate expected score
- [ ] Verify assessment matches calculation
- [ ] Verify correct level assigned

### Pillar Score Tests

For each pillar, verify scores are correct:

- [ ] Pillar 1 (4 questions): Max 20 points
- [ ] Pillar 2 (5 questions): Max 25 points
- [ ] Pillar 3 (4 questions): Max 20 points
- [ ] Pillar 4 (5 questions): Max 25 points
- [ ] Pillar 5 (6 questions): Max 30 points
- [ ] Pillar 6 (4 questions): Max 20 points
- [ ] Total: 140 points

---

## Mobile Responsiveness Tests

### iPhone/iOS Testing

- [ ] Open on iPhone (or use browser dev tools)
- [ ] Logo displays correctly
- [ ] Text is readable (not too small)
- [ ] Buttons are tappable (not too small)
- [ ] Answer options are easy to select
- [ ] Progress bar displays correctly
- [ ] Results charts display correctly
- [ ] Form inputs work properly
- [ ] No horizontal scrolling
- [ ] Layout doesn't break

### Android Testing

- [ ] Test on Android device
- [ ] All same checks as iPhone above
- [ ] Verify form submission works

### Tablet Testing

- [ ] Test on iPad or Android tablet
- [ ] Layout scales appropriately
- [ ] Everything remains centered and readable
- [ ] No awkward spacing

---

## Browser Compatibility Tests

### Desktop Browsers

- [ ] Chrome (latest version)
- [ ] Firefox (latest version)
- [ ] Safari (latest version)
- [ ] Edge (latest version)

### Mobile Browsers

- [ ] Safari on iOS
- [ ] Chrome on Android
- [ ] Samsung Internet (if available)

---

## Error Handling Tests

### Network Error Simulation

- [ ] Turn off WiFi during form submission
- [ ] Verify error message displays
- [ ] User can retry submission
- [ ] Form data is not lost

### Invalid Data Tests

- [ ] Try submitting email form with invalid email format
- [ ] Try submitting with empty required fields
- [ ] Verify validation prevents submission
- [ ] Error messages are clear

### Edge Cases

- [ ] Try going back to Question 1 from Question 28
- [ ] Try rapidly clicking through questions
- [ ] Try clicking "Previous" multiple times quickly
- [ ] Try refreshing page mid-assessment
- [ ] Try navigating away and coming back

---

## Performance Tests

- [ ] Page load time < 3 seconds
- [ ] Logo loads quickly
- [ ] No lag when selecting answers
- [ ] Smooth transitions between questions
- [ ] Results page loads quickly
- [ ] No browser freezing or hanging

---

## Accessibility Tests

### Basic Accessibility

- [ ] All images have alt text
- [ ] Form fields have labels
- [ ] Color contrast is sufficient
- [ ] Font sizes are readable
- [ ] Links are clearly identifiable
- [ ] Focus states are visible (tab through page)

### Screen Reader Testing (Optional but Recommended)

- [ ] Test with VoiceOver (Mac/iOS)
- [ ] Test with NVDA or JAWS (Windows)
- [ ] Verify all content is announced correctly

---

## Content Quality Tests

### Copywriting Review

- [ ] No typos in any text
- [ ] Grammar is correct throughout
- [ ] Tone is consistent (professional, direct)
- [ ] Feedback is appropriately calibrated
- [ ] No offensive or inappropriate language
- [ ] Brand voice is maintained

### Data Accuracy

- [ ] All question assignments to pillars are correct
- [ ] Scoring logic matches specifications
- [ ] Score ranges are correct:
  - [ ] Foundation Stage: 28-65
  - [ ] Scaling Challenges: 66-102
  - [ ] Growth Ready: 103-140
- [ ] Feedback text matches score ranges

---

## Security & Privacy Tests

- [ ] No sensitive data logged to console
- [ ] Email form uses HTTPS (Vercel handles this)
- [ ] Privacy notice is displayed
- [ ] Contact email is correct
- [ ] No unnecessary data collection

---

## Final Pre-Launch Checklist

### Critical Items

- [ ] **Email delivery confirmed** (sent test, received email)
- [ ] All 28 questions work correctly
- [ ] Scoring is accurate
- [ ] Logo displays everywhere
- [ ] Mobile responsive verified
- [ ] No console errors
- [ ] Forms work end-to-end
- [ ] Contact information is correct

### Nice-to-Have

- [ ] Tested on multiple browsers
- [ ] Tested on multiple devices
- [ ] Team members have reviewed
- [ ] Feedback incorporated
- [ ] Backup plan if email fails

---

## Sign-Off

**Tester Name**: _________________

**Date**: _________________

**Result**: ☐ Pass   ☐ Fail   ☐ Pass with minor issues

**Issues Found**:
___________________________________
___________________________________
___________________________________

**Approved By**: _________________

**Date**: _________________

---

## Post-Launch Monitoring

### First Week

- [ ] Monitor email submissions daily
- [ ] Check for any error reports
- [ ] Gather initial user feedback
- [ ] Track completion rates (if analytics added)

### Ongoing

- [ ] Weekly email submission check
- [ ] Monthly performance review
- [ ] Quarterly content refresh
- [ ] Update based on partner feedback

---

## Troubleshooting Guide

If tests fail, check:

1. **Logo issues**: Verify `effilor-logo.jpg` is in root folder
2. **Email issues**: Check SendGrid API key and redeploy
3. **Scoring issues**: Review calculation logic in code
4. **Mobile issues**: Check viewport meta tag and responsive classes
5. **Browser issues**: Check console for JavaScript errors

---

## Success Criteria

The assessment is ready to launch when:

✅ All critical tests pass
✅ Email delivery works reliably  
✅ Mobile experience is smooth
✅ No blocking bugs found
✅ Team has reviewed and approved
✅ Backup plan is in place

---

**Remember**: Email delivery is the #1 critical test. If emails aren't arriving, the lead magnet isn't working!
