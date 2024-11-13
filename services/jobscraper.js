const axios = require('axios');

exports.checkJobs = async (companies) => {
	const jobs = [];
	for (let company of companies) {
		const url = `https://jobs.github.com/positions.json?description=${company}`;
		const response = await axios.get(url);
		jobs.push(...response.data);
	}
	return jobs;
};