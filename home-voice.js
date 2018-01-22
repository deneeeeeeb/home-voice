const googlehome = require('google-home-notifier')
const language = 'ja'

googlehome.device('Google-Home', language)
ary = process.argv.slice(2,process.argv.length)
string=ary.join(',')

googlehome.notify(string, function(res) {
  console.log(res);
});
