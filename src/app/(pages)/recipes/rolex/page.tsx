import { trajanPro } from '@/app/fonts';
import RolexImage from '@/assets/recipe/rolex-page.jpeg';
import Image from 'next/image';

export default function Page() {
  return (
    <main className='w-full h-auto'>
      <div className='w-full px-8 py-20 md:px-10 md:py-28 xl:px-20  xl:container xl:mx-auto'>
        <div className='space-y-6'>
          <h3
            className={`${trajanPro.className} text-red text-center md:text-left`}
          >
            The BLT Rolex RECIPE
          </h3>
          <Image
            src={RolexImage}
            alt='Final Rolex Image'
            className='block w-full h-60  lg:h-[48rem] object-cover object-center rounded-lg'
          />
        </div>

        <div className='w-10/12 mx-auto pt-6 space-y-6'>
          <h4 className='font-bold text-lg lg:text-2xl'>Ingredients</h4>
          <ul className='list-disc list-inside pl-4 p1 space-y-3'>
            <li>
              2 chapatis (grab from your local chapati-maker or make yourself)
            </li>
            <li>4 large eggs</li>
            <li>6 slices of bacon, cooked to crispy perfection and chopped</li>
            <li>1 juicy plum tomato, seeds removed and chopped</li>
            <li>1 plum tomato, sliced for layering</li>
            <li>2 lettuce leaves, shredded</li>
            <li>1 zesty red onion, thinly sliced</li>
            <li>1 fiery green chili, chopped (optional)</li>
            <li>A handful of fresh coriander, chopped</li>
            <li>A pinch of salt and a dash of freshly ground black pepper</li>
            <li>2 tbsp vegetable oil</li>
            <li>2 tbsp mango chutney (optional)</li>
            <li>2 tbsp mayonnaise (optional)</li>
          </ul>

          <h4 className='font-bold text-lg lg:text-2xl'>Instructions</h4>
          <dl className='p1'>
            <dt className='font-semibold'>Sizzle up the bacon:</dt>
            <dd className='mb-3'>
              Sizzle those bacon slices in a frying pan until they’re crispy and
              irresistible. Set aside for later.
            </dd>

            <dt className='font-semibold'>Fry the filling:</dt>
            <dd className='mb-3'>
              Add to the pan the chopped tomato, red onion, green chili, and
              fresh coriander. Give it a good fry up to soften! Set aside.
            </dd>

            <dt className='font-semibold'>Onward with the omelette:</dt>
            <dd className='mb-3'>
              In a bowl, whisk the eggs with a pinch of salt and a dash of
              pepper. Heat 1 tbsp of vegetable oil in a frying pan over medium
              heat. Pour in half of the egg mixture. Cook until the eggs are
              just set, then flip and cook the other side until fully done.
            </dd>

            <dt className='font-semibold'>Rollin’ with the Chapati:</dt>
            <dd className='mb-3'>
              Place one chapati on top of the cooked egg. Let it steam for a few
              seconds, then carefully lift the egg and chapati together and flip
              onto a plate. Add in the tomato mixture, layer on the sliced
              tomatoes and pieces of lettuce. Roll up the chapati with the egg
              and bacon inside. Repeat with the remaining egg mixture, bacon,
              filling, and chapati.
            </dd>
          </dl>
        </div>
      </div>
    </main>
  );
}
