const express = require('express');
const nodemailer = require('nodemailer');
const { createClient } = require('@supabase/supabase-js');
const router = express.Router();

// Initialize Supabase client with fallback values
const supabaseUrl = process.env.SUPABASE_URL || 'https://yiloouwgjldnpbnnchnq.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbG9vdXdnamxkbnBibm5jaG5xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTQxMDEyNywiZXhwIjoyMDc0OTg2MTI3fQ.e_rzSSVphVDdy1ifF-4vUmTWY3psBOGlk85AkJTrZoI';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Email transporter configuration with fallback values
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || 'your_email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your_app_password',
  },
});

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address'
      });
    }

    // Save to database
    const { data: contactData, error: dbError } = await supabase
      .from('contact_messages')
      .insert([
        {
          name,
          email,
          subject,
          message,
          status: 'new',
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (dbError) {
      console.error('Database error:', dbError);
      return res.status(500).json({
        success: false,
        message: 'Failed to save message'
      });
    }

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'nrvf@adventist.or.ke',
      subject: `NRVF Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2E7D32;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This message was sent from the North Rift Valley Field website contact form.
          </p>
        </div>
      `
    };

    // Send auto-reply to user
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting North Rift Valley Field',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2E7D32;">Thank You for Your Message</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to the North Rift Valley Field of the Seventh-day Adventist Church. We have received your message and will get back to you as soon as possible.</p>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Message:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          <p>If you have any urgent matters, please contact us directly:</p>
          <ul>
            <li>Phone: +254-0715 981 630</li>
            <li>Email: nrvf@adventist.or.ke</li>
            <li>Address: P.O. Box 68, Kitale, 30200, Kenya</li>
          </ul>
          <p>Blessings,<br>The North Rift Valley Field Team</p>
        </div>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(autoReplyOptions);
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Don't fail the request if email fails
    }

    res.json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      data: contactData[0]
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET /api/contact - Get contact messages (admin only)
router.get('/', async (req, res) => {
  try {
    // TODO: Add authentication middleware
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    res.json({
      success: true,
      data
    });

  } catch (error) {
    console.error('Get contact messages error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch messages'
    });
  }
});

module.exports = router;
