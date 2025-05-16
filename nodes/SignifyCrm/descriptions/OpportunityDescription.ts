import type { INodeProperties } from 'n8n-workflow';

import {
	makeGetAllFields,
} from './SharedFields';

export const opportunityOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['opportunity'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a opportunity',
				action: 'Create a opportunity',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a opportunity',
				action: 'Delete a opportunity',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a opportunity',
				action: 'Get a opportunity',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many opportunities',
				action: 'Get many opportunities',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a opportunity',
				action: 'Update a opportunity',
			},
		],
		default: 'create',
	},
];

export const opportunityFields: INodeProperties[] = [
	// ----------------------------------------
	//             opportunity: create
	// ----------------------------------------
    {
		displayName: 'Opportunity Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['opportunity'],
				operation: ['create'],
			},
		},
	},
    {
        displayName: 'Account Name or ID',
        name: 'account_id',
        type: 'options',
        required: true,
        description:
            'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
        typeOptions: {
            loadOptionsMethod: 'getAccountList',
        },
        default: '',
        displayOptions: {
			show: {
				resource: ['opportunity'],
				operation: ['create'],
			},
		},
    },
    {
		displayName: 'Type',
		name: 'opportunity_type',
		type: 'options',
		default: '',
		displayOptions: {
			show: {
				resource: ['opportunity'],
				operation: ['create'],
			},
		},
        options: [
            {
                name: '',
                value: '',
            },
            {
                name: "Existing Business",
                value: "Existing Business",
            },
            {
                name: "New Business",
                value: "New Business",
            },
        ]
	},
    {
		displayName: 'Lead Source',
		name: 'lead_source',
		type: 'options',
		default: '',
		displayOptions: {
			show: {
				resource: ['opportunity'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: "",
				value: ""
			},
			{
				name: "Campaign",
				value: "Campaign"
			},
			{
				name: "Cold Call",
				value: "Cold Call"
			},
			{
				name: "Conference",
				value: "Conference"
			},
			{
				name: "Email",
				value: "Email"
			},
			{
				name: "Employee",
				value: "Employee"
			},
			{
				name: "Existing Customer",
				value: "Existing Customer"
			},
			{
				name: "Other",
				value: "Other"
			},
			{
				name: "Partner",
				value: "Partner"
			},
			{
				name: "Self Generated",
				value: "Self Generated"
			},
			{
				name: "Social",
				value: "Social Media"
			},
			{
				name: "Trade Show",
				value: "Trade Show"
			},
			{
				name: "Web Site",
				value: "Web Site"
			},
			{
				name: "Word of Mouth",
				value: "Word of mouth"
			}
		]
	},
    {
		displayName: 'Sales Stage',
		name: 'sales_stage',
		type: 'options',
		default: 'Prospecting',
		displayOptions: {
			show: {
				resource: ['opportunity'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Cancelled',
				value: 'Cancelled'
			},
			{
				name: 'Closed Lost',
				value: 'Closed Lost'
			},
			{
				name: 'Closed Won',
				value: 'Closed Won'
			},
			{
				name: 'Negotiation/Review',
				value: 'Negotiation/Review'
			},
			{
				name: 'Postponed',
				value: 'Postponed'
			},
			{
				name: 'Proposal/Price Quote',
				value: 'Proposal/Price Quote'
			},
			{
				name: 'Prospecting',
				value: 'Prospecting'
			},
			{
				name: 'Qualification',
				value: 'Qualification'
			}
		]
	},
    {
        displayName: 'Currency Name or ID',
        name: 'currency_id',
        type: 'options',
        description:
            'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
        typeOptions: {
            loadOptionsMethod: 'getCurrencyList',
        },
        default: '',
        displayOptions: {
			show: {
				resource: ['opportunity'],
				operation: ['create'],
			},
		},
    },
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'string',
		required: true,
		default: '0',
		displayOptions: {
			show: {
				resource: ['opportunity'],
				operation: ['create'],
			},
		},
	},
    {
        displayName: 'Expected Close Date',
        name: 'date_closed',
        type: 'dateTime',
        required: true,
        default: '',
        displayOptions: {
			show: {
				resource: ['opportunity'],
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
				resource: ['opportunity'],
				operation: ['create'],
			},
		},
		options: [
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
			},
			{
				displayName: 'Campaign Name or ID',
				name: 'campaign_id',
				type: 'options',
				description:
					'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getCampaignList',
				},
				default: '',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Next Step',
				name: 'next_step',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Probability (%)',
				name: 'probability',
				type: 'string',
				default: '10',
				description: 'Auto-filled from Sale Stage, but can be edited',
			},
		],
	},

	// ----------------------------------------
	//             opportunity: delete
	// ----------------------------------------
	{
		displayName: 'Opportunity ID',
		name: 'opportunityId',
		description: 'ID of the opportunity to delete',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['opportunity'],
				operation: ['delete'],
			},
		},
	},

	// ----------------------------------------
	//               opportunity: get
	// ----------------------------------------
	{
		displayName: 'Opportunity ID',
		name: 'opportunityId',
		description: 'ID of the opportunity to retrieve',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['opportunity'],
				operation: ['get'],
			},
		},
	},

	// ----------------------------------------
	//             opportunity: getAll
	// ----------------------------------------
	...makeGetAllFields('opportunity'),

	// ----------------------------------------
	//             opportunity: update
	// ----------------------------------------
	{
		displayName: 'Opportunity ID',
		name: 'opportunityId',
		description: 'ID of the opportunity to update',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['opportunity'],
				operation: ['update'],
			},
		},
	},
    {
		displayName: 'Opportunity Name',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['opportunity'],
				operation: ['update'],
			},
		},
	},
    {
        displayName: 'Account Name or ID',
        name: 'account_id',
        type: 'options',
        description:
            'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
        typeOptions: {
            loadOptionsMethod: 'getAccountList',
        },
        default: '',
        displayOptions: {
			show: {
				resource: ['opportunity'],
				operation: ['update'],
			},
		},
    },
    {
		displayName: 'Type',
		name: 'opportunity_type',
		type: 'options',
		default: '',
		displayOptions: {
			show: {
				resource: ['opportunity'],
				operation: ['update'],
			},
		},
        options: [
            {
                name: '',
                value: '',
            },
            {
                name: "Existing Business",
                value: "Existing Business",
            },
            {
                name: "New Business",
                value: "New Business",
            },
        ]
	},
    {
		displayName: 'Lead Source',
		name: 'lead_source',
		type: 'options',
		default: '',
		displayOptions: {
			show: {
				resource: ['opportunity'],
				operation: ['update'],
			},
		},
		options: [
			{
				name: "",
				value: ""
			},
			{
				name: "Campaign",
				value: "Campaign"
			},
			{
				name: "Cold Call",
				value: "Cold Call"
			},
			{
				name: "Conference",
				value: "Conference"
			},
			{
				name: "Email",
				value: "Email"
			},
			{
				name: "Employee",
				value: "Employee"
			},
			{
				name: "Existing Customer",
				value: "Existing Customer"
			},
			{
				name: "Other",
				value: "Other"
			},
			{
				name: "Partner",
				value: "Partner"
			},
			{
				name: "Self Generated",
				value: "Self Generated"
			},
			{
				name: "Social",
				value: "Social Media"
			},
			{
				name: "Trade Show",
				value: "Trade Show"
			},
			{
				name: "Web Site",
				value: "Web Site"
			},
			{
				name: "Word of Mouth",
				value: "Word of mouth"
			}
		]
	},
    {
		displayName: 'Sales Stage',
		name: 'sales_stage',
		type: 'options',
		default: 'Prospecting',
		displayOptions: {
			show: {
				resource: ['opportunity'],
				operation: ['update'],
			},
		},
		options: [
			{
				name: 'Cancelled',
				value: 'Cancelled'
			},
			{
				name: 'Closed Lost',
				value: 'Closed Lost'
			},
			{
				name: 'Closed Won',
				value: 'Closed Won'
			},
			{
				name: 'Negotiation/Review',
				value: 'Negotiation/Review'
			},
			{
				name: 'Postponed',
				value: 'Postponed'
			},
			{
				name: 'Proposal/Price Quote',
				value: 'Proposal/Price Quote'
			},
			{
				name: 'Prospecting',
				value: 'Prospecting'
			},
			{
				name: 'Qualification',
				value: 'Qualification'
			}
		]
	},
    {
        displayName: 'Currency Name or ID',
        name: 'currency_id',
        type: 'options',
        description:
            'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
        typeOptions: {
            loadOptionsMethod: 'getCurrencyList',
        },
        default: '',
        displayOptions: {
			show: {
				resource: ['opportunity'],
				operation: ['update'],
			},
		},
    },
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'string',
		default: '0',
		displayOptions: {
			show: {
				resource: ['opportunity'],
				operation: ['update'],
			},
		},
	},
    {
        displayName: 'Expected Close Date',
        name: 'date_closed',
        type: 'dateTime',
        default: '',
        displayOptions: {
			show: {
				resource: ['opportunity'],
				operation: ['update'],
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
				resource: ['opportunity'],
				operation: ['update'],
			},
		},
		options: [
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
			},
			{
				displayName: 'Campaign Name or ID',
				name: 'campaign_id',
				type: 'options',
				description:
					'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getCampaignList',
				},
				default: '',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Next Step',
				name: 'next_step',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Probability (%)',
				name: 'probability',
				type: 'string',
				default: '10',
				description: 'Auto-filled from Sale Stage, but can be edited',
			},
		],
	},

];
