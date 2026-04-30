export type TestimonialSource = "MarieClaire" | "Glamour" | "Cosmopolitan" | "Forbes" | "BuzzFeed";

export type Testimonial = {
  source: TestimonialSource;
  quote: string;
};