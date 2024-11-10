export function getErrorMessage(res: any) {
	if (res.message) {
		if (Array.isArray(res.message)) {
			return res.message[0];
		}
		return res.message
	}
	return "Unkown error occured."
}