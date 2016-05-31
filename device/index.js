const ibmiotf = require('ibmiotf')
const config = {
	org: 'quickstart',
	id: process.env.ID,
	type: 'dummy'
}

const client = new ibmiotf.IotfDevice(config)
client.connect()

client.on('connect', () => {
	console.log('connected')
	loopPublish(0, 1, 1)
})

const loopPublish = (i, n, ndir) => {
	const oob = n >= 10 || n <= 0
	if(oob) ndir *= -1
	n = n + ndir

	//console.log(`i ${i}\nn ${n}\nndir ${ndir}`)
	publish({
		random: Math.random() * 50,
		curve: Math.sin(i),
		number: n
	})

	i++
	setTimeout(() => {
		loopPublish(i, n, ndir)
	}, 1000)
}

const publish = data => {
	const deviceData = {d: data}
	client.publish('tick', 'json', JSON.stringify(deviceData))
}
