// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { z } from "zod"
// import Link from "next/link"
// import {toast} from 'react-hot-toast'
// // import {useRouter} from 'next/navigation'

// import { Button } from "../ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form"
// import { Input } from "../ui/input"
// import { useForm } from "react-hook-form"
// import { useRouter } from "next/navigation"


// const formSchema = z.object({
//     position:z.string().min(1,"Required field"),
//     category: z.string().min(1,"Required field"),
//     mainCategory: z.string().min(1,"Required field"),

//     company:z.string().min(1,"Required field"),
//     description:z.string().min(1,"Required field"),
//     experience:z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
//       message: "Expected number, received a string"
//     }),
//     location: z.string().min(1, "Required field"),
//     salary: z.string().min(1,"Required field"),
// })
// export function PostNewJob() {
//   // ...
//   const router=useRouter();
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//         position: "",
//         mainCategory:"",
//         category: "",
//         company: "",
//         description: "",
//         experience:"",
//         location:"",
//         salary:""
       
//     },
//   })

//   const onSubmit=async (values:z.infer<typeof formSchema>)=>{
//     // console.log(values);
//     const response=await fetch('http://localhost:3000/api/jobs',{
//       method:"POST",
//       headers:{
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify({
//         position: values.position,
//         category: values.category,
//         mainCategory: values.mainCategory,
//         company: values.company,
//         description:values.description,
//         experience: Number(values.experience),
//         location:values.location,
//         salary: values.salary

//       })
      
//     })
//     if(response.ok){
//       router.push('/admin/jobs');
//       toast.success('Job created successfully!'); 
//     }
//     else{
//       console.error("Error")
//     }
    
// }
//   return (
//     <Form {...form}  >
      
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  border-1 sm:w-7/12 border-gray-400 pt-10 pl-10 pr-10 pb-4 rounded-md bg-slate-100 mt-10" >
//        <div>
//        <h1 className="text-center text-gray-700 font-semibold text-xl">Post a new Job</h1>
//        <FormField
//           control={form.control}
          
//           name="position"
//           render={({ field }) => (
//             <FormItem className="py-2">
//               <FormLabel>Job Position</FormLabel>
//               <FormControl>
//                 <Input placeholder="E.g. Software Engineer, Marketing Associate" {...field}  />
//               </FormControl>
             
//               <FormMessage />
//             </FormItem>
//           )}
          
//         />
//         <FormField
//           control={form.control}
          
//           name="company"
//           render={({ field }) => (
//             <FormItem className="py-2">
//               <FormLabel>Company Name</FormLabel>
//               <FormControl>
//                 <Input placeholder="E.g. Capgemini, Accenture, TCS" {...field}  />
//               </FormControl>
             
//               <FormMessage />
//             </FormItem>
//           )}
          
//         />
//         <FormField
//           control={form.control}
          
//           name="description"
//           render={({ field }) => (
//             <FormItem className="py-2">
//               <FormLabel>Job description</FormLabel>
//               <FormControl>
//                 <Input placeholder="Add job description...." {...field}  />
//               </FormControl>
             
//               <FormMessage />
//             </FormItem>
//           )}
          
//         />
//         <FormField
//           control={form.control}
          
//           name="mainCategory"
//           render={({ field }) => (
//             <FormItem className="py-2">
//               <FormLabel>Job Category</FormLabel>
//               <FormControl>
//                 <Input placeholder="E.g. HR, IT Jobs, Digital Marketing" {...field}  />
//               </FormControl>
             
//               <FormMessage />
//             </FormItem>
//           )}
          
//         />
//         <FormField
//           control={form.control}
          
//           name="category"
//           render={({ field }) => (
//             <FormItem className="py-2">
//               <FormLabel>Job Type</FormLabel>
//               <FormControl>
//                 <Input placeholder="E.g. Full time, Part time, Remote" {...field}  />
//               </FormControl>
             
//               <FormMessage />
//             </FormItem>
//           )}
          
//         />
        
//         <FormField
//           control={form.control}
          
//           name="location"
//           render={({ field }) => (
//             <FormItem className="py-2">
//               <FormLabel>Location</FormLabel>
//               <FormControl>
//                 <Input placeholder="E.g. Pune, Mumbai, Banglore, etc.." {...field}  />
//               </FormControl>
             
//               <FormMessage />
//             </FormItem>
//           )}
          
//         />
//         <FormField
//           control={form.control}
          
//           name="experience"
//           render={({ field }) => (
//             <FormItem className="py-2">
//               <FormLabel>Experience in years</FormLabel>
//               <FormControl>
//                 <Input  type="number" min={0} placeholder="E.g. 2, 5, 6 (Enter experience in numbers)" {...field}  />
//               </FormControl>
             
//               <FormMessage />
//             </FormItem>
//           )}
          
//         />
//        <FormField
//           control={form.control}
          
//           name="salary"
//           render={({ field }) => (
//             <FormItem className="py-2">
//               <FormLabel>Salary</FormLabel>
//               <FormControl>
//                 <Input  placeholder="E.g.500k" {...field}  />
//               </FormControl>
             
//               <FormMessage />
//             </FormItem>
//           )}
          
//         />
        
//      <div className="flex justify-center">
//         <Button type="submit" className="mx-24  mt-2 mb-2 text-lg">POST</Button>
//         </div>
//        </div>
//       </form>
      
//     </Form>
//   )
// }

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
import {toast} from 'react-hot-toast'


const formSchema = z.object({
    position:z.string().min(1,"Required field"),
    category: z.string().min(1,"Required field"),
    mainCategory: z.string().min(1,"Required field"),

    company:z.string().min(1,"Required field"),
    description:z.string().min(1,"Required field"),
    experience:z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
      message: "Expected number, received a string"
    }),
    location: z.string().min(1, "Required field"),
    salary: z.string().min(1,"Required field"),
})
export function PostNewJob() {
  // ...
  const router=useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        position: "",
        mainCategory:"",
        category: "",
        company: "",
        description: "",
        experience:"",
        location:"",
        salary:""
       
    },
  })

  const onSubmit=async (values:z.infer<typeof formSchema>)=>{
    // console.log(values);
    const response=await fetch('http://localhost:3000/api/jobs',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        position: values.position,
        category: values.category,
        mainCategory: values.mainCategory,
        company: values.company,
        description:values.description,
        experience: Number(values.experience),
        location:values.location,
        salary: values.salary

      })
      
    })
    if(response.ok){
      router.push('/admin/jobs');
      toast.success("Job Posted Successfully!")
    }
    else{
      console.error("Error")
    }
    
}
  return (
    <Form {...form}  >
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  border-1 sm:w-7/12 border-gray-400 pt-10 pl-10 pr-10 pb-4 rounded-md bg-slate-100 mt-10" >
       <div>
       <h1 className="text-center text-gray-700 font-semibold text-xl">Post a new Job</h1>
       <FormField
          control={form.control}
          
          name="position"
          render={({ field }) => (
            <FormItem className="py-2">
              <FormLabel>Job Position</FormLabel>
              <FormControl>
                <Input placeholder="E.g. Software Engineer, Marketing Associate" {...field}  />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
          
        />
        <FormField
          control={form.control}
          
          name="company"
          render={({ field }) => (
            <FormItem className="py-2">
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="E.g. Capgemini, Accenture, TCS" {...field}  />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
          
        />
        <FormField
          control={form.control}
          
          name="description"
          render={({ field }) => (
            <FormItem className="py-2">
              <FormLabel>Job description</FormLabel>
              <FormControl>
                <Input placeholder="Add job description...." {...field}  />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
          
        />
        <FormField
          control={form.control}
          
          name="mainCategory"
          render={({ field }) => (
            <FormItem className="py-2">
              <FormLabel>Job Category</FormLabel>
              <FormControl>
                <Input placeholder="E.g. HR, IT Jobs, Digital Marketing" {...field}  />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
          
        />
        <FormField
          control={form.control}
          
          name="category"
          render={({ field }) => (
            <FormItem className="py-2">
              <FormLabel>Job Type</FormLabel>
              <FormControl>
                <Input placeholder="E.g. Full time, Part time, Remote" {...field}  />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
          
        />
        
        <FormField
          control={form.control}
          
          name="location"
          render={({ field }) => (
            <FormItem className="py-2">
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="E.g. Pune, Mumbai, Banglore, etc.." {...field}  />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
          
        />
        <FormField
          control={form.control}
          
          name="experience"
          render={({ field }) => (
            <FormItem className="py-2">
              <FormLabel>Experience in years</FormLabel>
              <FormControl>
                <Input  type="number" min={0} placeholder="E.g. 2, 5, 6 (Enter experience in numbers)" {...field}  />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
          
        />
       <FormField
          control={form.control}
          
          name="salary"
          render={({ field }) => (
            <FormItem className="py-2">
              <FormLabel>Salary</FormLabel>
              <FormControl>
                <Input  placeholder="E.g.500k" {...field}  />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
          
        />
        
     <div className="flex justify-center">
        <Button type="submit" className="mx-24  mt-2 mb-2 text-lg">POST</Button>
        </div>
       </div>
      </form>
      
    </Form>
  )
}


