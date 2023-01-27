export interface Profile {
	id: number;
	userId: string;
	company: string;
	website: string;
	logo: string;
	logoBackground: string;
	location: string;
	bio?: string;
	created_at: string;
}

export interface Job {
	id: string;
	company: string;
	logo: string;
	logoBackground: string;
	position: string;
	created_at: string;
	contract: string;
	location: string;
	website: string;
	apply: string;
	description: string;
	requirements_content: string;
	requirements_items: string[];
	role_content: string;
	role_items: string[];
}

export interface EntityWithId {
	id: string;
}

export interface AnyProp {
	[anyProp: string]: unknown;
}
