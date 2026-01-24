"use client"

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import WhoIsForm from "@/app/(public)/domains/whois/whois-form";
import {useState} from "react";

interface WhoisResult {
  domain: string;
  whois: string;
}

export default function WhoIs() {
  const [result, setResult] = useState<WhoisResult | null>(null);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Who Is Lookup for Domains</CardTitle>
          <CardDescription>Type the domain in the field below to find out its corresponding host.</CardDescription>
        </CardHeader>
        <CardContent>
          <WhoIsForm onResult={setResult}/>
        </CardContent>
      </Card>

      {result && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Result for {result.domain}</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm whitespace-pre-wrap bg-gray-50 p-4 rounded overflow-x-auto">
              {result.whois}
            </pre>
          </CardContent>
        </Card>
      )}
    </>
  )
}