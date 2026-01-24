"use client"

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Icons} from "@/components/icons";
import {domainFormData, domainFormSchema} from "@/lib/validations/domain";

interface WhoIsFormProps {
  onResult: (result: { domain: string; whois: string }) => void;
}

export default function WhoIsForm({ onResult }: WhoIsFormProps) {
  const [isSaving, setIsSaving] = useState<boolean>(false)

  async function onSubmit(data: domainFormData) {
    setIsSaving(true);
    const res = await fetch(`/api/whois?domain=${encodeURIComponent(data.domain)}`);
    const result = await res.json();

    console.log("WhoIs Result:");
    console.log(result)

    onResult(result);

    reset();
    setIsSaving(false);
  }

  const form = useForm<domainFormData>({
    resolver: zodResolver(domainFormSchema),
    defaultValues: {
      domain: "",
    },
  })
  const {reset} = form;

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <FormField
              control={form.control}
              name="domain"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Domain</FormLabel>
                  <FormControl>
                    <Input
                      id="domain"
                      placeholder="example.com"
                      className="col-span-3"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" disabled={isSaving} className="w-full mt-4">
            {isSaving && (
              <Icons.loader2 className="mr-2 h-4 w-4 animate-spin"/>
            )}
            Generate
            <Icons.start className="mr-2 h-4 w-4"/>
          </Button>
        </form>
      </Form>
    </>
  )
}