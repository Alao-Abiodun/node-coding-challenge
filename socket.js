let io;

module.exports = {
	init: (httpServer) => {
		require('socket.io')(httpServer);
		return io;
	},

	getIO: () => {
		if (!io) {
			throw new Error('socket not initialized');
		}
		return io;
	},
};
