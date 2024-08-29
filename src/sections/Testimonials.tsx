import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "As a business owner, Janview has become indispensable in tracking our progress and hitting our milestones on time.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamiebizleader",
  },
  {
    text: "Janview has significantly boosted our team's productivity. The transparency it offers in task management is unparalleled.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "Janview has transformed how I manage my projects and deadlines. It's the ultimate tool for staying on top of everything.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "Integrating Janview into our workflow was seamless, and the impact on our efficiency has been remarkable.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Managing events with Janview is a breeze. It keeps track of all the details, ensuring nothing falls through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration options in Janview are top-notch. It's perfectly tailored to our business needs.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting Janview has streamlined our project management and greatly improved communication within our team.",
    imageSrc: avatar7.src,
    name: "Jordan Patel",
    username: "@jpatelsbiz",
  },
  {
    text: "With Janview, assigning tasks, tracking progress, and managing documents has never been easier. It's a game changer.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsonproductivity",
  },
  {
    text: "Janview's user-friendly interface and robust features are perfectly aligned with our diverse business needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@caseyharperbiz",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
}) => (
  <div
  className={twMerge(
    "flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
  props.className
  )}
  >
  {props.testimonials.map(({text, imageSrc, name, username} ) => (
    <div className="card">
      <div>{text}</div>
      <div className="flex items-center gap-2 mt-5">
        <Image
          src={imageSrc}
          alt={name}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />
        <div className="flex flex-col">
          <div className="font-medium tracking-tight leading-5">
            {name}
            </div>
          <div className="leading-5 tracking-tight">{username}</div>
        </div>
      </div>
    </div>
  ))}
</div>
)

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
        <div className="flex justify-center">
        <div className="tag">Testimonials</div>
        </div>
      <h2 className="section-title mt-5">What Our Users Are Saying</h2>
      <p className="product-description mt-5">
        Users worldwide are impressed by the robust features and unparalleled
        efficiency that Janview delivers.
        </p>
        </div>
        <div className="flex justify-center gap-6">
          <TestimonialsColumn testimonials={firstColumn} />
          <TestimonialsColumn
          testimonials={secondColumn}
          className="hidden md:flex"
           />
          <TestimonialsColumn
          testimonials={thirdColumn}
          className="hidden lg:flex"
           />
        </div>
      </div>
    </section>
  )
};
