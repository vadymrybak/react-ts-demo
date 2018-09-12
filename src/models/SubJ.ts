export const JSub = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "definitions": {
        "IAddress": {
            "properties": {
                "apt": {
                    "type": "number"
                },
                "street": {
                    "type": "string"
                }
            },
            "required": [
                "apt",
                "street"
            ],
            "type": "object"
        }
    },
    "properties": {
        "address": {
            "$ref": "#/definitions/IAddress"
        },
        "lastName": {
            "type": "string"
        },
        "name": {
            "type": "string"
        }
    },
    "required": [
        "address",
        "lastName",
        "name"
    ],
    "type": "object"
};