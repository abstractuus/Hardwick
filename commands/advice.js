const Discord = require('discord.js');
const request = require('superagent');
const path = require('path');

exports.run = (Client, message, args) => {
  const PmlClient = require(path.resolve(__dirname, '../core'));
  const Prismal = new PmlClient(Client, message);
  request.get('http://api.adviceslip.com/advice')
    .end((err, res) => {
      if (!err && res.status === 200) {
        try {
          JSON.parse(res.text);
        } catch (e) {
          Prismal.error('advice', 'AdviceSlip API error');
          return;
        }
        const advice = JSON.parse(res.text);
        Prismal.newPrompt({
          type: 'generic',
          title: 'Advice:',
          content: advice.slip.advice,
          thumbnail: "https://toppng.com/download/zosAhRyq14qYLFhMzkN0klG1gT7OCYXjtiDubyBZ17RMhAtiEevA7GWNbg88GFeOopM9P35Sok77EZjrcTSw8FzrcmhCnTyOOb04Z8RSV9iKHdCwYaoIffPfJn8xvvT7R0KY17wtm91MsQICGukQ58tow50Ke4amuO631KoWJ0oAqUryjjclRKJszPPampihaWhNzdf3/large",
          footer: 'Hardwick',
          color: '#FDFDFD'
        })
      } else {
        Prismal.error('advice', `REST call failed: ${err} with status code ${res.status}`);
      }
    })
}