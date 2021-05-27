const protooPort = 443;
const subdomain = 'stream.';

// if (window.location.hostname === 'test.mediasoup.org')
//	protooPort = 4444;

export function getProtooUrl({ roomId, peerId })
{
	const hostname = subdomain.concat(window.location.hostname.substring(window.location.hostname.lastIndexOf('.', window.location.hostname.lastIndexOf('.') - 1) + 1));

	return `wss://${hostname}:${protooPort}/?roomId=${roomId}&peerId=${peerId}`;
}
