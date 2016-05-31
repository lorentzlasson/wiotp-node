const ibmiotf = require('ibmiotf')

const config = {
	org: 'quickstart',
	id: process.env.ID
}
const deviceId = process.env.DEVICE_ID

const client = new ibmiotf.IotfApplication(config)
client.connect()

client.on('connect', () => {
	console.log('connected')
	client.subscribeToDeviceEvents('dummy', deviceId, 'tick', 'json')
})

client.on('deviceEvent', (deviceType, deviceId, eventType, format, payload) => {
	const data = JSON.parse(payload)
	console.log(`number: ${data.d.number}`)
})
