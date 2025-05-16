import type { INodeProperties } from 'n8n-workflow';

import {
	makeGetAllFields,
} from './SharedFields';

export const leadOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['lead'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a lead',
				action: 'Create a lead',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a lead',
				action: 'Delete a lead',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a lead',
				action: 'Get a lead',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many leads',
				action: 'Get many leads',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a lead',
				action: 'Update a lead',
			},
		],
		default: 'create',
	},
];

export const leadFields: INodeProperties[] = [
	// ----------------------------------------
	//             lead: create
	// ----------------------------------------
    {
		displayName: 'Salutation',
		name: 'salutation',
		type: 'options',
		default: '',
		displayOptions: {
			show: {
				resource: ['lead'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: '',
				value: '',
			},
			{
				name: "Asst.",
				value: "Asst.",
			},
			{
				name: "Dr.",
				value: "Dr.",
			},
			{
				name: "K.",
				value: "K.",
			},
			{
				name: "Mr.",
				value: "Mr.",
			},
			{
				name: "Mrs.",
				value: "Mrs.",
			},
			{
				name: "Ms.",
				value: "Ms.",
			},
			{
				name: "Prof.",
				value: "Prof.",
			},
			{
				name: "คุณ",
				value: "คุณ",
			},
			{
				name: "ดร.",
				value: "ดร.",
			},
			{
				name: "นาง",
				value: "นาง",
			},
			{
				name: "นางสาว",
				value: "นางสาว",
			},
			{
				name: "นาย",
				value: "นาย",
			},
			{
				name: "รศ.",
				value: "รศ.",
			},
			{
				name: "ศจ.",
				value: "ศจ.",
			}
		]
	},
	{
		displayName: 'First Name',
		name: 'first_name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['lead'],
				operation: ['create'],
			},
		},
	},
    {
		displayName: 'Status',
		name: 'status',
		type: 'options',
		default: '',
		displayOptions: {
			show: {
				resource: ['lead'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: "",
				value: ""
			},
			{
				name: "Assigned",
				value: "Assigned"
			},
			{
				name: "Converted",
				value: "Converted"
			},
			{
				name: "Dead",
				value: "Dead"
			},
			{
				name: "In Process",
				value: "In Process"
			},
			{
				name: "New",
				value: "New"
			},
			{
				name: "Recycled",
				value: "Recycled"
			},
			{
				name: "Registered",
				value: "Registered"
			}
		]
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['lead'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Account Name',
				name: 'account_name',
				type: 'string',
				default: '',
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
				displayName: 'Department',
				name: 'department',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Email (Primary)',
				name: 'email1',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Last Name',
				name: 'last_name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Lead Source',
				name: 'lead_source',
				type: 'options',
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
				],
				default: '',
			},
			{
				displayName: 'Mobile',
				name: 'phone_mobile',
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
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
			},
		],
	},

	// ----------------------------------------
	//             lead: delete
	// ----------------------------------------
	{
		displayName: 'Lead ID',
		name: 'leadId',
		description: 'ID of the lead to delete',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['lead'],
				operation: ['delete'],
			},
		},
	},

	// ----------------------------------------
	//               lead: get
	// ----------------------------------------
	{
		displayName: 'Lead ID',
		name: 'leadId',
		description: 'ID of the lead to retrieve',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['lead'],
				operation: ['get'],
			},
		},
	},

	// ----------------------------------------
	//             lead: getAll
	// ----------------------------------------
	...makeGetAllFields('lead'),

	// ----------------------------------------
	//             lead: update
	// ----------------------------------------
	{
		displayName: 'Lead ID',
		name: 'leadId',
		description: 'ID of the lead to update',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['lead'],
				operation: ['update'],
			},
		},
	},
    {
		displayName: 'Salutation',
		name: 'salutation',
		type: 'options',
		default: '',
		displayOptions: {
			show: {
				resource: ['lead'],
				operation: ['update'],
			},
		},
		options: [
			{
				name: '',
				value: '',
			},
			{
				name: "Asst.",
				value: "Asst.",
			},
			{
				name: "Dr.",
				value: "Dr.",
			},
			{
				name: "K.",
				value: "K.",
			},
			{
				name: "Mr.",
				value: "Mr.",
			},
			{
				name: "Mrs.",
				value: "Mrs.",
			},
			{
				name: "Ms.",
				value: "Ms.",
			},
			{
				name: "Prof.",
				value: "Prof.",
			},
			{
				name: "คุณ",
				value: "คุณ",
			},
			{
				name: "ดร.",
				value: "ดร.",
			},
			{
				name: "นาง",
				value: "นาง",
			},
			{
				name: "นางสาว",
				value: "นางสาว",
			},
			{
				name: "นาย",
				value: "นาย",
			},
			{
				name: "รศ.",
				value: "รศ.",
			},
			{
				name: "ศจ.",
				value: "ศจ.",
			}
		]
	},
	{
		displayName: 'First Name',
		name: 'first_name',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['lead'],
				operation: ['update'],
			},
		},
	},
    {
		displayName: 'Status',
		name: 'status',
		type: 'options',
		default: '',
		displayOptions: {
			show: {
				resource: ['lead'],
				operation: ['update'],
			},
		},
		options: [
			{
				name: "",
				value: ""
			},
			{
				name: "Assigned",
				value: "Assigned"
			},
			{
				name: "Converted",
				value: "Converted"
			},
			{
				name: "Dead",
				value: "Dead"
			},
			{
				name: "In Process",
				value: "In Process"
			},
			{
				name: "New",
				value: "New"
			},
			{
				name: "Recycled",
				value: "Recycled"
			},
			{
				name: "Registered",
				value: "Registered"
			}
		]
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['lead'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Account Name',
				name: 'account_name',
				type: 'string',
				default: '',
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
				displayName: 'Department',
				name: 'department',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Email (Primary)',
				name: 'email1',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Last Name',
				name: 'last_name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Lead Source',
				name: 'lead_source',
				type: 'options',
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
				],
				default: '',
			},
			{
				displayName: 'Mobile',
				name: 'phone_mobile',
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
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
			},
		],
	},

];
