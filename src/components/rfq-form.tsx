'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Sparkles, FileUp, Wand2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { getRfqSuggestions } from '@/lib/actions';
import { industries } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const rfqFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  company: z.string().min(2, { message: 'Company name is required.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  sector: z.string({ required_error: 'Please select an industry sector.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  file: z.any().optional(),
});

type RfqFormValues = z.infer<typeof rfqFormSchema>;

export function RfqForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuggestionLoading, setIsSuggestionLoading] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [fileDataUri, setFileDataUri] = useState<string | null>(null);

  const form = useForm<RfqFormValues>({
    resolver: zodResolver(rfqFormSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        setFileDataUri(loadEvent.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setFile(null);
      setFileDataUri(null);
    }
  };

  const handleGetSuggestions = async () => {
    const isFormValid = await form.trigger(['name', 'company', 'email', 'phone', 'sector', 'message']);
    if (!isFormValid) {
      toast({
        title: 'Incomplete Form',
        description: 'Please fill out all required fields before getting suggestions.',
        variant: 'destructive',
      });
      return;
    }

    setIsSuggestionLoading(true);
    setSuggestion('');
    try {
      const formData = form.getValues();
      const result = await getRfqSuggestions({
        ...formData,
        fileDataUri: fileDataUri ?? undefined,
      });

      if (result.success && result.suggestions) {
        setSuggestion(result.suggestions);
        toast({
          title: 'AI Suggestions Ready!',
          description: 'We\'ve generated suggestions to improve your RFQ.',
        });
      } else {
        throw new Error(result.error || 'Failed to get suggestions.');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsSuggestionLoading(false);
    }
  };

  const applySuggestion = () => {
    if (suggestion) {
      form.setValue('message', suggestion, { shouldValidate: true });
      setSuggestion('');
      toast({
        title: 'Suggestion Applied',
        description: 'The AI-generated message has been applied.',
      });
    }
  };

  const onSubmit = (data: RfqFormValues) => {
    setIsSubmitting(true);
    console.log(data);
    toast({
      title: 'RFQ Submitted!',
      description: 'Thank you! We have received your request and will be in touch shortly.',
    });
    // Here you would typically send the form data to your backend
    setTimeout(() => {
      form.reset();
      setFile(null);
      setFileDataUri(null);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <Card className="border-border/40">
      <CardContent className="p-6 sm:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Global Corp" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="sector"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry Sector</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a sector" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry.name} value={industry.name}>
                          {industry.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please describe your requirements in detail..."
                      rows={6}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {suggestion &amp;&amp; (
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-primary">
                    <Sparkles className="h-5 w-5" />
                    AI Suggestion
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-foreground">{suggestion}</p>
                  <Button type="button" onClick={applySuggestion} size="sm">
                    Apply Suggestion
                  </Button>
                </CardContent>
              </Card>
            )}

            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attach File (Optional)</FormLabel>
                  <FormControl>
                    <div className="relative">
                       <Input
                        type="file"
                        className="hidden"
                        id="file-upload"
                        onChange={handleFileChange}
                      />
                      <label htmlFor="file-upload" className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed rounded-lg cursor-pointer h-32 border-border hover:border-primary transition-colors">
                        <div className="text-center">
                          <FileUp className="w-10 h-10 mx-auto text-muted-foreground" />
                          <p className="mt-2 text-sm text-muted-foreground">{file ? file.name : 'Click to upload a file'}</p>
                          <p className="text-xs text-muted-foreground">{file ? `${(file.size / 1024).toFixed(2)} KB` : 'PDF, DOCX, etc.'}</p>
                        </div>
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={handleGetSuggestions}
                disabled={isSuggestionLoading}
                className="w-full sm:w-auto"
              >
                {isSuggestionLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    AI Assistant
                  </>
                )}
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit RFQ'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
