const sgMail = require('@sendgrid/mail');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { userData, scores, responses } = req.body;

    // Validate required data
    if (!userData || !scores || !responses) {
      return res.status(400).json({ error: 'Missing required data' });
    }

    // Set SendGrid API key
    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      console.error('SendGrid API key not configured');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    sgMail.setApiKey(apiKey);

    // Format pillar breakdown for email
    const pillarBreakdown = scores.pillars.map(p => 
      `${p.name}: ${p.score}/${p.maxScore} (${p.percentage}%)`
    ).join('\n');

    // Format question responses
    const responsesText = responses.map((r, idx) => 
      `Q${idx + 1}. ${r.question}\nPillar: ${r.pillar}\nAnswer: ${r.answer} (${r.points} points)\n`
    ).join('\n');

    // Email content
    const emailBody = `
NEW GROWTH ASSESSMENT SUBMISSION
================================

CONTACT INFORMATION:
-------------------
Name: ${userData.name}
Email: ${userData.email}
Organization: ${userData.organization}
Role: ${userData.role}
Phone: ${userData.phone || 'Not provided'}

ASSESSMENT RESULTS:
------------------
Total Score: ${scores.total}/${scores.maxScore} (${scores.percentage}%)
Level: ${scores.level}

PILLAR SCORES:
-------------
${pillarBreakdown}

DETAILED RESPONSES:
------------------
${responsesText}

JSON DATA:
---------
${JSON.stringify({ userData, scores, responses }, null, 2)}

---
Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `.trim();

    // Send email
    const msg = {
      to: 'shankar.ramamurthy@effilor.com',
      from: 'shankar.ramamurthy@effilor.com',
      subject: `Growth Assessment Submission - ${userData.name} (${userData.organization})`,
      text: emailBody
    };

    await sgMail.send(msg);

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    if (error.response) {
      console.error('SendGrid error:', error.response.body);
    }

    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
};
