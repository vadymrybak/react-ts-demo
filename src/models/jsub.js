export const JSub={
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
            "anyOf": [
                {
                    "$ref": "#/definitions/IAddress"
                },
                {
                    "properties": {
                        "x": {
                            "type": "string"
                        },
                        "y": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "x",
                        "y"
                    ],
                    "type": "object"
                }
            ]
        },
        "address2": {
            "allOf": [
                {
                    "properties": {
                        "a": {
                            "type": "number"
                        }
                    },
                    "required": [
                        "a"
                    ],
                    "type": "object"
                },
                {
                    "properties": {
                        "b": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "b"
                    ],
                    "type": "object"
                }
            ]
        },
        "lastName": {
            "type": "string"
        },
        "name": {
            "type": "string"
        },
        "type": {
            "enum": [
                "A",
                "B",
                "C"
            ],
            "type": "string"
        }
    },
    "required": [
        "address",
        "lastName"
    ],
    "type": "object"
}

