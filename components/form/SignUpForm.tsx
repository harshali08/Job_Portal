"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Link from "next/link"

import { Button } from "../ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"


const formSchema = z.object({
    userName:z.string().min(1,"Username is Required"),
  email: z.string().min(1,"Email is Required").email("Invalid Email!"),
  password:z.string().min(1,"Password is Required").min(8,"Minimum 8 characters are required")
})
export function SignUpForm() {
  // ...
  const router=useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit=async (values:z.infer<typeof formSchema>)=>{
    // console.log(values);
    const response=await fetch('api/auth/register',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        userName:values.userName,
        email:values.email,
        password:values.password

      })
      
    })
    if(response.ok){
      router.push('/signIn');
    }
    else{
      console.error("Registration error")
    }
    
}
  return (
    <Form {...form} >
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 border-1 border-gray-400 pt-10 pl-10 pr-10 pb-4 rounded-md bg-slate-100" >
       <div>
       <h1 className="text-center text-gray-700 font-semibold text-xl">Sign Up</h1>
       <FormField
          control={form.control}
          
          name="userName"
          render={({ field }) => (
            <FormItem className="py-2">
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field}  />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
          
        />
       <FormField
          control={form.control}
          
          name="email"
          render={({ field }) => (
            <FormItem className="py-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Email" {...field}  />
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
     
        <Button type="submit" className="mx-24  mt-2 mb-2 text-lg">Sign Up</Button>
     
        <p className="text-sm mt-3 text-center">Already Have an Account? <Link href='/signIn' className="text-bold text-lg text-blue-600">Login</Link></p>
       </div>
      </form>
      
    </Form>
  )
}
