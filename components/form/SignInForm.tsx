"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";

import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import {  redirect, useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().min(1, "Email is Required").email("Invalid Email!"),
  password: z
    .string()
    .min(1, "Password is Required")
    .min(8, "Minimum 8 characters are required"),
});
export function SignInForm() {
  // ...
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:""
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // console.log(values);
    const signInData=await signIn('credentials',{
      email:values.email,
      password:values.password,
      redirect:false
    })

    console.log(signInData)

    // if(signInData){
    //   router.push('/')
    // }

    if(signInData?.error){
      
      console.error("Sign-in error:", signInData.error);
      form.setError("password", {
        message: "Invalid Credentials!",
      });
    }
    else{
      router.push('/')
    }

  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 border-1 border-gray-400 pt-10 pl-10 pr-10 pb-4 rounded-md bg-slate-100"
      >
        <div>
          <h1 className="text-center text-gray-700 font-semibold text-xl">
            Login
          </h1>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="py-2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="py-2">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="********" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="mx-24  mt-2 mb-2 text-lg">
            Login
          </Button>

          <p className="text-sm mt-3 text-center">
            Don't Have an Account?{" "}
            <Link href="/register" className="text-bold text-lg text-blue-600">
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
}
