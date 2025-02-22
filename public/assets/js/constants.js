export const abi = [{
        "inputs": [],
        "name": "allProducts",
        "outputs": [{
            "components": [{
                    "internalType": "string",
                    "name": "product_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "qr_messages",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "product_description",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "product_brand",
                    "type": "string"
                }
            ],
            "internalType": "struct Verification.Producers[]",
            "name": "",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "_product_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_qr_messages",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_product_description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_product_brand",
                "type": "string"
            }
        ],
        "name": "buyProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "consumer_products",
        "outputs": [{
                "internalType": "string",
                "name": "product_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "qr_messages",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "product_description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "product_brand",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "consumers_product",
        "outputs": [{
                "internalType": "string",
                "name": "product_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "qr_messages",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "product_description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "product_brand",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "string",
            "name": "_product_qr",
            "type": "string"
        }],
        "name": "getAll",
        "outputs": [{
            "components": [{
                    "internalType": "string",
                    "name": "product_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "qr_messages",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "product_description",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "product_brand",
                    "type": "string"
                }
            ],
            "internalType": "struct Verification.Producers[]",
            "name": "",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "product_mapps",
        "outputs": [{
                "internalType": "string",
                "name": "product_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "qr_messages",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "product_description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "product_brand",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "products",
        "outputs": [{
                "internalType": "string",
                "name": "product_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "qr_messages",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "product_description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "product_brand",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "_product_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_qr_messages",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_product_description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_product_brand",
                "type": "string"
            }
        ],
        "name": "store",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

export const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'