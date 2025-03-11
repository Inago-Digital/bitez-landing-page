function generateEmailTemplate(data) {
  return `
<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nová zpráva z Bitez</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #e1e9ee;
			height: 100vh;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
    }
    .email-header {
      background-color: #ee2554;
      color: white;
      padding: 20px;
      text-align: center;
    }
    .email-content {
      padding: 30px 20px;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
    }
    .email-footer {
      background-color: #262e49;
      color: white;
      padding: 15px;
      text-align: center;
      font-size: 12px;
    }
    h1 {
      margin: 0;
      font-size: 24px;
    }
    .highlight {
      color: #ffd958;
      font-weight: bold;
    }
    .detail-block {
      background-color: #f6f6f6;
      border-left: 4px solid #ee2554;
      padding: 15px;
      margin: 20px 0;
    }
    .detail-item {
      margin-bottom: 10px;
    }
    .detail-label {
      font-weight: bold;
      color: #262e49;
    }
    .cta-button {
      display: inline-block;
      background-color: #4cc36c;
      color: white;
      text-decoration: none;
      padding: 12px 30px;
      border-radius: 50px;
      font-weight: bold;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1>Nová zpráva z <span class="highlight">Bitez</span></h1>
    </div>
    <div class="email-content">
      <p>Právě vám přišla nová zpráva z kontaktního formuláře Bitez.</p>
      
      <div class="detail-block">
        <div class="detail-item">
          <span class="detail-label">Jméno:</span> ${data.name}
        </div>
        <div class="detail-item">
          <span class="detail-label">Email:</span> ${data.email}
        </div>
        <div class="detail-item">
          <span class="detail-label">Telefon:</span> ${data.phone}
        </div>
        <div class="detail-item">
          <span class="detail-label">Společnost:</span> ${data.company}
        </div>
      </div>
      
      <p>Pro rychlou odpověď můžete kontaktovat přímo na uvedený email nebo telefon.</p>
      
      <center>
        <a href="mailto:${data.email}" class="cta-button">Odpovědět</a>
      </center>
    </div>
    <div class="email-footer">
      <p>© ${new Date().getFullYear()} Bitez - Marketing pro restaurace</p>
    </div>
  </div>
</body>
</html>
  `
}
