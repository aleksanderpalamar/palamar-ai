"use client";

import * as z from "zod";
import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";

import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ConversationPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    }
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof formSchema>) => { 
    form.reset()   
    console.log(values)    
  }

  return ( 
    <div>
      <Heading 
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6
              focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField 
                name="prompt"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="p-0 m-0">
                      <Input 
                        {...field}
                        placeholder="How can I help you today?"
                        disabled={isLoading}
                        autoComplete="off"
                        className="border-0 outline-none focus-visible:ring-0
                        focus-visible:ring-transparent"                        
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button 
                className="col-span-12 lg:col-span-2 bg-violet-500/10 text-violet-500 hover:bg-violet-500/20 w-full"                
                disabled={isLoading}
              >
                Generate
              </Button>             
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          Message content goes here
        </div>
      </div>
    </div>
   );
}
 
export default ConversationPage;