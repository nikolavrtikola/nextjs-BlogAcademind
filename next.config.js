const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_Username: 'nikola',
				mongodb_Password: 'KokiSmoki123*^',
				mongodb_cluster: 'cluster0',
				mongodb_database: 'events-dev',
			},
		};
	}

	return {
		env: {
			mongodb_Username: 'nikola',
			mongodb_Password: 'KokiSmoki123*^',
			mongodb_cluster: 'cluster0',
			mongodb_database: 'events',
		},
	};
};
