const functions = require('firebase-functions');
const exec = require('child_process').exec;
const { updateStatus } = require('im-doin');

// FIXME: rename our function to be im-doin themed
exports.helloWorld = functions.https.onRequest((req, res) => {
  console.log('reqbody', req.body);

  // TODO: extract this into an optional filter
  const userIds = ['U06TX7TQV', 'U2R30LACE'];
  if (!userIds.includes(req.body.user_id)) throw new Error('Only Drew is allowed to update the website, sorry!');

  // FIXME: shit. process.exi() on our module is shitting up the return.
  // remove process.exit in im-doin, and get this returning correctly
  try {
    updateStatus(
      { message: message[0], background: message[1] },
      {
        apiKey: functions.config().imdoin.key,
        authDomain: `${functions.config().imdoin.db}.firebaseapp.com`,
        databaseURL: `https://${functions.config().imdoin.db}.firebaseio.com`,
        projectId: `${functions.config().imdoin.db}`,
        storageBucket: `${functions.config().imdoin.db}.appspot.com`,
        messagingSenderId: functions.config().imdoin.sender,
        password: functions.config().imdoin.password,
        email: functions.config().imdoin.email
      }
    );
  } catch (e) {
    console.log('hm, an error', err);
  }

  return res.send({ text: 'Success... (probably) check <https://one19.codes>'})
});
