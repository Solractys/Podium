import 'dotenv/config';

type Credencial = {
	target: string;
	username?: string;
	email?: string;
	password: string;
}

function getCredentialsFromEnv(): Credencial {
	return {
		target: process.env.TARGET || "",
		username: process.env.USERNAME,
		email: process.env.EMAIL,
		password: process.env.PASSWORD || ""
	}
}
