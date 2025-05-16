import type { INodeProperties } from 'n8n-workflow';

import {
	makeGetAllFields,
} from './SharedFields';

export const accountOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['account'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create an account',
				action: 'Create an account',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an account',
				action: 'Delete an account',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get an account',
				action: 'Get an account',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many accounts',
				action: 'Get many accounts',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an account',
				action: 'Update an account',
			},
		],
		default: 'create',
	},
];

export const accountFields: INodeProperties[] = [
	// ----------------------------------------
	//            account: create
	// ----------------------------------------
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['create'],
			},
		},
	},
    {
		displayName: 'Type',
		name: 'account_type',
		type: 'options',
        required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['create'],
			},
		},
        options: [
            {
                name: "",
                value: ""
            },
            {
                name: "Customer",
                value: "Customer"
            },
            {
                name: "Others",
                value: "Others"
            },
            {
                name: "Partner",
                value: "Partner"
            },
            {
                name: "Prospect",
                value: "Prospect"
            },
            {
                name: "Supplier",
                value: "Supplier"
            },

        ]
	},
    {
		displayName: 'Industry',
		name: 'industry',
		type: 'options',
        required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['create'],
			},
		},
        options: [
            {
                name: "",
                value: ""
            },
            {
                name: "Agro",
                value: "Agro"
            },
            {
                name: "Automobile",
                value: "Automobile"
            },
            {
                name: "Construction Materials",
                value: "Construction Materials"
            },
            {
                name: "Consumption",
                value: "Consumption"
            },
            {
                name: "E-Commerce",
                value: "e-Commerce"
            },
            {
                name: "Education",
                value: "Education"
            },
            {
                name: "Electronics",
                value: "Electronics"
            },
            {
                name: "Energy",
                value: "Energy"
            },
            {
                name: "Engineering",
                value: "Engineering"
            },
            {
                name: "Fashion",
                value: "Fashion"
            },
            {
                name: "Finance",
                value: "Finance"
            },
            {
                name: "Food",
                value: "Food"
            },
            {
                name: "Government",
                value: "Government"
            },
            {
                name: "Health",
                value: "Health"
            },
            {
                name: "Home",
                value: "Home"
            },
            {
                name: "Hotel",
                value: "Hotel"
            },
            {
                name: "ICT",
                value: "ICT"
            },
            {
                name: "Insurance",
                value: "Insurance"
            },
            {
                name: "Machine",
                value: "Machine"
            },
            {
                name: "Non-Profit",
                value: "Non-Profit"
            },
            {
                name: "Other",
                value: "Other"
            },
            {
                name: "Packaging",
                value: "Packaging"
            },
            {
                name: "Petrochemical",
                value: "Petrochemical"
            },
            {
                name: "Pharmaceutical",
                value: "Pharmaceutical"
            },
            {
                name: "Printing",
                value: "Printing"
            },
            {
                name: "Property",
                value: "Property"
            },
            {
                name: "Restaurant",
                value: "Restaurant"
            },
            {
                name: "Retail",
                value: "Retail"
            },
            {
                name: "Tourism",
                value: "Tourism"
            },
            {
                name: "Transportation",
                value: "Transportation"
            }
        ],
	},
    {
		displayName: 'Status',
		name: 'status',
		type: 'options',
        required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['create'],
			},
		},
        options: [
            {
                name: "",
                value: ""
            },
            {
                name: "Active",
                value: "Active"
            },
            {
                name: "Approved",
                value: "Approved"
            },
            {
                name: "Collection",
                value: "Collection"
            },
            {
                name: "Inactive",
                value: "Inactive"
            },
            {
                name: "Pending",
                value: "Pending"
            },
            {
                name: "Rejected",
                value: "Rejected"
            },
            {
                name: "Suspend",
                value: "Suspend"
            }
        ],
	},
    {
        displayName: 'Assigned To Name or ID',
        name: 'assigned_user_id',
        type: 'options',
        required: true,
        description:
            'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
        typeOptions: {
            loadOptionsMethod: 'getUserList',
        },
        default: '',
        displayOptions: {
			show: {
				resource: ['account'],
				operation: ['create'],
			},
		},
    },
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Email (Primary)',
				name: 'email1',
				type: 'string',
				default: '',
			},
            {
				displayName: 'Office Phone',
				name: 'phone_work',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
		],
	},

	// ----------------------------------------
	//             account: delete
	// ----------------------------------------
	{
		displayName: 'Account ID',
		name: 'accountId',
		description: 'ID of the account to delete. Can be found at the end of the URL.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['delete'],
			},
		},
	},

	// ----------------------------------------
	//               account: get
	// ----------------------------------------
	{
		displayName: 'Account ID',
		name: 'accountId',
		description: 'ID of the account to retrieve. Can be found at the end of the URL.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['get'],
			},
		},
	},

	// ----------------------------------------
	//             account: getAll
	// ----------------------------------------
	...makeGetAllFields('account'),

	// ----------------------------------------
	//             account: update
	// ----------------------------------------
	{
		displayName: 'Account ID',
		name: 'accountId',
		description: 'ID of the account to update. Can be found at the end of the URL.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['update'],
			},
		},
	},
    {
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['update'],
			},
		},
	},
    {
		displayName: 'Type',
		name: 'account_type',
		type: 'options',
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['update'],
			},
		},
        options: [
            {
                name: "",
                value: ""
            },
            {
                name: "Customer",
                value: "Customer"
            },
            {
                name: "Others",
                value: "Others"
            },
            {
                name: "Partner",
                value: "Partner"
            },
            {
                name: "Prospect",
                value: "Prospect"
            },
            {
                name: "Supplier",
                value: "Supplier"
            }
        ]
	},
    {
		displayName: 'Industry',
		name: 'industry',
		type: 'options',
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['update'],
			},
		},
        options: [
            {
                name: "",
                value: ""
            },
            {
                name: "Agro",
                value: "Agro"
            },
            {
                name: "Automobile",
                value: "Automobile"
            },
            {
                name: "Construction Materials",
                value: "Construction Materials"
            },
            {
                name: "Consumption",
                value: "Consumption"
            },
            {
                name: "E-Commerce",
                value: "e-Commerce"
            },
            {
                name: "Education",
                value: "Education"
            },
            {
                name: "Electronics",
                value: "Electronics"
            },
            {
                name: "Energy",
                value: "Energy"
            },
            {
                name: "Engineering",
                value: "Engineering"
            },
            {
                name: "Fashion",
                value: "Fashion"
            },
            {
                name: "Finance",
                value: "Finance"
            },
            {
                name: "Food",
                value: "Food"
            },
            {
                name: "Government",
                value: "Government"
            },
            {
                name: "Health",
                value: "Health"
            },
            {
                name: "Home",
                value: "Home"
            },
            {
                name: "Hotel",
                value: "Hotel"
            },
            {
                name: "ICT",
                value: "ICT"
            },
            {
                name: "Insurance",
                value: "Insurance"
            },
            {
                name: "Machine",
                value: "Machine"
            },
            {
                name: "Non-Profit",
                value: "Non-Profit"
            },
            {
                name: "Other",
                value: "Other"
            },
            {
                name: "Packaging",
                value: "Packaging"
            },
            {
                name: "Petrochemical",
                value: "Petrochemical"
            },
            {
                name: "Pharmaceutical",
                value: "Pharmaceutical"
            },
            {
                name: "Printing",
                value: "Printing"
            },
            {
                name: "Property",
                value: "Property"
            },
            {
                name: "Restaurant",
                value: "Restaurant"
            },
            {
                name: "Retail",
                value: "Retail"
            },
            {
                name: "Tourism",
                value: "Tourism"
            },
            {
                name: "Transportation",
                value: "Transportation"
            }
        ],
	},
    {
		displayName: 'Status',
		name: 'status',
		type: 'options',
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['update'],
			},
		},
        options: [
            {
                name: "",
                value: ""
            },
            {
                name: "Active",
                value: "Active"
            },
            {
                name: "Approved",
                value: "Approved"
            },
            {
                name: "Collection",
                value: "Collection"
            },
            {
                name: "Inactive",
                value: "Inactive"
            },
            {
                name: "Pending",
                value: "Pending"
            },
            {
                name: "Rejected",
                value: "Rejected"
            },
            {
                name: "Suspend",
                value: "Suspend"
            }
        ],
	},
    {
        displayName: 'Assigned To Name or ID',
        name: 'assigned_user_id',
        type: 'options',
        description:
            'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
        typeOptions: {
            loadOptionsMethod: 'getUserList',
        },
        default: '',
        displayOptions: {
			show: {
				resource: ['account'],
				operation: ['update'],
			},
		},
    },
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Email (Primary)',
				name: 'email1',
				type: 'string',
				default: '',
			},
            {
				displayName: 'Office Phone',
				name: 'phone_work',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
		],
	},
];
