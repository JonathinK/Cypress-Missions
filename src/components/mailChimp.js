import React from 'react';

const MailChimpForm = () => {
  return (
    <div id="mc_embed_shell" className="mailchimp">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
      <style type="text/css">
        {`
          #mc_embed_signup {
            background: inherit;
            clear: left;
            font: 14px Helvetica, Arial, sans-serif;
            width: 100%;
          }
        `}
      </style>
      <div id="mc_embed_signup" className="embed_signup">
        <form
          action="https://cypressmissions.us18.list-manage.com/subscribe/post?u=60f22b709f940de7a00575589&amp;id=354e90458a&amp;f_id=00b725e7f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll" className="signup_scroll">
            <h2>Subscribe to Cypress Newsletter</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
              />
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              <input
                type="text"
                name="b_60f22b709f940de7a00575589_354e90458a"
                tabIndex="-1"
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
                value="Subscribe"
              />
            </div>
          </div>
        </form>
      </div>
      <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      ></script>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function($) {
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[0] = 'EMAIL';
            ftypes[0] = 'email';
            fnames[1] = 'FNAME';
            ftypes[1] = 'text';
            fnames[2] = 'LNAME';
            ftypes[2] = 'text';
            fnames[3] = 'ADDRESS';
            ftypes[3] = 'address';
            fnames[4] = 'PHONE';
            ftypes[4] = 'phone';
            fnames[5] = 'BIRTHDAY';
            ftypes[5] = 'birthday';
            fnames[6] = 'MMERGE6';
            ftypes[6] = 'text';
          }(jQuery));
          var $mcj = jQuery.noConflict(true);`,
        }}
      ></script>
    </div>
  );
};

export default MailChimpForm;