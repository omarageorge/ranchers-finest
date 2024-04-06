interface CustomerReviewCardProp {
  message: string;
  customer: string;
}
const CustomerReviewCard: React.FC<CustomerReviewCardProp> = ({
  message,
  customer,
}) => (
  <article className='w-full h-auto flex flex-col items-center justify-center gap-5 bg-whitish rounded-md px-4 py-6 xl:h-56'>
    <h3 className='font-light text-lg text-center lg:text-xl'>{message}</h3>
    <p className='font-bold text-xl text-center'>{customer}</p>
  </article>
);

export default CustomerReviewCard;
