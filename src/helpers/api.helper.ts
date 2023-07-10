export function splitPayload(payload, limit = 1000, payloads = []) {
    if (payload?.limit > limit) {
        return splitPayload(
            {
                ...payload,
                limit: payload.limit - limit,
                offset: payload.offset + limit,
            },
            limit,
            [
                ...payloads,
                {
                    ...payload,
                    limit: limit,
                },
            ],
        );
    } else {
        return [...payloads, payload];
    }
}
