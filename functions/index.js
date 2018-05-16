const functions = require('firebase-functions');
const { updateStatus } = require('im-doin');

// FIXME: rename our function to be im-doin themed
exports.helloWorld = functions.https.onRequest((req, res) => {
  console.log('reqbody', req.body);

  // TODO: extract this into an optional filter
  const userIds = ['U06TX7TQV', 'U2R30LACE'];
  if (!userIds.includes(req.body.user_id)) throw new Error('Only Drew is allowed to update the website, sorry!');

  const message = req.body.text.split(/\s-.{1}\s/ig);
  const messageParams = { message: message[0] };

  const backgroundParam = /\s-b{1}\s(\w*)/ig.exec(req.body.text);
  if (backgroundParam) messageParams.background = backgroundParam[1];

  const textParam = /\s-t{1}\s(\w*)/ig.exec(req.body.text);
  if (textParam) messageParams.text = textParam[1];

  // TODO: handle errors instead of just jamming on the saxaphone here.
  // FIXME: longer process.exit wait, and implement async
  updateStatus(
    messageParams,
    {
      apiKey: functions.config().imdoin.key,
      authDomain: `${functions.config().imdoin.db}.firebaseapp.com`,
      databaseURL: `https://${functions.config().imdoin.db}.firebaseio.com`,
      projectId: `${functions.config().imdoin.db}`,
      storageBucket: `${functions.config().imdoin.db}.appspot.com`,
      messagingSenderId: functions.config().imdoin.sender,
      password: functions.config().imdoin.password,
      email: functions.config().imdoin.email
    },
    () => setTimeout(() => process.exit(0), 10)
  );

  return res.send({ text: 'Success... (probably) check <https://one19.codes>'})
});
