import { Julep } from '@julep/sdk';
import yaml from 'yaml';
import express from 'express';
import { a } from 'motion/react-client';

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
format: "Module 1A": {
		"name": "Comparision to Others",
		"description": "A training module to help you understand the importance of being good enough.",
		"lessons": [
			{
				"speaker": "bacche",
				"message": "Hey! I'm kind of nervous, but also excited to see how we did on the exam."
			},
			{
				"speaker": "teacher",
				"message": "Alright everyone, here are your results. Hope you’re proud of the effort you put in."
			},
			{
				"speaker": "girl",
				"message": "You scored 80%. How are you feeling about that?"
			},
			{
				"speaker": "bacche",
				"message": "Your best friend got 95%. They’re always topping the class. Honestly, it feels like we’ll never be that good. They just seem naturally smart, and we’re... not."
			},
			{
				"speaker": "user",
				"message": "Hold on—before you decide your potential and worth on the basis of this result, it's important to ask yourself a question: Did you honestly prepare hard enough with focus for the exam?",
				"choices": [
					{ "message": "Yes", "next": 1 },
					{ "message": "No", "next": 3 }
				]
			},
			{
				"speaker": "boy",
				"message": "Then it's a good time to reach out to someone who can help you look at the situation more clearly and constructively. Talk to your teacher to understand where you might’ve gone wrong. Ask your friend to share their strategy and compare yours to improve. "
			},
			{
				"speaker": "girl",
				"message": "One final thing that we must understand, that you may not always score well; We all have various flaws, things we are not at all good at, and it'd out duty to improve upon them, but, none of these define your worth, value, or ability to do something remarkable.",
				"end": true
			},
			{
				"speaker": "boy",
				"message": "So we have a clear answer, it's not lack of potential. It's  just that we didn't prepare well enough. We can do better next time."
			},
			{
				"speaker": "girl",
				"message": "One final thing that we must understand, that you may not always score well; We all have various flaws, things we are not at all good at, and it'd out duty to improve upon them, but, none of these define your worth, value, or ability to do something remarkable.",
				"end": true
			}
		]
	}
main:
- prompt:
  - role: system
    content: You are a creative story writer who can generate engaging and imaginative stories based on the given topic.
  - role: user
    content: $ f'write a module for {steps[0].input.topic}'
`;

const app = express();
const port = 3000;

app.post('/gen', async (req, res) => {
	const { prompt } = await req.body;
	if (!prompt) {
		return res.status(400).json({ error: 'Prompt is required' });
	}

	const task = await client.tasks.create(agent.id, yaml.parse(task_definition));

	const execution = await client.executions.create(task.id, {
		input: { topic: prompt },
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
		res.json({
			module: result.output.choices[0].message.content,
		});
	} else {
		res.status(500).json({ error: result.error });
	}
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
