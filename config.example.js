module.exports = {
  server: 'irc.snoonet.org',
  port: 6697,
  secure: true,
  selfSigned: true,	// accept self signed certificate
  certExpired: true,	// accept expired certificate
  autoConnect: true,
  userNick: '',
  userName: '',
  realName: '',
  adminNick: '',
  channels: [''],
  debug: true,
  showErrors: true,
  floodProtectionDelay: 1000,
  messageSplit: 512,

  // NickServ Password:
  nickservPassword: '',

  // Bot's opinion of the reddit feed
  snark: ['STINKY DOODY', 'PROBABLY A BAD POST', '🚽💩🧻👝🧴', '💩💩💩', '🚽💩🧻 ALERT', 'CIRCLING THE DRAIN','APPROVED BY DDSB'],

  // Reddit subs to watch
  subwatch: {
    channels: [{
      name: '#portland',
      subs: ['portland','askportland','pdx','portlandgaming','pdx4trump','cyclepdx']
    },
    {
      name: '#zxbot',
      subs: ['portland','askportland','pdx','portlandgaming','pdx4trump','cyclepdx']
    }]
  }
}
