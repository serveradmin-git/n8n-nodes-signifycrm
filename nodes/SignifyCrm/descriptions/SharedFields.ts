import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

import { capitalizeInitial } from '../GenericFunctions';
import type { CamelCaseResource } from '../types';

export const linkedNameFieldsOptions: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'link_name',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Value',
		name: 'link_value',
		type: 'string',
		default: '',
	},
];

export const linkNameToFieldsOptions: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'link_name',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Value',
		name: 'link_value',
		type: 'string',
		description: 'Comma-separated list of fields to be returned in the results',
		default: '',
	},
];

export const makeGetAllFields = (resource: CamelCaseResource): INodeProperties[] => {
	return [
		{
			displayName: 'Return All',
			name: 'returnAll',
			type: 'boolean',
			default: false,
			description: 'Whether to return all results or only up to a given limit',
			displayOptions: {
				show: {
					resource: [resource],
					operation: ['getAll'],
				},
			},
		},
		{
			displayName: 'Limit',
			name: 'limit',
			type: 'number',
			default: 50,
			description: 'Max number of results to return',
			typeOptions: {
				minValue: 1,
			},
			displayOptions: {
				show: {
					resource: [resource],
					operation: ['getAll'],
					returnAll: [false],
				},
			},
		},
	];
};

export const salutationOptions: INodePropertyOptions[] = [
  { name: '',        value: ''        },
  { name: 'Asst.',   value: 'Asst.'   },
  { name: 'Dr.',     value: 'Dr.'     },
  { name: 'K.',      value: 'K.'      },
  { name: 'Mr.',     value: 'Mr.'     },
  { name: 'Mrs.',    value: 'Mrs.'    },
  { name: 'Ms.',     value: 'Ms.'     },
  { name: 'Prof.',   value: 'Prof.'   },
  { name: 'คุณ',     value: 'คุณ'     },
  { name: 'ดร.',     value: 'ดร.'     },
  { name: 'นาง',     value: 'นาง'     },
  { name: 'นางสาว',  value: 'นางสาว'  },
  { name: 'นาย',     value: 'นาย'     },
  { name: 'รศ.',     value: 'รศ.'     },
  { name: 'ศจ.',     value: 'ศจ.'     },
];

export const makeCustomFieldsFixedCollection = (resource: CamelCaseResource): INodeProperties => {
	const loadOptionsMethod = `getCustom${capitalizeInitial(resource)}Fields`;

	return {
		displayName: 'Custom Fields',
		name: 'customFields',
		placeholder: 'Add Custom Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		description: 'Filter by custom fields',
		default: {},
		options: [
			{
				name: 'customFields',
				displayName: 'Custom Field',
				values: [
					{
						displayName: 'Field ID',
						name: 'fieldId',
						type: 'options',
						typeOptions: {
							loadOptionsMethod,
						},
						default: '',
						description: 'Custom field to set a value to',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Value to set on custom field',
					},
				],
			},
		],
	};
};
