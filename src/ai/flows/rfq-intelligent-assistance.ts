'use server';

/**
 * @fileOverview Provides intelligent assistance for the RFQ (Request for Quote) form.
 *
 * This file defines a Genkit flow that enhances user submissions by suggesting optimal wording,
 * performing completeness checks, and automatically adding technical clarifications based on
 * available information such as sector and uploaded files.
 *
 * @exports rfqIntelligentAssistance - The main function to process RFQ form data and provide suggestions.
 * @exports RfqIntelligentAssistanceInput - The input type for the rfqIntelligentAssistance function.
 * @exports RfqIntelligentAssistanceOutput - The output type for the rfqIntelligentAssistance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RfqIntelligentAssistanceInputSchema = z.object({
  name: z.string().describe('Name of the person submitting the RFQ.'),
  company: z.string().describe('Company of the person submitting the RFQ.'),
  email: z.string().email().describe('Email address of the person submitting the RFQ.'),
  phone: z.string().describe('Phone number of the person submitting the RFQ.'),
  sector: z.string().describe('Industry sector related to the RFQ.'),
  message: z.string().describe('Detailed message describing the RFQ requirements.'),
  fileDataUri: z
    .string()
    .optional()
    .describe(
      "Optional file upload as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'"
    ),
});

export type RfqIntelligentAssistanceInput = z.infer<typeof RfqIntelligentAssistanceInputSchema>;

const RfqIntelligentAssistanceOutputSchema = z.object({
  suggestions: z.string().describe('AI-generated suggestions for improving the RFQ message.'),
});

export type RfqIntelligentAssistanceOutput = z.infer<typeof RfqIntelligentAssistanceOutputSchema>;

export async function rfqIntelligentAssistance(
  input: RfqIntelligentAssistanceInput
): Promise<RfqIntelligentAssistanceOutput> {
  return rfqIntelligentAssistanceFlow(input);
}

const rfqIntelligentAssistancePrompt = ai.definePrompt({
  name: 'rfqIntelligentAssistancePrompt',
  input: {schema: RfqIntelligentAssistanceInputSchema},
  output: {schema: RfqIntelligentAssistanceOutputSchema},
  prompt: `You are an AI assistant specializing in refining Request for Quote (RFQ) messages. Review the user's input and suggest improvements to enhance clarity, completeness, and technical accuracy.

Specifically:

- Suggest rephrasing for better clarity.
- Identify any missing information based on the industry sector and request it.
- If a file was uploaded, analyze its content and incorporate relevant technical details into the message.

Here is the RFQ information:

Name: {{{name}}}
Company: {{{company}}}
Email: {{{email}}}
Phone: {{{phone}}}
Sector: {{{sector}}}
Message: {{{message}}}
{{#if fileDataUri}}
File Content: {{media url=fileDataUri}}
{{/if}}

Provide your suggestions in a concise paragraph.
`,
});

const rfqIntelligentAssistanceFlow = ai.defineFlow(
  {
    name: 'rfqIntelligentAssistanceFlow',
    inputSchema: RfqIntelligentAssistanceInputSchema,
    outputSchema: RfqIntelligentAssistanceOutputSchema,
  },
  async input => {
    const {output} = await rfqIntelligentAssistancePrompt(input);
    return output!;
  }
);
