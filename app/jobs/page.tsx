import JobComp from "@/components/JobComp";
import SingleJobComp from "@/components/SingleJobComp";
import React from "react";

const page = () => {
  return (
    <div>
      <JobComp
        position="Sr. Frontend Engineer"
        company="Capgemini"
        category="full time"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ."
        experience={2}
        salary="180-250"
        posted={2}
      />
            <JobComp
        position="Sr. Backend Engineer"
        company="Accenture"
        category="part time"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ."
        experience={2}
        salary="180-250"
        posted={2}
      />
      <JobComp
        position="Sr. Frontend Engineer"
        company="Capgemini"
        category="full-time"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ."
        experience={2}
        salary="180-250"
        posted={2}
      />
      <JobComp
        position="Sr. Frontend Engineer"
        company="Capgemini"
        category="Remote"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ."
       experience={2}
        salary="180-250"
        posted={2}
      />
            <JobComp
        position="Sr. Frontend Engineer"
        company="Capgemini"
        category="Remote"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ."
        experience={2}
        salary="180-250"
        posted={2}
      />
       
    </div>
  );
};

export default page;
