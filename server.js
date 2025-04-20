import { Julep } from '@julep/sdk';
import yaml from 'yaml';

const client = new Julep({
	apiKey:
		'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NTAyOTk2ODksImlhdCI6MTc0NTExNTY4OSwic3ViIjoiMjU3YTRlOTAtNWZhMS01NjM4LWEwMjgtOTNmNDJmMjMxNmE5In0.gp7i3BOKzGbmHuSp6df8cBNDav29jQrfJMioMDo7eGvlD7bWoegi_-8EOsUzTfA8MCjhEcRaCs63K8i_gcWomg',
});

const agent = await client.agents.create({
	name: 'Writing Assistant',
	model: 'claude-3.5-sonnet',
	about:
		'A helpful AI assistant that specializes in writing scenarios for individuals to development their emotional intelligence.',
});

const task_definition = `
name: Story Generator
description: Generate a short story based on a given topic
main:
- prompt:
  - role: system
    content: You are a creative story writer who can generate engaging and imaginative stories based on the given topic.
  - role: user
    content: $ f'write a module for {steps[0].input.topic}'
`;

const task = await client.tasks.create(agent.id, yaml.parse(task_definition));

const execution = await client.executions.create(task.id, {
	input: { topic: 'a magical garden' },
});

// Wait for the execution to complete
let result;
while (true) {
	result = await client.executions.get(execution.id);
	if (result.status === 'succeeded' || result.status === 'failed') break;
	console.log(result.status);
	await new Promise((resolve) => setTimeout(resolve, 1000));
}

if (result.status === 'succeeded') {
	console.log(result.output.choices[0].message.content);
} else {
	console.error(`Error: ${result.error}`);
}
