const contactMessageTemplate = require("../services/contactMessageTemplate");
const sendMail = require("../services/emailService");

// send contact message controller
const sendContactMessageController = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body || {};

    // send email
    sendMail({
      from: email,
      to: process.env.ADMIN_EMAIL,
      subject: `${name} send a new message.`,
      html: contactMessageTemplate({ name, email, phone, message }),
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

module.exports = {
  sendContactMessageController,
};
