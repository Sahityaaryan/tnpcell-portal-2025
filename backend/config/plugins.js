module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
          user: env('GMAIL_SMTP_USERNAME', 'strapi'),
          pass: env('GMAIL_SMTP_PASSWORD', 'strapi'),
        },
        tls: {
            rejectUnauthorized: true,
            minVersion: 'TLSv1.2',
            maxVersion: 'TLSv1.3',
        }
      },
      settings: {
        defaultFrom: env('GMAIL_SMTP_USERNAME', 'strapi'),
        defaultReplyTo: env('GMAIL_SMTP_USERNAME', 'strapi'),
      },
    },
  },
});