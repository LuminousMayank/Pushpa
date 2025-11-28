'use server';

import { z } from 'zod';
import {
  rfqIntelligentAssistance,
  type RfqIntelligentAssistanceInput,
} from '@/ai/flows/rfq-intelligent-assistance';

const suggestionSchema = z.object({
  name: z.string(),
  company: z.string(),
  email: z.string().email(),
  phone: z.string(),
  sector: z.string(),
  message: z.string(),
  fileDataUri: z.string().optional(),
});

export async function getRfqSuggestions(input: RfqIntelligentAssistanceInput) {
  try {
    const validatedInput = suggestionSchema.parse(input);
    const result = await rfqIntelligentAssistance(validatedInput);
    return { success: true, suggestions: result.suggestions };
  } catch (error) {
    console.error('Error getting RFQ suggestions:', error);
    if (error instanceof z.ZodError) {
      return { success: false, error: 'Invalid form data provided.' };
    }
    return { success: false, error: 'An unexpected error occurred while generating suggestions.' };
  }
}
