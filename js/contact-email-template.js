function generateContactEmailTemplate() {
  return `
<!doctype html>
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <title></title>
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
      ul, li, ol { font-size: 11px; font-family: Ubuntu, Helvetica, Arial; }
      a { text-decoration: none; color: inherit; }

      /* Responsive columns */
      @media only screen and (max-width: 480px) {
        .mj-column-per-100 { width: 100% !important; max-width: 100% !important; }
        .mj-column-per-100 > .mj-column-per-100 { width: 100% !important; max-width: 100% !important; }
        table.full-width-mobile { width: 100% !important; }
        td.full-width-mobile { width: auto !important; }
      }

      /* Show/hide helpers */
      .hide_on_mobile { display: none !important; }
      @media only screen and (min-width: 480px) {
        .hide_on_mobile { display: block !important; }
      }

      .hide_section_on_mobile { display: none !important; }
      @media only screen and (min-width: 480px) {
        .hide_section_on_mobile { display: table !important; }
        div.hide_section_on_mobile { display: block !important; }
      }

      .hide_on_desktop { display: block !important; }
      @media only screen and (min-width: 480px) {
        .hide_on_desktop { display: none !important; }
      }

      .hide_section_on_desktop { display: table !important; width: 100%; }
      @media only screen and (min-width: 480px) {
        .hide_section_on_desktop { display: none !important; }
      }

      /* Column line-height fix */
      .mj-column-per-100 [class^="mj-column-per-"] { line-height: normal; }
    </style>
  </head>

  <body style="background-color: #FFFFFF;">
    <div style="background-color: #FFFFFF;">

      <!-- Spacer -->
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

      <!-- Section 1: Thank you message + illustration -->
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

                <!-- Heading: Děkujeme za vaši zprávu -->
                <tr><td align="left" style="font-size: 0; padding: 15px 60px; word-break: break-word;">
                  <div style="font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 1.4; text-align: left; color: #000000;">
                    <p style="text-align: center;">
                      <span style="font-family: Arial, sans-serif; font-size: 34px; color: #4C525A;">
                        <strong>Děkujeme za vaši zprávu 🤌</strong>
                      </span>
                    </p>
                  </div>
                </td></tr>

                <!-- Illustration -->
                <tr><td align="center" style="font-size: 0; padding: 0; word-break: break-word;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody><tr><td style="width: 200px;">
                      <img
                        height="auto"
                        src="https://storage.googleapis.com/bitez230491/Zdroje/Group.png"
                        style="border: 0; display: block; outline: none; text-decoration: none; height: auto; width: 100%; font-size: 13px;"
                        width="200"
                      />
                    </td></tr></tbody>
                  </table>
                </td></tr>

                <!-- Body text -->
                <tr><td align="left" style="font-size: 0; padding: 15px 60px; word-break: break-word;">
                  <div style="font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 1.4; text-align: left; color: #000000;">
                    <p style="text-align: center;">
                      <span style="color: #646A75; font-family: Arial, sans-serif; font-size: 20px;">
                        Máme radost, že máte chuť na Bitez! 🍽️
                      </span>
                    </p>
                    <p style="text-align: center;">
                      <span style="color: #646A75; font-family: Arial, sans-serif; font-size: 20px;">
                        <br />
                        Náš pan provozní se vám co nevidět ozve a naservíruje vám všechny potřebné informace pěkně na stříbrném podnose.
                      </span>
                    </p>
                  </div>
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

      <!-- Section 2: App promo -->
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:660px;" width="660"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;"><![endif]-->
      <div style="background: #FFF6EF; margin: 0 auto; border-radius: 30px; max-width: 660px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background: #FFF6EF; width: 100%; border-radius: 30px;">
          <tbody><tr><td style="direction: ltr; font-size: 0; padding: 5px 0; text-align: center;">
            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:660px;"><![endif]-->
            <div class="mj-column-per-100 outlook-group-fix" style="font-size: 0; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">

                <!-- Top spacer -->
                <tr><td style="font-size: 0; word-break: break-word;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="50" style="vertical-align:top;height:50px;"><![endif]-->
                  <div style="height: 50px;">&nbsp;</div>
                  <!--[if mso | IE]></td></tr></table><![endif]-->
                </td></tr>

                <!-- Heading: Podívejte se zatím na naši aplikaci -->
                <tr><td align="left" style="font-size: 0; padding: 15px 60px; word-break: break-word;">
                  <div style="font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 1.4; text-align: left; color: #000000;">
                    <p style="text-align: center;">
                      <span style="font-family: Arial, sans-serif; font-size: 34px; color: #4C525A;">
                        <strong>Podívejte se zatím na naši aplikaci 👀</strong>
                      </span>
                    </p>
                  </div>
                </td></tr>

                <!-- App screenshot -->
                <tr><td align="center" style="font-size: 0; padding: 15px 40px; word-break: break-word;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody><tr><td style="width: 580px;">
                      <img
                        height="auto"
                        src="https://storage.googleapis.com/bitez230491/Zdroje/bitez_app_2.png"
                        style="border: 0; display: block; outline: none; text-decoration: none; height: auto; width: 100%; font-size: 13px;"
                        width="580"
                      />
                    </td></tr></tbody>
                  </table>
                </td></tr>

                <!-- App Store badge -->
                <tr><td align="center" style="font-size: 0; padding: 20px 0; word-break: break-word;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody><tr><td style="width: 300px;">
                      <a href="https://apps.apple.com/cz/app/bitez/id6744921077" target="_blank">
                        <img
                          height="auto"
                          src="https://storage.googleapis.com/bitez230491/app-store-badge.png"
                          style="border: 0; display: block; outline: none; text-decoration: none; height: auto; width: 100%; font-size: 13px;"
                          width="300"
                        />
                      </a>
                    </td></tr></tbody>
                  </table>
                </td></tr>

                <!-- App description -->
                <tr><td align="left" style="font-size: 0; padding: 15px 60px; word-break: break-word;">
                  <div style="font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 1.4; text-align: left; color: #000000;">
                    <p style="text-align: center;">
                      <span style="color: #646A75; font-family: Arial, sans-serif; font-size: 20px;">
                        Bitez je <strong>profesionální správa sociálních sítí</strong> pro restaurace, kavárny a bary v jednoduché aplikaci.
                        Za bezkonkureční <strong>cenu 1890 Kč týdně</strong> získáte kompletní správu vašeho facebooku a instagramu.<br />
                      </span>
                    </p>
                  </div>
                </td></tr>

                <!-- Bottom spacer -->
                <tr><td style="font-size: 0; word-break: break-word;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="50" style="vertical-align:top;height:50px;"><![endif]-->
                  <div style="height: 50px;">&nbsp;</div>
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

                <!-- Unsubscribe -->
                <tr><td align="center" style="font-size: 0; padding: 0 35px; word-break: break-word;">
                  <div style="font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 1.8; text-align: center; color: #222222;">
                    <p>
                      <span style="color: #FFFFFF; font-family: Arial, sans-serif; font-size: 14px;">
                        Nechcete již nadále odebírat tyto e-maily? To nás mrzí.
                        <strong>
                          <a style="color: #FFFFFF;" href="*|UNSUB|*">
                            <span style="text-decoration: underline;">Odhlásit se můžete zde</span>.
                          </a>
                        </strong>
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
