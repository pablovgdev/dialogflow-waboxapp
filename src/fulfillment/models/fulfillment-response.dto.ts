export interface FulfillmentResponse {
	fulfillmentText?: string;
	fulfillmentMessages?: FulfillmentMessage[];
	source?: string;
	payload?: Payload;
	outputContexts?: OutputContext[];
	followupEventInput?: FollowupEventInput;
}

export interface FollowupEventInput {
	name: string;
	languageCode: string;
	parameters: Parameters;
}

export interface Parameters {
	param: string;
}

export interface FulfillmentMessage {
	card: Card;
}

export interface Card {
	title: string;
	subtitle: string;
	imageUri: string;
	buttons: Button[];
}

export interface Button {
	text: string;
	postback: string;
}

export interface OutputContext {
	name: string;
	lifespanCount: number;
	parameters: Parameters;
}

export interface Payload {
	google: Google;
	facebook: Facebook;
	slack: Facebook;
}

export interface Facebook {
	text: string;
}

export interface Google {
	expectUserResponse: boolean;
	richResponse: RichResponse;
}

export interface RichResponse {
	items: Item[];
}

export interface Item {
	simpleResponse: SimpleResponse;
}

export interface SimpleResponse {
	textToSpeech: string;
}
