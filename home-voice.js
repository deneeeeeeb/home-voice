const googlehome = require('google-home-notifier')
const language = 'ja'

googlehome.device('Google-Home', language)


googlehome.notify(process.argv[2], function(res) {
  console.log(res);
});
