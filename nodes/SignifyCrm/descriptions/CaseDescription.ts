import type { INodeProperties } from 'n8n-workflow';

import {
	makeGetAllFields,
} from './SharedFields';

export const caseOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['case'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a case',
				action: 'Create a case',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a case',
				action: 'Delete a case',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a case',
				action: 'Get a case',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many cases',
				action: 'Get many cases',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a case',
				action: 'Update a case',
			},
		],
		default: 'create',
	},
];

export const caseFields: INodeProperties[] = [
	// ----------------------------------------
	//             case: create
	// ----------------------------------------
    {
		displayName: 'Subject Name',
		name: 'subject',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['case'],
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
				resource: ['case'],
				operation: ['create'],
			},
		},
    },
    {
		displayName: 'Status',
		name: 'status',
		type: 'options',
		default: 'New',
		displayOptions: {
			show: {
				resource: ['case'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: "Approved",
				value: "Approved"
			},
			{
				name: "Assigned",
				value: "Assigned"
			},
			{
				name: "Closed",
				value: "Closed"
			},
			{
				name: "Duplicate",
				value: "Duplicate"
			},
			{
				name: "New",
				value: "New"
			},
			{
				name: "Onsite",
				value: "Onsite"
			},
			{
				name: "Pending Input",
				value: "Pending Input"
			},
			{
				name: "Pending Test",
				value: "Pending Test"
			},
			{
				name: "Rejected",
				value: "Rejected"
			},
			{
				name: "Resolved",
				value: "Resolved"
			}
		]
	},
    {
		displayName: 'Type',
		name: 'type',
		type: 'options',
		default: 'Question',
		displayOptions: {
			show: {
				resource: ['case'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: "Change Request",
				value: "Change Request"
			},
			{
				name: "Consulting Service",
				value: "Consulting Service"
			},
			{
				name: "DataUpdate",
				value: "Data Update / Archive"
			},
			{
				name: "Defect",
				value: "Defect"
			},
			{
				name: "Infrastructure",
				value: "Infrastructure"
			},
			{
				name: "KM Document",
				value: "KM Document"
			},
			{
				name: "Project",
				value: "Project"
			},
			{
				name: "Question",
				value: "Question"
			},
			{
				name: "Remove Subscription",
				value: "Remove Subscription"
			},
			{
				name: "Security",
				value: "User Security"
			},
			{
				name: "ServerDown",
				value: "Server Down"
			},
			{
				name: "SetupProblem",
				value: "Setup Problem"
			},
			{
				name: "Subscription",
				value: "Add Subscription"
			}
		]
	},
    {
        displayName: 'Request Date',
        name: 'request_date',
        type: 'dateTime',
        required: true,
        default: '={{ $now }}',
        displayOptions: {
			show: {
				resource: ['case'],
				operation: ['create'],
			},
		},
    },
    {
        displayName: 'Due Date',
        name: 'due_date',
        type: 'dateTime',
        required: true,
        default: '',
        displayOptions: {
			show: {
				resource: ['case'],
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
				resource: ['case'],
				operation: ['create'],
			},
		},
		options: [
            {
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
            {
				displayName: 'Contact Name or ID',
				name: 'contact_id',
				type: 'options',
				description:
					'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getContactList',
				},
				default: '',
			},
            {
				displayName: 'Opportunity Name or ID',
				name: 'opportunity_id',
				type: 'options',
				description:
					'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getOpportunityList',
				},
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
		],
	},

	// ----------------------------------------
	//             case: delete
	// ----------------------------------------
	{
		displayName: 'Case ID',
		name: 'caseId',
		description: 'ID of the case to delete',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['case'],
				operation: ['delete'],
			},
		},
	},

	// ----------------------------------------
	//               case: get
	// ----------------------------------------
	{
		displayName: 'Case ID',
		name: 'caseId',
		description: 'ID of the case to retrieve',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['case'],
				operation: ['get'],
			},
		},
	},

	// ----------------------------------------
	//             case: getAll
	// ----------------------------------------
	...makeGetAllFields('case'),

	// ----------------------------------------
	//             case: update
	// ----------------------------------------
	{
		displayName: 'Case ID',
		name: 'caseId',
		description: 'ID of the case to update',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['case'],
				operation: ['update'],
			},
		},
	},
    {
		displayName: 'Subject Name',
		name: 'subject',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['case'],
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
				resource: ['case'],
				operation: ['update'],
			},
		},
    },
    {
		displayName: 'Status',
		name: 'status',
		type: 'options',
		default: 'New',
		displayOptions: {
			show: {
				resource: ['case'],
				operation: ['update'],
			},
		},
		options: [
			{
				name: "Approved",
				value: "Approved"
			},
			{
				name: "Assigned",
				value: "Assigned"
			},
			{
				name: "Closed",
				value: "Closed"
			},
			{
				name: "Duplicate",
				value: "Duplicate"
			},
			{
				name: "New",
				value: "New"
			},
			{
				name: "Onsite",
				value: "Onsite"
			},
			{
				name: "Pending Input",
				value: "Pending Input"
			},
			{
				name: "Pending Test",
				value: "Pending Test"
			},
			{
				name: "Rejected",
				value: "Rejected"
			},
			{
				name: "Resolved",
				value: "Resolved"
			}
		]
	},
	{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			default: 'Question',
			displayOptions: {
				show: {
					resource: ['case'],
					operation: ['update'],
				},
			},
			options: [
				{
					name: "Change Request",
					value: "Change Request"
				},
				{
					name: "Consulting Service",
					value: "Consulting Service"
				},
				{
					name: "DataUpdate",
					value: "Data Update / Archive"
				},
				{
					name: "Defect",
					value: "Defect"
				},
				{
					name: "Infrastructure",
					value: "Infrastructure"
				},
				{
					name: "KM Document",
					value: "KM Document"
				},
				{
					name: "Project",
					value: "Project"
				},
				{
					name: "Question",
					value: "Question"
				},
				{
					name: "Remove Subscription",
					value: "Remove Subscription"
				},
				{
					name: "Security",
					value: "User Security"
				},
				{
					name: "ServerDown",
					value: "Server Down"
				},
				{
					name: "SetupProblem",
					value: "Setup Problem"
				},
				{
					name: "Subscription",
					value: "Add Subscription"
				}
			]
		},
    {
        displayName: 'Request Date',
        name: 'request_date',
        type: 'dateTime',
        default: '={{ $now }}',
        displayOptions: {
			show: {
				resource: ['case'],
				operation: ['update'],
			},
		},
    },
    {
        displayName: 'Due Date',
        name: 'due_date',
        type: 'dateTime',
        default: '',
        displayOptions: {
			show: {
				resource: ['case'],
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
				resource: ['case'],
				operation: ['update'],
			},
		},
		options: [
            {
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
            {
				displayName: 'Contact Name or ID',
				name: 'contact_id',
				type: 'options',
				description:
					'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getContactList',
				},
				default: '',
			},
            {
				displayName: 'Opportunity Name or ID',
				name: 'opportunity_id',
				type: 'options',
				description:
					'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getOpportunityList',
				},
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
		],
	},

];
