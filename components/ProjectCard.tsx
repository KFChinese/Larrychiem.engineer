import Link from 'next/link';
import cn from 'classnames';


export default function ProjectCard({ title, slug, gradient }) {


  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        'transform hover:scale-[1.01] transition-all',
        'rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1',
        gradient
      )}
    >
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg m-auto text-center md:text-lg font-medium mb-6 sm:mb-2.5 w-full text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h4>
        </div>
        <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
        </div>
      </div>
    </Link>
  );
}
