function generateEmailTemplate(data) {
  return `
<!doctype html>
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  lang="cs"
>
  <head>
    <title>Nová zpráva z Bitez</title>
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!--[if mso]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->

    <!--[if lte mso 11]>
    <style type="text/css">
      .outlook-group-fix { width: 100% !important; }
    </style>
    <![endif]-->

    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,700" rel="stylesheet" type="text/css" />
    <!--<![endif]-->

    <style type="text/css">
      /* Reset */
      #outlook a { padding: 0; }
      body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
      table, td { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
      img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
      p { display: block; margin: 13px 0; }

      /* Font imports */
      @import url(https://fonts.googleapis.com/css?family=Roboto:400,700);
      @import url(https://fonts.googleapis.com/css?family=Ubuntu:400,700);

      /* Global overrides */
      p, h1, h2, h3 { margin: 0; }
      a { text-decoration: none; color: inherit; }

      /* Responsive columns */
      @media only screen and (max-width: 480px) {
        .mj-column-per-100 { width: 100% !important; max-width: 100% !important; }
        .mj-column-per-100 > .mj-column-per-100 { width: 100% !important; max-width: 100% !important; }
      }

      /* Column line-height fix */
      .mj-column-per-100 [class^="mj-column-per-"] { line-height: normal; }
    </style>
  </head>

  <body style="background-color: #FFFFFF;">
    <div style="background-color: #FFFFFF;">

      <!-- Top spacer -->
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:660px;" width="660"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;"><![endif]-->
      <div style="background: #FFFFFF; margin: 0 auto; max-width: 660px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
          <tbody><tr><td style="direction: ltr; font-size: 0; padding: 0; text-align: center;">
            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:660px;"><![endif]-->
            <div class="mj-column-per-100 outlook-group-fix" style="font-size: 0; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                <tr><td style="font-size: 0; word-break: break-word;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="30" style="vertical-align:top;height:30px;"><![endif]-->
                  <div style="height: 30px;">&nbsp;</div>
                  <!--[if mso | IE]></td></tr></table><![endif]-->
                </td></tr>
              </table>
            </div>
            <!--[if mso | IE]></td></tr></table><![endif]-->
          </td></tr></tbody>
        </table>
      </div>
      <!--[if mso | IE]></td></tr></table><![endif]-->

      <!-- Header: Logo on red background -->
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:660px;" width="660"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;"><![endif]-->
      <div style="background: #EE2554; margin: 0 auto; border-radius: 30px; max-width: 660px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background: #EE2554; width: 100%; border-radius: 30px;">
          <tbody><tr><td style="direction: ltr; font-size: 0; padding: 0; text-align: center;">
            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:660px;"><![endif]-->
            <div class="mj-column-per-100 outlook-group-fix" style="font-size: 0; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                <tr><td align="center" style="font-size: 0; padding: 25px; word-break: break-word;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody><tr><td style="width: 200px;">
                      <img
                        height="auto"
                        src="https://storage.googleapis.com/bitez230491/Zdroje/bitez_logo_kremova_fullhd.png"
                        style="border: 0; display: block; outline: none; text-decoration: none; height: auto; width: 100%; font-size: 13px;"
                        width="200"
                      />
                    </td></tr></tbody>
                  </table>
                </td></tr>
              </table>
            </div>
            <!--[if mso | IE]></td></tr></table><![endif]-->
          </td></tr></tbody>
        </table>
      </div>
      <!--[if mso | IE]></td></tr></table><![endif]-->

      <!-- Spacer (rounded) -->
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:660px;" width="660"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;"><![endif]-->
      <div style="background: transparent; margin: 0 auto; height: 30px;">
      </div>
      <!--[if mso | IE]></td></tr></table><![endif]-->

      <!-- Section: Notification content -->
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:660px;" width="660"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;"><![endif]-->
      <div style="background: #FFF6EF; margin: 0 auto; border-radius: 30px; max-width: 660px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background: #FFF6EF; width: 100%; border-radius: 30px;">
          <tbody><tr><td style="direction: ltr; font-size: 0; padding: 20px 0; text-align: center;">
            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:660px;"><![endif]-->
            <div class="mj-column-per-100 outlook-group-fix" style="font-size: 0; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">

                <!-- Top spacer -->
                <tr><td style="font-size: 0; word-break: break-word;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="30" style="vertical-align:top;height:30px;"><![endif]-->
                  <div style="height: 30px;">&nbsp;</div>
                  <!--[if mso | IE]></td></tr></table><![endif]-->
                </td></tr>

                <!-- Heading -->
                <tr><td align="left" style="font-size: 0; padding: 15px 60px; word-break: break-word;">
                  <div style="font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 1.4; text-align: left; color: #000000;">
                    <p style="text-align: center;">
                      <span style="font-family: Arial, sans-serif; font-size: 34px; color: #4C525A;">
                        <strong>Nová zpráva z kontaktního formuláře 📬</strong>
                      </span>
                    </p>
                  </div>
                </td></tr>

                <!-- Intro text -->
                <tr><td align="left" style="font-size: 0; padding: 5px 60px 15px 60px; word-break: break-word;">
                  <div style="font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 1.4; text-align: left; color: #000000;">
                    <p style="text-align: center;">
                      <span style="color: #646A75; font-family: Arial, sans-serif; font-size: 20px;">
                        Právě vám přišla nová zpráva z kontaktního formuláře Bitez.
                      </span>
                    </p>
                  </div>
                </td></tr>

                <!-- Detail block -->
                <tr><td align="left" style="font-size: 0; padding: 10px 60px; word-break: break-word;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="background-color: #FFEEDD; border-left: 4px solid #EE2554; border-radius: 0 8px 8px 0;">
                    <tr><td style="padding: 20px 25px;">

                      <!-- Name -->
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="margin-bottom: 12px;">
                        <tr><td style="font-family: Arial, sans-serif; font-size: 16px; color: #646A75; padding-bottom: 10px;">
                          <span style="font-weight: bold; color: #4C525A;">Jméno:</span>&nbsp; ${data.name}
                        </td></tr>
                      </table>

                      <!-- Email -->
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="margin-bottom: 12px;">
                        <tr><td style="font-family: Arial, sans-serif; font-size: 16px; color: #646A75; padding-bottom: 10px;">
                          <span style="font-weight: bold; color: #4C525A;">Email:</span>&nbsp; ${data.email}
                        </td></tr>
                      </table>

                      <!-- Phone -->
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                        <tr><td style="font-family: Arial, sans-serif; font-size: 16px; color: #646A75;">
                          <span style="font-weight: bold; color: #4C525A;">Telefon:</span>&nbsp; ${data.phone}
                        </td></tr>
                      </table>

                    </td></tr>
                  </table>
                </td></tr>

                <!-- Follow-up text -->
                <tr><td align="left" style="font-size: 0; padding: 15px 60px 5px 60px; word-break: break-word;">
                  <div style="font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 1.4; text-align: left; color: #000000;">
                    <p style="text-align: center;">
                      <span style="color: #646A75; font-family: Arial, sans-serif; font-size: 16px;">
                        Pro rychlou odpověď můžete kontaktovat přímo na uvedený email nebo telefon.
                      </span>
                    </p>
                  </div>
                </td></tr>

                <!-- CTA button -->
                <tr><td align="center" style="font-size: 0; padding: 20px 60px; word-break: break-word;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody><tr><td align="center" style="border-radius: 50px; background-color: #4CC36C;">
                      <a
                        href="mailto:${data.email}"
                        style="display: inline-block; background-color: #4CC36C; color: #FFFFFF; font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; text-decoration: none; padding: 12px 30px; border-radius: 50px;"
                      >
                        Odpovědět
                      </a>
                    </td></tr></tbody>
                  </table>
                </td></tr>

                <!-- Bottom spacer -->
                <tr><td style="font-size: 0; word-break: break-word;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="30" style="vertical-align:top;height:30px;"><![endif]-->
                  <div style="height: 30px;">&nbsp;</div>
                  <!--[if mso | IE]></td></tr></table><![endif]-->
                </td></tr>

              </table>
            </div>
            <!--[if mso | IE]></td></tr></table><![endif]-->
          </td></tr></tbody>
        </table>
      </div>
      <!--[if mso | IE]></td></tr></table><![endif]-->

      <!-- Spacer (rounded) -->
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:660px;" width="660"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;"><![endif]-->
      <div style="background: transparent; margin: 0 auto; height: 30px;">
      </div>
      <!--[if mso | IE]></td></tr></table><![endif]-->

      <!-- Footer: red background with contact info -->
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:660px;" width="660"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;"><![endif]-->
      <div style="background: #EE2554; margin: 0 auto; border-radius: 30px; max-width: 660px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background: #EE2554; width: 100%; border-radius: 30px;">
          <tbody><tr><td style="direction: ltr; font-size: 0; padding: 26px 0; text-align: center;">
            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:660px;"><![endif]-->
            <div class="mj-column-per-100 outlook-group-fix" style="font-size: 0; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">

                <!-- Instagram icon -->
                <tr><td align="center" style="font-size: 0; padding: 10px; word-break: break-word;">
                  <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"><tr><td><![endif]-->
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float: none; display: inline-table;">
                    <tr><td style="padding: 4px;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background: transparent; border-radius: 3px; width: 35px;">
                        <tr><td style="font-size: 0; height: 35px; vertical-align: middle; width: 35px;">
                          <a href="https://www.instagram.com/bitez.cz" target="_blank">
                            <img
                              alt="Instagram"
                              height="35"
                              src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/simplewhite/instagram.png"
                              style="border-radius: 3px; display: block;"
                              width="35"
                            />
                          </a>
                        </td></tr>
                      </table>
                    </td></tr>
                  </table>
                  <!--[if mso | IE]></td></tr></table><![endif]-->
                </td></tr>

                <!-- Contact info -->
                <tr><td align="center" style="font-size: 0; padding: 0 35px; word-break: break-word;">
                  <div style="font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 1.8; text-align: center; color: #222222;">
                    <p>
                      <span style="color: #FFFFFF; font-family: Arial, sans-serif; font-size: 14px;">Bitez Technology s.r.o.</span>
                    </p>
                    <p>
                      <span style="color: #FFFFFF; font-family: Arial, sans-serif; font-size: 14px;">
                        Ruprechtická 387/49, Liberec I-Staré Město, 460 01 Liberec<br />
                        ahoj@bitez.cz | +420 725 726 826
                      </span>
                    </p>
                    <p>
                      <span style="color: #FFFFFF; font-family: Arial, sans-serif; font-size: 14px;">DIČ: CZ19896638</span>
                    </p>
                  </div>
                </td></tr>

                <!-- Spacer -->
                <tr><td style="font-size: 0; word-break: break-word;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="50" style="vertical-align:top;height:50px;"><![endif]-->
                  <div style="height: 50px;">&nbsp;</div>
                  <!--[if mso | IE]></td></tr></table><![endif]-->
                </td></tr>

                <!-- Footer logo -->
                <tr><td align="center" style="font-size: 0; padding: 0; word-break: break-word;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody><tr><td style="width: 100px;">
                      <img
                        height="auto"
                        src="https://storage.googleapis.com/bitez230491/Zdroje/bitez_logo_kremova_fullhd.png"
                        style="border: 0; display: block; outline: none; text-decoration: none; height: auto; width: 100%; font-size: 13px;"
                        width="100"
                      />
                    </td></tr></tbody>
                  </table>
                </td></tr>

                <!-- Spacer -->
                <tr><td style="font-size: 0; word-break: break-word;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="50" style="vertical-align:top;height:50px;"><![endif]-->
                  <div style="height: 50px;">&nbsp;</div>
                  <!--[if mso | IE]></td></tr></table><![endif]-->
                </td></tr>

                <!-- Copyright -->
                <tr><td align="center" style="font-size: 0; padding: 0 35px; word-break: break-word;">
                  <div style="font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 1.8; text-align: center; color: #222222;">
                    <p>
                      <span style="color: #FFFFFF; font-family: Arial, sans-serif; font-size: 14px;">
                        © ${new Date().getFullYear()} Bitez - Marketing pro restaurace
                      </span>
                    </p>
                  </div>
                </td></tr>

              </table>
            </div>
            <!--[if mso | IE]></td></tr></table><![endif]-->
          </td></tr></tbody>
        </table>
      </div>
      <!--[if mso | IE]></td></tr></table><![endif]-->

      <!-- Bottom spacer -->
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:660px;" width="660"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;"><![endif]-->
      <div style="background: #F1F2F3; margin: 0 auto; max-width: 660px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background: #F1F2F3; width: 100%;">
          <tbody><tr><td style="direction: ltr; font-size: 0; padding: 0; text-align: center;">
            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:660px;"><![endif]-->
            <div class="mj-column-per-100 outlook-group-fix" style="font-size: 0; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                <tr><td style="font-size: 0; word-break: break-word;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="40" style="vertical-align:top;height:40px;"><![endif]-->
                  <div style="height: 40px;">&nbsp;</div>
                  <!--[if mso | IE]></td></tr></table><![endif]-->
                </td></tr>
              </table>
            </div>
            <!--[if mso | IE]></td></tr></table><![endif]-->
          </td></tr></tbody>
        </table>
      </div>
      <!--[if mso | IE]></td></tr></table><![endif]-->

    </div>
  </body>
</html>
  `
}
